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

see [usage](/Blog/notes/js/types.html#instanceof)、[instanceof](/Blog/notes/js/prototype.html#原型链)

:::: code-group
::: code-group-item Achieve

```js
function Instanceof(instance, ctor) {
  if (typeof ctor !== 'function') {
    throw new Error(`Right-hand side of 'instanceof' is not callable`)
  }
  if (!isObject(instance)) {
    return false
  }
  let proto = getProto(instance)
  while(true) {
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
::: code-group-item Test

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car); // true
console.log(auto instanceof Object); // true

console.log(Instanceof(auto, Car)); // true
console.log(Instanceof(auto, Object)); // true
```

:::
::::

## Object.create

see [Object.create](/Blog/notes/js/prototype.html#原型式继承)

:::: code-group
::: code-group-item Achieve

```js
function ObjectCreate(original) {
  function F() {}
  F.prototype = original
  return new F()
}
```

:::
::: code-group-item Test

```js
const person = {
  isHuman: false,
  say: function() {
    console.log('Hello！')
  }
};

const me = Object.create(person);
const u = ObjectCreate(person);

me.name = 'donggua';
me.isHuman = true;
me.say(); // Hello！
console.log(me); // { name: 'donggua', isHuman: true } ==prototype=> person

u.name = 'visitor'
u.isHuman = true;
me.say(); // Hello！
console.log(u); // { name: 'visitor', isHuman: true } ==prototype=> person
```

:::
::::

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
