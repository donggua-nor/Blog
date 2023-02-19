# package.json

## name

`string` 项目名称，发布到 [npm](https://www.npmjs.com/) 中的唯一标识

```ts
const pkgNameReg = ^(?:@[a-z0-9-*~][a-z0-9-*._~]*/)?[a-z0-9-~][a-z0-9-._~]*$
```

## private

`boolean` 指明包私有，避免被 [npm publish](https://docs.npmjs.com/cli/v8/commands/npm-publish) 发布

## version

`string` 版本号，遵循 [语义化版本号](https://semver.org/)，使用 [npm version](https://docs.npmjs.com/cli/v8/commands/npm-version) 管理

## description

`string` 项目描述

## keywords

`Array<string>` 项目关键词, 作用类似于 [description](#description)

## homepage

`string` 项目主页，一般是项目网站或者 GitHub 地址

## repository

`string | { type: string; url: string }` 项目仓库

## bugs

 `string | { url: string; email?: string }`

一般是 issue 地址。存在时可以通过 [npm bugs](https://docs.npmjs.com/cli/v8/commands/npm-bugs) 打开对应地址

## licenses

* `string` <Badge>recommend</Badge>
* `string | { type: string; url: string } | Array<{ type: string; url: string }>`

参阅 [https://spdx.org/licenses/](https://spdx.org/licenses/)

```json
{
  "license" : {
    "type" : "ISC",
    "url" : "https://opensource.org/licenses/ISC"
  }
}
// or
{
  "licenses" : [
    {
      "type": "MIT",
      "url": "https://www.opensource.org/licenses/mit-license.php"
    },
    {
      "type": "Apache-2.0",
      "url": "https://opensource.org/licenses/apache2.0.php"
    }
  ]
}
// recommend
{
  "licenses": "MIT"
}
```

## author, contributors

`string` 作者或贡献者信息

```json
{
  "author": "donggua <donggua.nor@gmail.com> (https://github.com/donggua-nor)"
}

{
  "contributors": [
    {
      "name" : "donggua",
      "email" : "donggua.nor@gmail.com",
      "url" : "https://github.com/donggua-nor"
    },
    {
      "name" : "backup",
      "email" : "309366517@qq.com",
      "url" : "https://github.com/donggua-nor"
    }
  ]
}

```

## packageManager

`string` 指明项目使用的包管理工具

```ts
const pkgManagerReg = (npm|pnpm|yarn)@\d+\.\d+\.\d+(-.+)?
```

## type

`'commonjs' | 'module'` 表明包使用的模块语法（ `Node@14` 以上版本支持 [ESM](http://localhost:8080/Blog/notes/node/esm.html)）

* 默认为 `commonjs`, 对于 `mjs` 后缀名文件采用 `ESM` 语法解析

* 设置为 `module` 时，对于 `cjs` 后缀名文件采用 `commonjs` 语法解析

## scripts

`Record<string, string>` 带有以下默认生命周期的脚本命令： `<pre>` | `<post>`

* install
* uninstall
* start
* restart
* stop
* test
* pack
* publish
* 自定义脚本命令

特殊的 `prepare` 、 `prepublishOnly` 见 [scripts 文档](https://docs.npmjs.com/cli/v8/using-npm/scripts)

:::tip
在 pnpm@6 与 yarn2 中， `preinstall` 将在 `install` 后执行，而不是在 `install` 之前

* [yarn2 Lifecycle Scripts](https://yarnpkg.com/advanced/lifecycle-scripts)

* [preinstall phase is executed after install phase
  ](https://github.com/pnpm/pnpm/issues/3836)

为此 pnpm 提供了 [pnpm:devPreinstall](https://github.com/pnpm/pnpm/commit/245920f14ee02eb7d8fa0545902a6288a567a5d2) 钩子以兼容开发者的使用习惯

:::

## bin

`string | { ${binName}: ${binFilePath} }` 声明包的脚本文件

脚本文件一般在文件头以 [SheBang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) 声明运行脚本的语言

:::: code-group
:::code-group-item bash

```bash
npm install demo -g

d
# log: Npm is COOL
```

:::
:::code-group-item script

```js
#!/usr/bin/env node

console.log('Npm is COOL')
```

:::
:::code-group-item package.json

```json
{
  "name": "demo",
  "bin": {
    "d": "./bin/demo.js"
  }
}
```

:::
:::code-group-item directory structure

```bash
.
├── bin
│   └── demo.js
└── package.json
```

:::
::::

## dependencies

`{pkgName<string>: pkgVersion<string>}` 项目依赖包映射表

常见依赖包版本遵循 [语义化版本号](https://semver.org/)，并根据声明语法供 [lockfile](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json) 匹配：

* `^`：仅固定 `major` 大版本，匹配 `minor`、`patch` 版本
* `~`：固定 `major`、`minor` 版本，仅匹配 `patch` 补丁版本

其余版本范围参阅文档 [dependencies](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/#dependencies)

通过 [npm link](https://docs.npmjs.com/cli/v8/commands/npm-link) 等生成的本地包路径参阅 [local-path 文档](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#local-paths)

### dependencies

`--save, -S` 不区分运行环境等，任何情况都需要安装的依赖项

### devDependencies

`--save-dev, -D` 仅在开发环境安装的依赖项

### peerDependencies

`--save-peer` 对等依赖项

比如 [vue-router](https://github.com/vuejs/router) 或 [vuex](https://github.com/vuejs/vuex) 都是基于 [vue@2.x](https://github.com/vuejs/vue) 的响应式 API 构建的依赖库（插件），但在构建 `vue-router` 、 `vuex` 产物时，作者并不想将 `vue` 包含进去，即可将 `vue` 声明为 `peerDependencies` .

:::tip

* `>=npm@7` 默认安装 `peerDependencies`， `3<npm<=6` 用户需要自行管理 `peerDependencies`

:::

#### peerDependenciesMeta

当用户安装了该项目但未安装 [peerDependencies](#peerDependencies) 时，此字段提供对应的处理声明：

```json
// vue-router
{
  "peerDependencies": {
    "vue": "^2.6.0"
  },
  "peerDependenciesMeta": {
    "vue": {
      "optional": true // 若使用 `vue-router` 时未安装 `vue` 依赖，那么将 `vue` 视为可选依赖
    }
  },
}
```

### optionalDependencies

`--save-optional, -O` 可选的依赖项，即使安装此类型依赖失败，也不会影响功能使用 `一般由开发者提供兼容处理`

:::tip

比如在使用 [chokidar](https://github.com/paulmillr/chokidar) 在 `OSX` 系统使用原生的 `fsevents` 进行文件监听处理，但在 `Linux` (主要是 mac) 上安装此依赖时经常出现 `fsevents` 相关的报错信息。此时可以添加参数忽略此依赖进行安装：

* `npm/pnpm install --no-optional`

* `yarn install --ignore-optional`

:::

### bundleDependencies

`Array<string>` 捆绑依赖项，可通过 [npm pack](https://docs.npmjs.com/cli/v8/commands/npm-pack) 将声明的捆绑依赖打包进项目压缩包中

## overrides

`Record<string, string>` 针对特定依赖项进行按需重写，支持嵌套、限定范围

```json
{
  "overrides": {
    "foo": "1.0.0",
    // or
    "baz": {
      "bar": {
        "foo": "1.0.0"
      }
    }
  }
}
```

## types

`string => filePath` 声明此项目的 `TypeScript` 类型文件

## files

`Array<string>` 指明将此项目作为依赖包安装时包含的文件，默认为排除以下文件的全部内容：

* `.git`
* `CVS`
* `.svn`
* `.hg`
* `.lock-wscript`
* `.wafpickle-N`
* `.*.swp`
* `.DS_Store`
* `._*`
* `npm-debug.log`
* `.npmrc`
* `node_modules`
* `config.gypi`
* `*.orig`
* `package.json` / `npm-shrinkwrap.json`

 :::tip
 与 `files` 字段作用类似的还有 `.npmignore` 、 `.gitignore`

 
但 `files` 类似于白名单，往往产物内容更少更方便。而 `ignore` 文件类似于黑名单，需要开发者持续维护

 - [npm | Docs](https://docs.npmjs.com/cli/v9/using-npm/developers#keeping-files-out-of-your-package)
 - [For the love of god, don’t use .npmignore](https://medium.com/@jdxcode/for-the-love-of-god-dont-use-npmignore-f93c08909d8d)
 :::

## main

`string` 标准化的工具包主入口

默认为 `index.js` ，主要用于 `Node.js` 的 [cjs](/notes/node/cjs.html) 模块

:::: code-group
:::code-group-item app

```js
const foo = require('foo') // => from "main" field
// foo => { value: 1 }
```

:::
:::code-group-item dep

```js
// foo.cjs
module.exports = {
  value: 1
}
```

```json
// package.json
{
  "main": "./foo.cjs"
}
```

:::
::::

## browser

`string` 工具包主入口

当项目仅服务于浏览器端，则应采用此字段代替 [main](#main) 字段

```html
<script src="foo.js"></script>
```

:::tip
参阅 [package-browser-field-spec](https://github.com/defunctzombie/package-browser-field-spec)
:::

## module

`string` 工具包主入口

非官方支持的字段，基本上是 [Webpack](https://webpack.js.org/guides/author-libraries/#final-steps)、[Rollup](https://github.com/rollup/rollup/wiki/pkg.module) 等打包工具为支持 [ES Module](/notes/node/esm.html) 而约定的字段

:::tip
参阅 [what-is-the-module-package-json-field-for | stackoverflow](https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for)
:::

## exports

`Record<string, string | Exports>` 最新标准的导出接口 <Badge>recommend</Badge>

为工具包主入口及其语义版本升级提供了更可靠的保证，支持多模块、多环境、子路径等定义形式。

```json
{
  "exports": {
    ".": {
      "node-addons": "", // for C++ plugins
      "node": "foo-node.js", // Node.js environment，一般不需要
      "import": "foo.mjs", // for import/import()
      "require": "foo.cjs", // for require()
      "default": "" // 兜底
    },
    // 子模块路径 foo/bar.js
    "./bar.js": {
      "import": "./bar.mjs",
      "require": "./bar.cjs", 
    },
    // for TypeScript
    "types": {},
    // for browser
    "browser": {},
    // for deno
    "deno": {},
    // dev environment
    "development": {},
    // prod environment
    "production": {}
  }
}
```

:::tip
* 优先使用 `exports` 并配合 `main` 等字段做兼容配置

```json
{
  "main": "foo.cjs",
  "module": "foo.mjs",
  "browser": "foo.umd.js",
  "types": "foo.d.ts",
  "exports": {
    ".": {
      "import": "foo.mjs",
      "require": "foo.cjs",
      "browser": "foo.umd.js",
      "types": "foo.d.ts"
    }
  }
}
```

* 注意多模块条件导出处理　[Dual CommonJS/ES module packages](http://nodejs.cn/api/packages.html#dual-commonjses-module-packages)

* 参阅　[Package entry points](https://nodejs.org/api/packages.html?spm=ata.21736010.0.0.3d314bfcjrqivI#packages_package_entry_points)
:::

## workspaces

`Array<string>` 声明多包项目 _monorepo_ 的子包路径 详见 [workspaces | npm Docs](https://docs.npmjs.com/cli/v8/using-npm/workspaces)

## config

`Record<string, string>` [process.env](https://nodejs.org/api/process.html#processenv) 配置命令行的环境变量

:::: code-group
:::code-group-item main.js

```js
#!/usr/bin/env node

console.log(process.env.npm_package_config_port) // 8080
console.log(process.env.npm_package_config_foo) // bar
```

:::
:::code-group-item package.json

```json
{
  "scripts": {
    "variable": "node main.js"
  },
  "config":　{
    "port": "8080",
    "foo": "bar"
  }
}
```

:::
::::

## publishConfig

`Record<string, string>` 发布配置，详见[config | npm Docs](https://docs.npmjs.com/cli/v8/using-npm/config)

## engines

`Record<'node'|'npm', string>` 指明该项目运行的平台

* 指明项目所需 `node` 版本

```json
{
  "engines": {
    "node": ">=14 <18"
  } 
}
```

* 指明安装包所需 `npm` 版本 

```json
{
  "engines": {
    "npm": "~5.2.0" // npx version
  } 
}
```

## os

`Array<string>` 基于 [process.platform](https://nodejs.org/api/process.html#processplatform) 运行项目的操作系统黑白名单：
 

```json
{
  "os": ["darwin", "linux"]
  // or
  {
    "os": ["!win32"]
  }
}
 ```

## cpu

`Array<string>` 基于 [process.arch](https://nodejs.org/api/process.html#processarch) 运行项目的操作系统黑白名单：
 

```json
{
  "os": ["darwin", "linux"]
  // or
  {
    "os": ["!win32"]
  }
}
 ```
