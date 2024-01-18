# Canvas <Badge>2d</Badge>

[Canvas | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) 笔记

## Basic

### \<canvas\> 元素

[\<canvas\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) HTML 元素用于创建一个用户指定尺寸大小的画布，供 `JavaScript` 绘制图形、动画等:

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

拥有了 `canvas` 标签创建的画布，就可以通过调用 `canvas` 元素的实例方法 [getContext()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) 获取该画布的渲染上下文以使用其[绘画功能](#drawing)

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

`canvas` 元素默认为网格结构，每个网格单元即为 `canvas` 元素中的一像素，默认以左上角坐标 `[0, 0]` 作为画布原点，**当绘制元素时，所有元素位置均是相对于原点定位**。

```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
ctx.fillRect(x, y, width, height)
```

<img class="d-img__center" src="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes/canvas_default_grid.png" alt="canvas_default_grid" />

## Shapes

想象一下我们将使用画笔在画板中绘制一些图形内容，此时 `JavaScript` 就是画笔，`canvas` 则是画板。通过了解 [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) 具体实践了解在 `canvas` 中是如何进行绘制的

### Paths

在 `canvas` 画布中，**路径** (_paths_) 是最基本的图形元素，路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合，相当于构思画笔应该移动的轨迹。

通常使用路径绘制图形的基本操作是：

1. 创建路径起始点，相当于准备进行绘制
2. 将笔触移动到准备落笔的地方
3. 使用画图命令指定绘制路径，即确认画笔移动轨迹
4. 闭合绘制完成的路径，调用命令将路径绘制成图形

### lines 线段

了解绘制的基本操作，我们可以通过 [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) 实现绘制线段具体体验一下

相关的实例方法如下：

- [beginPath()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath)
  新建一条路径，将清空子路径列表开始绘制新的图形路径

- [moveTo(x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo)
  将笔触移动到指定的坐标位置 `[x, y]` 上

- [lineTo(x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)
  绘制一条从当前位置到指定位置 `[x, y]` 的直线

- [closePath()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath)
  将笔触绘制到当前路径起点，即闭合路径

- [stroke()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke)
  通过线条来绘制图形轮廓

- [fill()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill)
  通过填充路径的内容区域生成实心的图形

```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.beginPath()
// 将笔触移动到 [50, 50]
ctx.moveTo(100, 50)
// 落笔指定绘制路径，在此绘制三条直线
ctx.lineTo(150, 50)
ctx.lineTo(150, 100)
ctx.lineTo(100, 100)
// 闭合图形，将显示一个完整的 50x50 的矩形
ctx.closePath()
ctx.stroke()

ctx.beginPath()
ctx.moveTo(250, 50)
ctx.lineTo(300, 50)
ctx.lineTo(300, 100)
ctx.lineTo(250, 100)
// 不同于上文，此处没有闭合路径，最终的图形是未闭合的矩形
// ctx.closePath()
ctx.stroke()

ctx.beginPath()
ctx.moveTo(400, 50)
ctx.lineTo(450, 50)
ctx.lineTo(450, 100)
ctx.lineTo(400, 100)
// 不同于 stroke() 方法，fill() 方法会自动闭合路径，无需调用 closePath()
ctx.fill()
```

:::tip

- 本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径（线、弧形、等等）构成图形。因此在开始绘制新路径前都必须调用 `beginPath()`，清空重置当前的路径列表，以重新绘制新的图形

- `closePath()` 是非必需的，比如调用 `fill()` 时会自动闭合图形路径

  :::

### rectangle 矩形

在上文实践绘制线段中，演示了绘制多条直线组合成矩形的方式，实际上 `canvas` 支持矩形的图形绘制：

- [fillRect(x, y, width, height)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)
  绘制一个填充的矩形

- [strokeRect(x, y, width, height)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  绘制一个矩形的边框

- [clearRect(x, y, width, height)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)
  清除指定矩形区域，让清除部分完全透明。

借此上文例子中的两个矩形可以简化为

```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.strokeRect(100, 50, 50, 50)
ctx.fillRect(400, 50, 50, 50)
```

:::tip

- 在业务场景中需要清空画布内容时使用 `clearRect(0, 0, canvasWidth, canvasHeight)` 是非常实用的
  :::

**除此之外，绘制矩形还有仅绘制矩形路径的 API**

- [rect(x, y, width, height)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect)
  绘制一个左上角坐标为（x,y），宽高为 width 以及 height 的矩形路径添加到当前路径中

:::tip

- `fillRect()`、`strokeRect()` 相当于 `rect()` + `fill()`、`stroke()`的语法糖。

```js
ctx.fillRect(400, 50, 50, 50)

// 等同于
ctx.beginPath() // 绘制新路径前都必须调用 beginPath()
ctx.rect(400, 50, 50, 50)
ctx.fill()
```

- 因为 `rect()` 属于画布的路径命令，从 `beginPath()` 开始多个单独调用的路径命令属于同个路径列表，将共同应用的绘制样式：

```js
ctx.beginPath() // 仅调用一次 beginPath，后续均为此路径的子路径

ctx.fillStyle = 'green'
ctx.rect(50, 50, 50, 50)

ctx.fillStyle = 'blue'
ctx.rect(150, 50, 50, 50)

ctx.fillStyle = 'yellow'
ctx.rect(250, 50, 50, 50)
ctx.fill()
```

因此当希望绘制多个样式的矩形时，应当在调用 `rect()` 前通过 `beginPath()` 创建新的路径，或直接使用 `fillRect()`、`strokeRect()`

```js
ctx.beginPath() // 创建新的路径并应用绿色样式
ctx.fillStyle = 'green'
ctx.rect(50, 50, 50, 50) // green rect
ctx.fill()

ctx.beginPath() // 创建新的路径并应用蓝色样式
ctx.fillStyle = 'blue'
ctx.rect(150, 50, 50, 50) // blue rect
ctx.fill()

ctx.beginPath() // 创建新的路径并应用黄色样式
ctx.fillStyle = 'yellow'
ctx.rect(250, 50, 50, 50) // yellow rect
ctx.fill()
```

- 绘制单个矩形时，`fillRect()` 与 `strokeRect()` 的性能更佳；反之绘制多个矩形时，先调用 `rect()` 创建完所有矩形路径后再执行 `fill()` 或 `strokeRect()` 的性能更佳。

参阅 [canvas-paths-performance](https://www.measurethat.net/Benchmarks/Show/2244/0/canvas-paths-performance)
:::

### circle/ellipse 圆形

- [arc(x, y, radius, startAngle, endAngle, anticlockwise)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc)

  根据 `anticlockwise` 给定的方向（默认为顺时针） ，以 `[x,y]` 为圆心，从 `startAngle` 开始到 `endAngle` 结束，绘制一个半径为 `radius` 的圆弧或圆形

- [ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse)

  根据 `anticlockwise` 给定的方向（默认为顺时针） ，以 `[x,y]` 为圆心，从 `startAngle` 开始到 `endAngle` 结束，绘制一个半径分别为 `radiusX` 和 `radiusY` 的椭圆

- [arcTo(x1, y1, x2, y2, radius)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo)

  根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。

  :::tip

  - `arc()` 方法中 `startAngle` 与 `endAngle` 单位为弧度，与角度的计算公式为：**弧度=(Math.PI/180)\*角度**。

  - 根据 [MDN 中文文档](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#%E5%9C%86%E5%BC%A7) 描述，`arcTo()` 方法的实现不太可靠，故不在此演示。

  :::

### 贝塞尔曲线

- [quadraticCurveTo(cpx, cpy, x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)

  从当前画笔位置 `[beginX, beginY]` ，以 `[cpx, cpy]` 为控制点，`[x, y]` 为结束点绘制**二次贝塞尔曲线**

```js
ctx.beginPath()
ctx.moveTo(100, 250) // [beginX, beginY]

ctx.quadraticCurveTo(250, 100, 400, 250)
ctx.stroke()
```

- [bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)

  从当前画笔位置 `[beginX, beginY]` ，以 `[cp1x, cp1y]`、`[cp2x, cp2y]` 为两个控制点，`[x, y]` 为结束点绘制**三次贝塞尔曲线**

```js
ctx.beginPath()
ctx.moveTo(100, 250) // [beginX, beginY]

ctx.bezierCurveTo(150, 100, 350, 100, 400, 250)
ctx.stroke()
```

:::tip Online Demo

- [二次贝塞尔曲线](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html)

- [三次贝塞尔曲线](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html)
  :::
