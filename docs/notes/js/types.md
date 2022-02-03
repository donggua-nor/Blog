# 数据类型

## 基本数据

_Primitive Values 原始值_
* string
* number
* boolean
* undefined
* null
* Symbol
* BigInt

## 引用数据

_Reference values / Objects 对象_

几乎所有通过 `new KeywordCtor()` 创建的数据结构：

`Object` 、 `Array` 、 `Function` 、 `Map/WeakMap` 、 `Set/WeakSet` 、 `Date` 、 `RegExp` 等

## 区别

* 基本数据占据内存空间固定并存储在 **堆栈（Stack）** 中，**按值（by value）** 访问，查询速度较快。

* 引用数据占据内存空间更多且不固定并存储于 **堆（Heap）** 中，**按引用（by reference）** 访问，即内存中存储对象的引用地址 / 指针，查询速度较慢。

<img class="d-img__center" src="https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/js_values_stored.png" />

* 基本数据仅保存原始值，而引用数据的对象一般拥有相应的**属性或方法**。

:::tip
原始值被当作构造函数创建的一个对象来使用时，JavaScript会将其转换为一个对象，以便可以使用对象的特性，而后抛弃对象性质，并将它变回原始值
:::

来看一个简单的示例：

```js
const str = 'primitive';
str.length; // 9
str.toString(); // primitive
```

`str` 是一个基本数据类型的原始值，并不存在 `.length` 属性或 `.toString()` 方法。

但实际执行时相当于使用其包装类进行转换后的对象，因此将不会报错并得出预期结果：

```js
const str = 'primitive';
new String(str).length; // 9
new String(str).toString(); // primitive
```

## 类型判断

### typeof

* 除 `null` 外，正确返回基本数据类型

```js
typeof 'str'; // string;
typeof 1; // number
typeof true; // boolean
typeof undefined; // undefined
typeof Symbol(); // symbol
typeof BigInt(123); // bigint
```

* 除 `Function` 对象外，引用数据均返回 `object`

```js
typeof console.log; // function
typeof new Map(); // object
typeof new WeakMap(); // object
typeof new Set(); // object
typeof new WeakSet(); // object
// ...
```

* `typeof null === 'object'`

 在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 **`0x00`**），因此，null 的类型标签是 0，typeof null 也因此返回 "object" -  [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)

### instanceof

通过原型链检测对象是否是构造函数的实例

```js
function Person(name) {
  this.name = name
};
const man = new Person();

man instanceof Person; // true
```

:::warning
`instanceof` 并不完全可靠，因为 `Person.prototype` 属性的值是可以被修改的
:::

### Array.isArray()

判断是否是数组

```js
Array.isArray([]); // true
Array.isArray('str'); // false
```

:::tip
在检测数组时，相对于 `instanceof` ，该方法可检测 `iframes`

:::

```js
const iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1,2,3]

Array.isArray(arr); // true
arr instanceof Array; // false
```

### Object.prototype.toString()

采用借用 `Function.prototype.call/apply()` 的形式调用，返回 `[object type]`

```js
const toString = Object.prototype.toString;

toString.call('str'); // [object String]
toString.call(new Date()); // [object Date]
toString.call({}); // [object Object]
toString.call(Math); // [object Math]
```

:::tip
在确保没有覆盖 `toString()` 方法的情况下，采用这种方式检测对象类型是最可靠的
:::
