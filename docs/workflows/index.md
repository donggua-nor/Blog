# Workflows

> **All about what I've learned though work, including personal coding standards, exp & thinking, but not limited to that.**

## File Structure

**约定优于配置** _convention over configuration_

::: code-group

```bash [<i class="fa-solid fa-list"></i> Basic]
.
├── .vscode                           # VSCode 配置文件，用于统一开发习惯
├── public                            # 网站资源 (ex. favicon.ico)
├── scripts                           # 脚本相关
├── src                               #
│   ├── apis                          # 接口 (有时候会使用 services 命名)
│   ├── assets                        # 静态资源
│   ├── components                    # 全局组件
│   ├── constants                     # 常量
│   ├── hooks                         # 通用 Hooks
│   ├── lib                           # 第三方或无业务依赖代码
│   ├── locales                       # i18n
│   ├── pages                         # 页面
│   │   ├── SubPage                   # 大驼峰规范 => 组件即是一个构造函数
│   │   │   ├── components            # 子组件可单独分配 components 文件夹
│   │   │   ├── Child.tsx             # 或直接平铺在父组件中
│   │   │   ├── index.module.less     # 根据应用的 CSS Scope 方案命名
│   │   │   └── index.tsx             # index 作为默认路径，视为根节点
│   │   └── App.tsx                   # 页面入口
│   ├── styles                        # 通用/基础样式
│   ├── router                        # 页面路由
│   ├── types                         # TypeScript 声明
│   ├── utils                         # 工具函数
│   └── main.tsx                      # 应用启动入口
├── README.md                         # 必需的项目文档
└── package.json                      # 项目信息
```

:::

## Docs

- [document-style-guide | @ruanyf](https://github.com/ruanyf/document-style-guide)

## Git

- [Conventional Commits | GitHub](https://github.com/conventional-commits/conventionalcommits.org)

## ESLint

- [.eslintrc | GitHub](https://github.com/standard/eslint-config-standard/blob/master/.eslintrc.json)

## Prettier

- [prettier | Docs](https://prettier.io/docs/en/options.html)
- [.prettierrc](http://json.schemastore.org/prettierrc)

## Stylelint

## User experience
