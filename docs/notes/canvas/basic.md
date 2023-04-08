# 基础知识

[Canvas | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API) 笔记

## 基本用法

### canvas 元素

[\<canvas\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) HTML 元素用于创建一个用户指定尺寸大小的画布，供 JavaScript 绘制图形及图形动画:

- [DOM properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)

1. `canvas` 标签常用 `width`、`height` 属性作为初始画布比例，当未设置宽度和高度时，默认为 `width: 300px; height: 150px;`

2. `canvas` 标签包裹内容仅在不受支持的浏览器(**<IE9**)显示，可作为后备内容降级渲染

```html
<canvas id="canvas" width="300" height="150">
  <!-- only shown in unsupported browsers -->
  <img src="placeholder.png" width="300" height="150" />
</canvas>
```

:::tip

- `canvas` 标签非 [单闭合标签](https://developer.mozilla.org/en-US/docs/Glossary/Void_element#self-closing_tags)，若书写时未正确设置结束标签 `</canvas>`，将导致后续全部内容被视为后备内容。

```html
<canvas />
<span>anything here</span>

<!-- same as -->
<canvas>
  <span>anything here</span>
</canvas>
```

- 当同时设置 `canvas` 标签的宽高属性与 CSS 样式时，若 CSS 的尺寸与初始画布的比例不一致，画布可能会出现扭曲。
  :::

### 渲染上下文

拥有了 `canvas` 标签创建的画布，想要使用 JavaScript 进行绘制，就需要使用 `canvas` 元素属性方法 [getContext()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) 获取该画布的渲染上下文及其绘画功能：[Canvas API](#canvas-api)

```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
```

:::tip
在不受支持的浏览器中，`getContext()` 将返回 `null`，因此可作为兼容性判断

```js
if (!ctx) {
  /**
   * alert message
   * Your browser has expired. Update your browser so that
   * you can get best experience on this website
   */
}
```

:::

### 基于网格的坐标空间

`canvas` 元素默认为网格结构，每个网格单元即为 `canvas` 元素中的一像素，默认以左上角坐标 `[0, 0]` 作为画布原点，当绘制元素时，所有元素位置均是相对于原点定位。

```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
ctx.fillRect(x, y, width, height)
```

<img class="d-img__center" src="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes/canvas_default_grid.png" alt="canvas_default_grid" />
