# CommonJS

在 `Node.js` 模块系统中，每个文件都被视为独立的模块。

## 基础使用

* `module.exports` 导出
* `require()` 加载

## Module实例

`Node` 内部提供了一个构建函数 `module` ，而每个模块都是一个 `module` 实例

```js
// module实例对象
Module {
  id: '.',
  path: '/Users/donggua/learning/daily',
  exports: {},
  parent: null,
  filename: '/Users/donggua/learning/daily/mod.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/donggua/learning/daily/node_modules',
    '/Users/donggua/learning/node_modules',
    '/Users/donggua/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
```

* `module.id` 标识符，'.' 或者是带有绝对路径的模块文件名
* `module.filename` 文件名，带有绝对路径
* `module.loaded` 表示模块是否已完成加载

当前例子是单独的模块，没有被 `require` 调用使用，所以为 `false`

* `module.parent` 表示调用该模块的模块

当前例子没有被调用，所以返回值是 `null`

:::tip Note
于 v14.6.0, v12.19.0版本已弃用，使用 `require.main` 代替
:::

* `module.children` 表示模块所调用的其他模块
* `module.exports` 表示模块对外输出的值，默认 `{}`
* `module.path` 模块所在目录名称
* `module.paths` 模块的搜索路径

## exports 变量

`Node` 为每个模块提供一个 `exports` 变量，指向 `module.exports` ，因此模块导出有以下几种写法

```js
module.exports.a = 1;
// 等同于
module.exports = { a: 1 };
// 或
exports.a = 1;
```

同时应该注意， 我们不能修改 `exports` 的指向

```js
// 以下写法是错误且无效的
exports = 'angthing';
```

## 模块的缓存机制

当执行 `require(path)` 时，会先使用 `path` 为 `id` 从模块的缓存 `Module._cache` 中检查，存在则直接从缓存中读取返回对应的 `module.exports` ，因此多次调用 `require(path)` 不会导致模块代码被多次执行

```js
require("./a");
require("./a").done = true;
require("./a").done // true
```

`Node` 中使用 `require.cache` 指向 `Module._cache` 给予开发者访问查看模块的缓存
若需要删除对应的模块缓存，可以使用 `delete require.cache[path]`

## 循环加载

```js
/// 这里直接引用官方demo
// a.js
console.log('a starting');
exports.done = false;
const b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');

// b.js
console.log('b starting');
exports.done = false;
const a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');

// main.js
console.log('main starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.done = %j, b.done = %j', a.done, b.done);
```

为了防止无限循环，在循环引用时， `Node` 会返回未完成的不完整副本。

## require 加载机制

### 源码分析

`CommonJs` 源码位于 `node/lib/internal/modules/cjs` ，这里主要看 `loaders.js`

```js
// 模块构造函数
function Module(id = '', parent) {
  this.id = id;
  this.path = path.dirname(id);
  this.exports = {};
  moduleParentCache.set(this, parent);
  updateChildren(parent, this, false);
  this.filename = null;
  this.loaded = false;
  this.children = [];
}
// 以通过的文件路径为id，加载并返回模块的exports属性
Module.prototype.require = function(id) {
  validateString(id, 'id');
  if (id === '') {
    throw new ERR_INVALID_ARG_VALUE('id', id, 'must be a non-empty string');
  }
  requireDepth++;
  try {
    return Module._load(id, this, /* isMain */ false);
  } finally {
    requireDepth--;
  }
};
```

