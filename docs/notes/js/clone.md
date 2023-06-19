# 对象的拷贝

由于 JavaScript 中对象是引用数据类型，访问、操作对象实际上就是对其内存地址上的数据进行读写操作。在开发中执行拷贝对象并进行修改时，便需要根据场景需求注意对原对象数据的影响。

## 浅拷贝

浅拷贝只会对一层对象开辟新的内存空间进行存放，对于嵌套对象的深层属性仍是原来的引用地址。

### Object.assign()

```js
const obj = {
  name: 'donggua',
  props: {
    value: 1
  }
}

const newObj = Object.assign({}, obj)
newObj.name = '_donggua'
newObj.props.value++

obj // { name: 'donggua', props: { value: 2 } }
newObj // { name: '_donggua', props: { value: 2 } }
```

### Array.prototype.concat()

```js
const arr = [1, 2, 3, [4, 5]]
const ary = arr.concat()
ary[0] = 4
ary[3][0] = 1

arr // [1, 2, 3, [1, 5]];
ary // [4, 2, 3, [1, 5]];
```

### Array.prototype.slice()

```js
const arr = [1, 2, 3, [4, 5]]
const ary = arr.slice()
ary[0] = 4
ary[3][0] = 1

arr // [1, 2, 3, [1, 5]];
ary // [4, 2, 3, [1, 5]];
```

### ES6 扩展运算符

```js
const obj = {
  name: 'donggua',
  props: {
    value: 1
  }
}

const newObj = {
  ...obj
}
newObj.name = '_donggua'
newObj.props.value++

obj // { name: 'donggua', props: { value: 2 } }
newObj // { name: '_donggua', props: { value: 2 } }
const arr = [1, 2, 3, [4, 5]]
const ary = [...arr]
ary[0] = 4
ary[3][0] = 1

arr // [1, 2, 3, [1, 5]];
ary // [4, 2, 3, [1, 5]];
```

## 深拷贝

深拷贝将对象深层进行完整的精确拷贝，对新对象的任何修改不会影响原对象数据。

### JSON.parse(JSON.stringify())

```js
const obj = {
  name: 'donggua',
  props: {
    value: 1
  }
}

const newObj = JSON.parse(JSON.stringify(obj))
newObj.name = '_donggua'
newObj.props.value++

obj // { name: 'donggua', props: { value: 1 } }
newObj // { name: '_donggua', props: { value: 2 } }
```

**但 `JSON.stringify()` 存在明显的弊端:**

- `JSON.stringify()` 只能序列化对象的可枚举的自有属性
- `undefined`、`Symbol`、任意函数将被忽略
- `NaN`、`Infinity` 、`-Infinity` 将被当成 `null` 处理
- `RegExp`、`Error`、`Set`、`Map` 等特殊对象，仅会序列化可枚举的属性（一般情况下即为空对象）
- Date 类型，转换后会调用 toJSON 转为字符串类型
- 循环引用的对象将报错

```js
const map = new Map()
map.set(1, 2) // Map: 0: {1 => 2}
const obj = {
  a: undefined,
  b: Symbol(),
  c: NaN,
  d: Infinity,
  e: -Infinity,
  f: map,
  g: new Date()
  // h: obj => throw Error
}

Object.defineProperty(obj, 'i', {
  value: ''
})

const newObj = JSON.parse(JSON.stringify(obj))

// before:
// obj: {
//     a: undefined
//     b: Symbol()
//     c: NaN
//     d: Infinity
//     e: -Infinity
//     f: Map: 0: {1 => 2}
//     g: Fri Jan 28 2022 23: 29: 48 GMT + 0800(中国标准时间) {}
//     i: "hidden value"
// }

// after
// newObj: {
//     c: null,
//     d: null,
//     e: null,
//     f: {},
//     g: '2022-01-28T15:29:48.519Z'
// }
```

### structuredClone

> HTML 规范标准的 [Web API](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)

```js
const original = {
  name: 'MDN'
}
original.itself = original

const clone = structuredClone(original)

console.assert(clone !== original) // the objects are not the same (not same identity)
console.assert(clone.name === 'MDN') // they do have the same values
console.assert(clone.itself === clone) // and the circular reference is preserved
```

`HTML` 规范的标准提案，默认解决了循环引用问题，支持多种默认数据类型。同时不限于普通拷贝，可使用 `structuredClone(value, { transfer })` 调用方式以直接移动源数据

:::warning
尽管作为规范标准实现的 Web API，但目前兼容性还是个巨大的问题，同时仍有其他不足：

- 无法拷贝对象的原型链
- 无法拷贝函数
- 不支持 `Error` 数据类型
- ...
  :::

### MessageChannel

> vue.nextTick 源码曾使用的 Web API，在了解这个 API 时发现可以用于深拷贝

```js
function cloneUsingChannel(obj) {
  return new Promise(resolve => {
    const channel = new MessageChannel()
    channel.port1.onmessage = e => resolve(e.data)
    channel.port2.postMessage(obj)
  })
}
```

但该方法存在一个缺陷，当拷贝对象带有函数属性时，将抛出错误：

```js
const obj = {
  fn: function () {}
}
const newObj = cloneUsingChannel(obj)
// Failed to execute 'postMessage' on 'MessagePort': function() {} could not be cloned.
```

### JQuery、lodash

- `JQuery.extend()`

```js
import $ from 'jquery'

const newObj = $.extend(true, {}, obj)
```

- `lodash.cloneDeep`

```js
import { cloneDeep } from 'lodash'

const newObj = cloneDeep(obj)
```
