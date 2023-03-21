# Workflows

> **All about what I've learned though work, including personal coding standards, exp & thinking, but not limited to that.**

## File Structure

**约定优于配置** _convention over configuration_

::: code-group

```bash [<i class="fa-solid fa-list"></i> Basic]
.
├── .vscode                           # VSCode 配置文件，用于统一开发习惯
├── public                            # 网站资源 (eg. favicon.ico)
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
├── ...                               #
├── README.md                         # 必需的项目文档
├── package.json                      # 项目信息
└── tsconfig.json                     # TypeScript 配置文件
```

:::

## Docs

- [document-style-guide | @ruanyf](https://github.com/ruanyf/document-style-guide)

## Git

- [Conventional Commits | GitHub](https://github.com/conventional-commits/conventionalcommits.org)

## ESLint

- [.eslintrc | GitHub](https://github.com/standard/eslint-config-standard/blob/master/.eslintrc.json)

## Prettier

### Rules

:::details

#### _semi_

一般来说，仅在以 `(`、`[`、`/`、`+`、`-` 开头的代码行需要分号以保证正确解析代码：

```js
// IIFE
;(() => {
  console.log('semi styles')
})()
```

---

#### _singleQuote_ 与 jsxSingleQuote

单引号相对更简洁，但在浏览器中基本使用双引号，故在 JSX 中保留此行为

---

#### _trailingComma_

- `es5`

```c
const obj = { a: 1, b: 2, }
const arr = [1, 2, 3,]
```

- `none`

```js
const obj = { a: 1, b: 2 }
const arr = [1, 2, 3]
```

---

#### bracketSameLine

- `true`

```jsx
// prettier-ignore
<button
  id="prettier-id"
  className="prettier-class"
  onClick={handleClick}>
  Click Here
</button>
```

- `false`

```jsx
// prettier-ignore
<button
  id="prettier-id"
  className="prettier-class"
  onClick={handleClick}
>
  Click Here
</button>
```

:::

- [prettier | Docs](https://prettier.io/docs/en/options.html)
- [.prettierrc](http://json.schemastore.org/prettierrc)

```json
/* .prettierrc.json */
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "none",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "avoid",
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "css",
  "vueIndentScriptAndStyle": true,
  "endOfLine": "lf",
  "embeddedLanguageFormatting": "auto",
  "singleAttributePerLine": false
}
```

## Stylelint

> 通过实践体验, 个人觉得 Stylelint 并没有什么必要, 多依赖一个工具反而徒增开发烦恼
>
> 使用 [Prettier](#Prettier) 进行格式化美化代码足以

为自己保持一个良好的 CSS 书写顺序

```json
{
  /**
   * Using .json5/.jsonc if u want to comments like me,
   * But I need highlight here.
   *
   * 1. 布局定位 > 容器布局 > 容器属性
   * 2. 字体内容 > 颜色、背景 > 其他
   * 3. 同类属性放置于一起，并按使用频率排序，简写属性 > 具体属性
   */
  "order/properties-order": [
    /* 布局定位 */
    "float",
    "clear",
    "position",
    "top",
    "bottom",
    "right",
    "left",
    /* 容器布局 */
    "display",
    "flex",
    "align-items",
    "justify-content",
    "overflow",
    "overflow-x",
    "overflow-y",
    /* 容器属性: 由内至外 */
    "width",
    "min-width",
    "max-width",
    "height",
    "min-height",
    "max-height",
    "padding",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    "border",
    "outline",
    "margin",
    "margin-top",
    "margin-right",
    "margin-bogttom",
    "margin-left",
    /* 文本内容 */
    "line-height",
    "font-size",
    "font-family",
    "font-weight",
    "text-align",
    "text-justify",
    "text-indent",
    "text-overflow",
    "text-decoration",
    "white-space",
    "writing-mode",
    /* 颜色与背景 */
    "color",
    "background",
    "background-position",
    "background-repeat",
    "background-size",
    "background-color",
    "background-clip",
    /* whatever */
    "opacity",
    "filter",
    "list-style",
    "visibility",
    "z-index",
    "box-shadow",
    "resize",
    "transition",
    "transform"
    /* ... */
  ]
}
```

## User experience