:::tip 注
以下源码省略了原生模块 [NativeModule](https://github.com/nodejs/node/blob/master/lib/internal/bootstrap/loaders.js)等部分无关本次分析的代码
:::

```js
// 1. 如果缓存中有模块数据，则从缓存中取出并返回模块的exports属性
// 2. 通过构造方法生成新的模块，保存到缓存中并返回模块的exports属性
Module._load = function(request, parent, isMain) {
  let relResolveCacheIdentifier;
  if (parent) {
    debug('Module._load REQUEST %s parent: %s', request, parent.id);
    // Fast path for (lazy loaded) modules in the same directory. The indirect
    // caching is required to allow cache invalidation without changing the old
    // cache key names.
    relResolveCacheIdentifier = `${parent.path}\x00${request}`;
    const filename = relativeResolveCache[relResolveCacheIdentifier];
    if (filename !== undefined) {
      const cachedModule = Module._cache[filename];
      if (cachedModule !== undefined) {
        updateChildren(parent, cachedModule, true);
        if (!cachedModule.loaded)
          return getExportsForCircularRequire(cachedModule);
        return cachedModule.exports;
      }
      delete relativeResolveCache[relResolveCacheIdentifier];
    }
  }
  //...
  // 检查缓存
  const cachedModule = Module._cache[filename];
  if (cachedModule !== undefined) {
    updateChildren(parent, cachedModule, true);
    if (!cachedModule.loaded) {
      const parseCachedModule = cjsParseCache.get(cachedModule);
      if (!parseCachedModule || parseCachedModule.loaded)
        return getExportsForCircularRequire(cachedModule);
      parseCachedModule.loaded = true;
    } else {
      return cachedModule.exports;
    }
  }
  // 从模块映射中查看是否有符合条件的
  const mod = loadNativeModule(filename, request);
  if (mod?.canBeRequiredByUsers) return mod.exports;
  // Don't call updateChildren(), Module constructor already does.
  const module = cachedModule || new Module(filename, parent);
  if (isMain) {
    process.mainModule = module;
    module.id = '.';
  }
  Module._cache[filename] = module;
  //...
  return module.exports;
}
```

* 当执行`require(path)`时，`node`才会去执行对应的模块
* 通过`Module._load()`函数解析并返回`module.exports` 对象，`require()`实际就是加载了`exports`对象
* 以`path`作为`id`进行缓存，对同一模块 `require()` 加载将直接从缓存中获取并返回

其中，模块的缓存在 `helper.js` 中通过 `require.cache` 指向 `Module._cache`

### 实例 debugger 验证

:::tip debugger流程：
1. 执行 `node --inspect-brk=9229  main` 命令
2. 在**chrome**浏览器中打开 `chrome://inspect` 并点击 `Remote Target` 中的 `main(文件名)` 标识的`inspect`

> `--inspect-brk` 用于首行开始debugger，否则用 `--inspect` 。 `9229` 为指定端口号

:::

```js
// a.js
let done = false;

function change() {
  done = false;
  console.log("in a, change inside", done);
}

function checkIsChange() {
  console.log("in a, real done", done);
}

module.exports = { done, change, checkIsChange };
```

```js
// b.js
const a = require("./a");
console.log("in b, before change", a.done);
a.done = true;
console.log("in b, done changed", a.done);
a.checkIsChange();
a.change();

module.exports = {};
```

```js
// main.js
debugger;
const a = require("./a");
const b = require("./b");
console.log("in main, a.done", a.done);
```

```bash
# 输出结果
in b, before change false
in b, done changed true
in a, real done false
in a, change inside false
in main, a.done true
```

同时我们会发现：

1. `b.js` 中的 `a.done = true` 只影响了 `main.js` 中的输出结果
2. `b.js` 中调用 `a.change()` 方法没有影响到 `main.js` 和 `b.js` 的输出结果

通过**debugger**可以看到：

当 `main.js` 运行到 `const a = require("./a");` 时， `node` 才执行 `Module._load()` 获取模块 `a`

![node_debug_cjs](https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/node_debug_cjs.png)

而 `b.js` 再次加载模块 `a` 时，是通过缓存机制读取的。

## 总结

* `CommonJs` 属于运行时加载
* `CommonJs` 是同步加载
* `require()` 是对`exports`对象的赋值操作，而`Module._load()` 借用函数形式保证模块内外不会互相影响
