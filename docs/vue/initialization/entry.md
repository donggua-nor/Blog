# 从入口开始

  当着手一个项目时，应当从其入口开始，对于基于 NPM 托管的项目，我们从 `package.json` 文件入手：

```json
{
  "name": "vue",
  "version": "2.6.14",
  "main": "dist/vue.runtime.common.js",
  "module": "dist/vue.runtime.esm.js",
  "srcipts": {
    "dev": "rollup -w -c scripts/config.js --environment TARGET:web-full-dev",
    "build": "node scripts/build.js",
    "build:ssr": "npm run build -- web-runtime-cjs,web-server-renderer",
    "build:weex": "npm run build -- weex"
  },
  "devDependencies": {
    "rollup": "^1.0.0",
    "rollup-plugin-alias": "^1.3.1",
    "rollup-plugin-buble": "^0.19.6",
    "rollup-plugin-commonjs": "^9.2.0",
    "rollup-plugin-flow-no-whitespace": "^1.0.0",
    "rollup-plugin-node-resolve": "^4.0.0",
    "rollup-plugin-replace": "^2.0.0",
  }
}
```

在此罗列了本文章需要关注的信息：
* 指明项目引用不同规范下的文件入口

比如笔者调试的项目demo是基于 `vue-cli` 构建的项目，优先使用 `module` 字段标识对应的 `ESM` 模块文件

在调试源码时一般调试 `dist/vue.runtime.esm.js` 文件

开启 [runtimeCompiler](https://cli.vuejs.org/zh/config/#runtimecompiler) 选项后调试 `dist/vue.esm.js` 文件

* `Vue` 基于 `Rollup` 进行构建打包

* `Vue` 运行构建命令时将执行 `node scripts/build.js`，并会根据对应场景传入对应的参数

## 基于 Rollup 的源码构建

### build 构建文件

打开 `scripts/build.js` 文件，了解主要的代码逻辑部分：

```js
let builds = require('./config').getAllBuilds()

// filter builds via command line arg
if (process.argv[2]) {
  const filters = process.argv[2].split(',')
  builds = builds.filter(b => {
    return filters.some(f => b.output.file.indexOf(f) > -1 || b._name.indexOf(f) > -1)
  })
} else {
  // filter out weex builds by default
  builds = builds.filter(b => {
    return b.output.file.indexOf('weex') === -1
  })
}

build(builds)
```

从这段代码可以看出：
* 根据对应场景传入对应的参数，将在此进行构建配置的过滤以沟通不同版本的代码
* 相关配置存放于 `scripts/config.js` 中

### alias 路径别名

打开 `scripts/config.js` ，需要先关注一下 `Rollup` 路径别名配置：

```js
const alias = require('rollup-plugin-alias')
const aliases = require('./alias')
const resolve = p => {
  const base = p.split('/')[0]
  if (aliases[base]) {
    return path.resolve(aliases[base], p.slice(base.length + 1))
  } else {
    return path.resolve(__dirname, '../', p)
  }
}
```

在此 `Vue` 使用根据传入路径参数 `p` 获取根路径 `base` ，并通过 [rollup-plugin-alias](https://github.com/rollup/rollup-plugin-alias) 配置路径别名

`alias` 配置位于 `scripts/alias.js` 中：

```js
const resolve = p => path.resolve(__dirname, '../', p)

module.exports = {
  vue: resolve('src/platforms/web/entry-runtime-with-compiler'),
  compiler: resolve('src/compiler'),
  core: resolve('src/core'),
  shared: resolve('src/shared'),
  web: resolve('src/platforms/web'),
  weex: resolve('src/platforms/weex'),
  server: resolve('src/server'),
  sfc: resolve('src/sfc')
}
```

当在源码中引入对应配置的路径时，将通过 `resolve` 函数找到实际的文件路径。如：

```js
// 以 src/platforms/web/runtime/index.js 为例
import Vue from 'core/index'

// 相当于
import Vue from 'src/core/index'
```

### config 构建配置

了解完路径别名规则，再看下最终完成打包的构建配置：

```js
// 预设的对应构建目标下的 Rollup 配置
const builds = {
  // Runtime only ES modules build (for bundlers)
  'web-runtime-esm': {
    entry: resolve('web/entry-runtime.js'),
    dest: resolve('dist/vue.runtime.esm.js'),
    format: 'es',
    banner
  },
  // Runtime+compiler ES modules build (for bundlers)
  'web-full-esm': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.esm.js'),
    format: 'es',
    alias: { he: './entity-decoder' },
    banner
  }
  // ...
}

// 根据构建目标取出 Rollup 配置
function genConfig(name) {
  const opts = builds[name]
  const config = {
    input: opts.entry,
    external: opts.external,
    plugins: [
      flow(),
      alias(Object.assign({}, aliases, opts.alias))
    ].concat(opts.plugins || []),
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.moduleName || 'Vue'
    },
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    }
  }

  // ...略去部分配置代码

  return config
}

// 导出供 `scripts/build.js` 使用
exports.getAllBuilds = () => Object.keys(builds).map(genConfig)
```

当构建我们项目所需的 [ES Module](/Blog/notes/node/esm.html#基本使用) 规范源码文件时，将经过 `Rollup` 以 `web/entry-runtime.js` 为入口文件进行构建打包，最终生成 `vue.runtime.esm.js` 文件放置于 `dist` 目录中。

## Vue 的入口

在 `web/entry-runtime.js` 构建入口文件中，是一份简单的接口转发代码：

```js
import Vue from './runtime/index'

export default Vue
```

进一步查找源入口，打开 `src/platforms/web/runtime/index.js` 文件：

```js
import Vue from 'core/index'

// ...略去与入口无关的代码，将在其他对应章节详述

export default Vue
```

通过事先了解的 `Rollup` 构建中的 [alias](#alias-路径别名) 配置，我们便可找到对应的 `src/core/index.js` ：

```js
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'

initGlobalAPI(Vue)

// ...服务端渲染相关

Vue.version = '__VERSION__'

export default Vue
```

其中有两处关键： `initGlobalAPI(Vue)` 从语义化的函数命名可知是对 `Vue` 进行全局 API 扩展的功能函数。同时引导我们进入更接近的 `src/core/instance/index.js` 文件：

```js
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue(options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
```

在此终于找到了 `Vue` 的初始化声明，接下来便可以由此开始对 `Vue` 构造函数及整体功能进行进一步深入了解。


