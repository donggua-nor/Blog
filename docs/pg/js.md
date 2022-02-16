# JavaScript

## new

1. 创建一个空的简单 JavaScript 对象 `{}`；
2. 为新创建的对象添加属性`__proto__`，将该属性链接至构造函数的原型对象`prototype`；
3. 将新创建的对象作为 `this` 的上下文；
4. 如果该函数没有返回对象，则返回 `this`

:::: code-group
::: code-group-item Achieve

```js
function New(ctor) {
  if (typeof ctor !== 'function') {
    return
  }
  const obj = {}
  obj.__proto__ = ctor.prototype
  // same as `const obj = Object.create(ctor.prototype)`
  const res = ctor.apply(obj, [...arguments].slice(1))
  return isObject(res) ? res : obj
}

function isObject(val) {
  return val !== null && typeof val === 'object'
}
```

:::
::: code-group-item Test

```js
function Car(number) {
  this.number = number
}

const car1 = new Car(1)
const car2 = New(Car, 2)

Car.prototype.color = 'original color'

console.log(car1.number) // 1
console.log(car2.number) // 2

console.log(car1.__proto__.color) //original color
console.log(car2.__proto__.color) //original color
```

:::
::::

## call、apply、bind

## instanceof

## Object.create()

## Iterator

## 防抖、节流

## 图片懒加载

## 获取 URL 参数

## JSONP

## 数组去重

## 数组 flat

## 数组 reduce

## Array <=> Tree

## compose

## Currying

## Events

## cloneDeep

## Promise
