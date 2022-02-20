---
sidebarDepth: 3
---

# 介绍与参考

本篇为笔者经历一定的 `Vue` 项目实战后，在期望深入与面试驱动共同推动下，多方面参考学习总结而来

* [@黄轶老师](https://github.com/ustbhuangyi) - [Vue.js 源码全方位深入解析](https://coding.imooc.com/learn/list/228.html)
* [@wangtunan](https://github.com/wangtunan) - [Vue2.0 源码分析](https://wangtunan.github.io/blog/vueAnalysis/introduction/)
* [@HcySunYang](https://github.com/HcySunYang) - [vue-design](https://github.com/HcySunYang/vue-design)

## 主要目录结构

```bash
.
├── dist              # 构建结果目录
├── scripts           # Rollup 构建配置、工程化脚本
├── src               #
│   ├── compiler      # 编译相关
│   ├── core          # 核心源码
│   ├── platforms     # 跨平台（web、weex）
│   ├── server        # 服务端端渲染相关
│   ├── sfc           # .vue 文件解析逻辑
│   └── shared        # 通用工具函数
└── test              # e2e、单元测试用例
```

### dist

> [对不同构建版本的解释](https://cn.vuejs.org/v2/guide/installation.html#对不同构建版本的解释)

`Vue` 源码是基于 [Rollup](https://rollupjs.org/guide/zh/) 构建的，在此目录下存放 `Rollup` 构建的对应版本文件

### scripts

由 `Rollup` 构建配置， `Git` 提交校验脚本， `Shell` 发布脚本组成

完成不同构建版本的打包，代码更新提交，版本更新发布

### test

自动化测试，使用 `nightwatch` 、 `karma` 、 `jasmine` 进行端到端测试、单元测试、服务端渲染测试

可通过单元测试了解一些晦涩难懂的 API 运行结果

### src 源码目录

#### compiler

包含编译相关的相关，主要是将模板 `template` 编译成 `render` 函数的实现逻辑

> [运行时-编译器-vs-只包含运行时](https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时)

通过 [vue-cli](https://cli.vuejs.org/)（目前已新增 [create-vue](https://github.com/vuejs/create-vue)、[Vite](https://cn.vitejs.dev/)）创建的项目，以 `.vue` 文件的 [SFCs](https://vue-loader.vuejs.org/zh/spec.html) 单文件组件形式开发，通过 [vue-loader](https://vue-loader.vuejs.org/zh/) 结合打包工具在构建时进行预编译。

因此日常开发使用的是 **运行时** `runtime-only` 版本。可通过开启 [runtimeCompiler](https://cli.vuejs.org/zh/config/#runtimecompiler) 使用 **包含运行时编译器** 的 `runtime + compiler` 版本。

#### core

```bash
.
├── core
│   ├── components   # 通用内置组件 keep-alive
│   ├── global-api   # 全局 API 如 Vue.use 实现
│   ├── instance     # 包含 vue 组件实例完整的生命周期相关源码实现
│   ├── observer     # 核心响应式原理的实现
│   ├── util         # 各类工具函数, nextTick、mergeOptions
│   └── vdom         # 虚拟 DOM 抽象创建及 Diff
```

#### platforms

`Vue2.0` 提供了跨平台的能力，如 [weex](http://doc.weex.io/zh/)。

在此目录下， `Vue` 将对应平台的代码划分放置于对应的 `web` ， `weex` 目录下

#### server

服务端渲染相关，主要的工作是把组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将静态标记"混合"为客户端上完全交互的应用程序

#### sfc

将 [SFCs](https://vue-loader.vuejs.org/zh/spec.html) 形式的 `.vue` 文件解析成 JavaScript 对象的实现逻辑

#### shared

全局通用的常量文件及工具函数

## 总结

### Vue 核心思想

  **渐进式框架**、**数据驱动**、**组件化**

### Virtual DOM

  虚拟 DOM 是对于真实 DOM 的抽象描述，其作用是为了**便于最小化找出更新差异并由此优化性能**，更重要的是**提供了一种低成本实现跨平台的方式**。
  
  但虚拟 DOM 的性能并不一定优于直接使用真实 DOM，创建虚拟 DOM 需要额外的内存消耗，Diff 过程也有一定开销。
  
  使用虚拟 DOM 是一种合理的优化权衡，为的是通过虚拟 DOM 抹除不同平台的差异性，减少频繁或者大规模的原生操作，并提供相对不错的一个性能下限。

:::tip
`Vue` 中的虚拟 DOM 借鉴了 [snabbdom](https://github.com/snabbdom/snabbdom) 的实现并进行拓展
:::
