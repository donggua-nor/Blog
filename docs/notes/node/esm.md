# ES Module

ES6 新增的模块化方案，将逐步取代 [CommonJS](./cjs) 等规范，成为未来浏览器与服务器通用的模块解决方案

## 基本使用

* `export` 导出
* `import ... from $path` 导入

## export

`export` 定义对外接口，导出模块内部变量/方法/类

```js
function fn() {};
const val = 1;

export { fn, val };

export class Person {};
```

* 可使用关键词 `as` 对变量/方法/类重命名

```js
const val = 1;
export { val as num };
```

* 不可对变量进行重复导出

```js
export const val = 1;
export { val }; // Duplicate export of 'val'
```

* 应注意 `export` 应提供对外接口，即需要显式声明

```js
/**
 * Unexpected token 'export'
 * 缺乏声明，相当于直接导出值，而不是接口
 */
export 1;

/**
 * Declaration or statement expected
 * 声明语句没有紧跟着export，所以这里相当于直接输出变量的值
 * 可使用 export { val }; 修正
 */
const val = 1;
export val;
```

* **export default**

语义化标准，用于导出模块的默认值

```js
const val = 1;
export default val;

// OR
export default function() { ... }

// OR
export default class Person { ... }
```

需要注意的是， `export default` 相当于导出模块的 `default` 变量， 因此后面不能紧跟声明语句
同时模块的默认值有且只有一个，因此不能重复输出

```js
export default { val: 1 };
export default { repeatVal: 2 };
// Identifier '.default' has already been declared

export default
const test = 3;
// Unexpected token 'const'
```

不同于 `export` ， `export default` 可以将模块整体导出，以便导入使用时不需要指定与 `export` 对应的变量名

```js
// utils.js
const val = 1;

function fn() {
  console.log(val)
};
export default { val, fn };

// main.js
import utils from './utils';
utils.val;
utils.fn();
```

相当于

```js
// utils.js
const val = 1;

function fn() {
  console.log(val)
};
export const utils = { val, fn };

// main.js
import { utils } from './utils'; // 注意这里 utils 需要用 {} 包裹，且变量名必须与 export 导出的一致
utils.val;
utils.fn();
```

* 结合使用

```js
import _, { cloneDeep } from 'lodash';

_.cloneDeep(obj);
cloneDeep(obj);
```

## import

`import` 用于加载模块的对外接口

```js
import { val } from './utils';
```

与 `export` 相同，可使用关键词 `as` 对导入的变量重命名

```js
import { val: num } from './utils';
```

对于非 `export default` 导出的模块想要进行整体加载，可以使用 `*` 配合 `as` 指定加载整个模块

```js
// utils.js
export const val = 1;
export function fn() {
  console.log(val);
}

// main.js
import * as utils from "./utils";
utils.fn();
```

在加载完成后，import 语句会执行所加载的模块，可以借用这个特性，将项目初始化方法封装抽离

```js
// bootstrap.js
console.log(1);

// main.js
import './bootstrap'; // 1
```

```js
// utils
export default function() {
  console.log(1);
}

// main
print();
import print from './utils';
// 1
```

:::tip
`import` 命令带有提升作用
:::

## 特性与运用

* 组合使用`export` 、`import` 进行模块转发

```js
export { utils } from './utils';

// 相当于
import { utils } from './utils';
export { utils };
```

不同于第二种写法，第一种写法在模块中不能使用 `utils`

* 浏览器加载
使用 `script` 标签加载ESM时，需要声明 `type` 属性

```js
< script type = "module"
scr = "./utils.js" > < /script>
```

:::tip Note
带有 `type="module"` 属性的脚本将被异步执行，不会堵塞浏览器渲染
:::

为了浏览器兼容性加载，还可以使用 `type="nomudole"` 告知浏览器加载对应支持的标准模块

```js
< script type = "module"
scr = "./esm.js" > < /script> <
script type = "nomodule"
scr = "./cjs.js" > < /script>
```

对于不支持 `ES Module` 的浏览器，标识有 `type="module"` 的脚本将不会被执行，反之同理

* import() 动态加载

```js
import($path).then(module => /* to do */ ).catch(err => /* err handle */ );
```

1. 按需加载

```js
document.addEventListener('click', e => import($path).then(...));
```

2. 条件加载

```js
if (condition) {
  import($path_A).then(...);
} else {
  import($path_B).then(...);
}
```

3. 动态路径

```js
const path = condition ? $path_A : $path_B;
import(path).then(...)
```

## import 加载机制

### 实例

```js
// utils.js
export let val = 1;

setTimeout(() => {
  val = 2;
}, 1000);

export function fn() {
  console.log(val);
}
// main.js
import * as utils from "./utils.mjs";
utils.fn();
setTimeout(() => {
  utils.fn();
}, 1500);
// 输出结果
// 1
// 2
```

从输出结果可以看出，当 `utils` 模块内数据发生变化， `main` 模块中引用的数据也将同步变化

### debugger 验证

:::tip debugger流程：
1. 执行 `node --inspect-brk=9229  main` 命令
2. 在**chrome**浏览器中打开 `chrome://inspect` 并点击 `Remote Target` 中的 `main(文件名)` 标识的`inspect`

> `--inspect-brk` 用于首行开始debugger，否则用 `--inspect` 。 `9229` 为指定端口号

:::

![node_debug_esm](https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/node_debug_esm.png)

在项目初始化时， `utils` 模块内容就已经被加载，而此时 `main` 模块还未开始加载

## 总结

* `ES Module` 属于编译时加载
* `ES Module` 是异步加载
* `import` 是对模块接口中值的引用，模块内的数据变化将影响外部引用数据
