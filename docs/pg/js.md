---
outline: false
---

# JavaScript

_Collection of interesting or practical practice questions_

## new

1. 创建一个空的简单 JavaScript 对象 `{}`；
2. 为新创建的对象添加属性`__proto__`，将该属性链接至构造函数的原型对象`prototype`；
3. 将新创建的对象作为 `this` 的上下文；
4. 如果该函数没有返回对象，则返回 `this`

::: code-group

```js [<i class="fa-solid fa-flag-checkered"></i> Specification]
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

```js [<i class="fa-solid fa-code"></i> Solution]
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

## call、apply、bind

::: code-group

```js [<i class="fa-solid fa-code"></i> Solution]

```

:::

## instanceof

see [usage](/notes/js/types#instanceof)、[instanceof](/notes/js/prototype#原型链)

::: code-group

```js [<i class="fa-solid fa-flag-checkered"></i> Specification]
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}
const auto = new Car('Honda', 'Accord', 1998)

console.log(auto instanceof Car) // true
console.log(auto instanceof Object) // true

console.log(Instanceof(auto, Car)) // true
console.log(Instanceof(auto, Object)) // true
```

```js [<i class="fa-solid fa-code"></i> Solution]
function Instanceof(instance, ctor) {
  if (typeof ctor !== 'function') {
    throw new Error(`Right-hand side of 'instanceof' is not callable`)
  }
  if (!isObject(instance)) {
    return false
  }
  let proto = getProto(instance)
  while (true) {
    if (proto === null) {
      return false
    }
    if (proto === ctor.prototype) {
      return true
    }
    proto = getProto(proto)
  }
}

const isSupportProto = '__ptoto__' in {}

function getProto(obj) {
  return isSupportProto ? obj.__proto__ : Object.getPrototypeOf(obj)
}

function isObject(val) {
  return val !== null && typeof val === 'object'
}
```

:::

## Object.create

see [Object.create](/notes/js/prototype#原型式继承)

::: code-group

```js [<i class="fa-solid fa-flag-checkered"></i> Specification]
const person = {
  isHuman: false,
  say: function () {
    console.log('Hello！')
  }
}

const me = Object.create(person)
const u = ObjectCreate(person)

me.name = 'donggua'
me.isHuman = true
me.say() // Hello！
console.log(me) // { name: 'donggua', isHuman: true } ==prototype=> person

u.name = 'visitor'
u.isHuman = true
me.say() // Hello！
console.log(u) // { name: 'visitor', isHuman: true } ==prototype=> person
```

```js [<i class="fa-solid fa-code"></i> Solution]
function ObjectCreate(original) {
  function F() {}
  F.prototype = original
  return new F()
}
```

:::

## 防抖、节流

::: code-group

```js [<i class="fa-solid fa-code"></i> Solution]

```

:::

## 图片懒加载

::: code-group

```js [<i class="fa-solid fa-code"></i> Solution]

```

:::

## JSONP

::: code-group

```js [<i class="fa-solid fa-code"></i> Solution]

```

:::

## Iterator

::: code-group

```ts [<i class="fa-solid fa-flag-checkered"></i> Specification]
const info = {
  nickname: 'donggua',
  wechat: 'donggua_nor',
  address: 'Guangzhou, China'
}

for (const key of info) {
  console.log(`my ${key} is ${obj[key]}`)
}
```

```ts [<i class="fa-solid fa-code"></i> Solution]

```

:::

## Array <=> Tree

::: code-group

```js [<i class="fa-solid fa-flag-checkered"></i> Specification]
const arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 2 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 3 }
]

/* convert */

const tree = [
  {
    id: 1,
    name: '部门1',
    pid: 0,
    children: [
      {
        id: 2,
        name: '部门2',
        pid: 1,
        children: []
      },
      {
        id: 3,
        name: '部门3',
        pid: 2,
        children: [
          {
            id: 4,
            name: '部门4',
            pid: 3,
            children: []
          },
          {
            id: 5,
            name: '部门5',
            pid: 3,
            children: []
          }
        ]
      }
    ]
  }
]
```

```js [<i class="fa-solid fa-code"></i> Solution]

```

:::

## compose

::: code-group

```ts [<i class="fa-solid fa-flag-checkered"></i> Specification]
function fn1(x: number) {
  return x + 1
}
function fn2(x: number) {
  return x + 2
}
function fn3(x: number) {
  return x + 3
}
function fn4(x: number) {
  return x + 4
}

const a = compose(fn1, fn2, fn3, fn4)

console.log(a(1)) // 1+4+3+2+1=11
```

```ts [<i class="fa-solid fa-code"></i> Solution]

```

:::

## Scheduler

带并发限制的异步调度器 `Scheduler`，保证同时运行的任务最多有两个

::: code-group

```ts [<i class="fa-solid fa-flag-checkered"></i> Specification]
addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

// log: 2 3 1 4
```

```ts [<i class="fa-solid fa-code"></i> Solution]

```

:::

## LazyMan

::: code-group

```ts [<i class="fa-solid fa-flag-checkered"></i> Specification]
LazyMan('Hank')
// Hi! This is Hank!

LazyMan('Hank').sleep(10).eat('dinner')
// Hi! This is Hank!
// 等待10秒..
// Wake up after 10
// Eat dinner~

LazyMan('Hank').eat('dinner').eat('supper')
// Hi This is Hank!
// Eat dinner~
// Eat supper~

LazyMan('Hank').sleepFirst(5).eat('supper')
// Wake up after 5
// Hi This is Hank!
// Eat supper
```

```ts [<i class="fa-solid fa-code"></i> Solution]

```

:::

## Flatten

::: code-group

```ts [<i class="fa-solid fa-flag-checkered"></i> Specification]
const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 }
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3
}

flatten(obj)

// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }
```

```ts [<i class="fa-solid fa-code"></i> Solution]

```

:::

## Currying

::: code-group

```js [<i class="fa-solid fa-flag-checkered"></i> Specification]
const _log(a, b, c, d, e) => console.log(a, b, c, d, e)

const logger = currying(_log)

logger(1, 2, 3, 4, 5)
logger(1)(2)(3, 4, 5)
logger(1, 2)(3, 4)(5)
logger(1)(2)(3)(4)(5)

// 1
// 2
// 3
// 4
// 5
```

```js [<i class="fa-solid fa-code"></i> Solution]

```

:::

## LRUCache

::: code-group

```ts [<i class="fa-solid fa-flag-checkered"></i> Specification]
const cache = new LRUCache(2)

cache.put(1, 'A') // Cache [A]
cache.put(2, 'B') // Cache [A, B]
console.log(cache.get(1)) // A => Cache[B, A]

cache.put(3, 'C') // Cache [A, C]
console.log(cache.get(2)) // undefined => Cache[A, C]

cache.put(4, 'D') // Cache [C, D]
cache.put(5, 'E') // Cache [D, E]
console.log(cache.get(3)) // undefined => Cache[D, E]
console.log(cache.get(4)) // D => Cache[E, D]
```

```ts [<i class="fa-solid fa-code"></i> Solution]

```

:::

## EventEmitter

::: code-group

```js [<i class="fa-solid fa-flag-checkered"></i> Specification]
const event = new EventEmitter()

const log = (...rest) => console.log(...rest)

event.on('tap', log)
event.emit('tap', 1, 2, 3, 4) // 1 2 3 4

event.off('tap', handle)
event.emit('tap', 1, 2)

event.once('tapOnce', () => log('only fired once'))
event.emit('tapOnce') // only fired once
event.emit('tapOnce')
```

```ts [<i class="fa-solid fa-code"></i> Solution]

```

:::

## cloneDeep

::: code-group

```js [<i class="fa-solid fa-code"></i> Solution]

```

:::

## Promises/A+

[Promise Standard](https://promisesaplus.com/)

::: code-group

```js [<i class="fa-solid fa-code"></i> Solution]

```

:::
