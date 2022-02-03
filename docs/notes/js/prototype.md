# 从原型到继承

## 构造函数与实例

借用new 关键词与构造函数是常用的创建对象的方式之一

```js
function Person(name) {
  this.name = name;
}
const man = new Person('man');

man; // Person { name: 'man' }
```

## prototype

* `prototype` 是函数的一个对象属性，其指向调用该构造函数而创建的实例的**原型**
* `prototype` 上定义的属性和方法可以被对象实例共享

```js
Person.prototype;
// { constructor: f }
// { 
//   constructor: Person(name), 
//    __proto__: Object
// }

Person.prototype.say = function() {
  console.log('hello')
};
man.say(); // hello
```

## \_\_proto\_\_

*  `__proto__` 是对象的一个属性，其指向该对象的原型

```js
man.__proto__ === Person.prototype; // true
```

:::tip
  ES5中新增的创建对象的方法 *`Object.create()`* 就是经典的例子

*`Object.create()`* 接收一个对象作为参数，以该对象作为原型，创建一个新的对象

```js
const child = Object.create(man);
child.__proto__ === man; // true
```

:::

## Object.getPrototype()

`__proto__` 属性已从 Web 标准中删除，但浏览器暂未正式弃用。而ES5亦提供了替代方法 `Object.getPrototypeOf()`

```js
Object.getPrototypeOf(child) === man; // true
```

## constructor

`constructor` 是原型对象指向其构造函数的一个属性
一般是原型对象对其构造函数的引用属性

```js
 Super.prototype.constructor === Super; // true
```

## 原型链

在了解 `__proto__` 时，我们以 man 为原型创建了新的对象 `child` ：

![__proto__](https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/js_prototype_proto.png)

`child` 对象本身并没有 `name` 属性, 当输出 `child.name` 时，实际上是输出了 `child.__proto__` 所指向的原型上的属性，即 `man.name`

同时在 JavaScript 中，函数也是对象的一种，而所有的对象都是由基类 `Object` 继承而来

```js
Person instanceof Object; // true
```

且 `prototype` 有共享属性与方法的特性：

```js
Person.prototype.__proto__ === Object.prototype; // true
```

而当我们进一步打印出基类 `Object` 的 `__proto__` 属性：

```js
Object.prototype.__proto__; // null
```

实际上，在 JavaScript 中，当读取对象属性时，浏览器会查找当前对象中是否有该属性，如果找不到，则通过 `__proto__` 向上查找原型中是否存在该属性并以此类推，直到最顶层的原型对象为止。且 `Object` 基类不存在再往上的原型对象，即为 `null`

我们可以通过关系图进行总结得出原型链如下：

![inheritance_in_js](https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/js_prototype_inheritance.jpg)

## JS中的继承实现

:::tip
  在 JavaScript 中，实际上并没有真正的类，其对象继承是基于**原型**，而非经典模型的OOP模式。
:::

JavaScript 中的继承实际上是源于构造函数中的 `prototype` 属性，该属性上定义的属性和方法可以被对象实例共享。
而每个对象都有隐式属性 `__proto__` 并指向其构造函数的 `prototype` ，并可通过此原型链进行关联访问，从而呈现出实例对象继承原型 `prototype` 的样子

### 原型链继承

```js
function Person() {
  this.value = 1;
  this.arr = [1];
}
Person.prototype.log = function() {
  console.log('JavaScript')
};

function Child() {}
Child.prototype = new Child();

const boy = new Child();
const girl = new Child();

boy.value; // 1
girl.value; // 1

boy.log(); // JavaScript
girl.log(); // JavaScript

boy.arr.push(2); // [1, 2]
girl.arr; // [1, 2]
```

通过 `prototype` 上属性/方法可以被共享的性质实现继承，便是原型链继承，也是 **ECMAScript** 使用的主要继承方式。
当访问实例属性/方法时，将通过原型链机制读取到父级的属性/方法。

但这种继承方式存在两个问题：
* 实例化子类时无法给父类构造函数传参
* 子类 `prototype` 指向同一个原型，原型中包含的引用值会在所有实例间共享

### 借用构造函数

```js
function Person(sex) {
  this.sex = sex;
  this.arr = [1];
}
Person.prototype.log = function() {
  console.log(this.sex)
};

function Child(sex) {
  Person.call(this, sex);
}

const boy = new Child('boy');
const girl = new Child('girl');

boy; // { sex: 'boy', arr: [1] }
girl; // { sex: 'girl', arr: [1] }

boy.arr.push(1); // [1, 2]
girl.arr; // [1]

boy.log; // undefined
girl.log; // undefined
```

在子类构造函数中调用父类构造函数，妙用 `Function.prototype.call/apply` ，以新的对象为上下文执行构造函数。
相比原型链继承，这种继承方式可以向父类传参，也不存在共享同个原型上的引用属性。
但是可以发现，**子类实例没有继承父类原型上定义的方法（__仅原型方法无法继承__）**

### 组合继承

```js
function Person(sex) {
  this.sex = sex;
  this.arr = [1];
}
Person.prototype.log = function() {
  console.log(this.sex)
};

function Child(sex) {
  Person.call(this, sex); // 继承实例属性
}

Child.prototype = new Person(); // 继承属性与方法

const boy = new Child('boy');
const girl = new Child('girl');

boy; // { sex: 'boy', arr: [1] }
girl; // { sex: 'girl', arr: [1] }

boy.arr.push(1); // [1, 2]
girl.arr; // [1]
```

组合使用 **原型链继承** 和 **借用构造函数** 两种方式，综合其优点：
* 通过原型链继承父类属性与方法
* 借用构造函数继承实例属性
  
但很明显，我们调用了两次父类构造函数，这是需要优化的。

### 原型式继承

由 JavaScript 布道者 [*Douglas Crockford*](https://zh.wikipedia.org/wiki/%E9%81%93%E6%A0%BC%E6%8B%89%E6%96%AF%C2%B7%E5%85%8B%E7%BE%85%E5%85%8B%E7%A6%8F%E7%89%B9) 于 [_《Prototypal Inheritance in JavaScript》_](https://www.crockford.com/javascript/prototypal.html) 提出：

```js
function object(o) {
  function F() {};
  F.prototype = o;
  return new F();
}
```

借用临时构造函数，将传入的对象作为其原型对象并返回其实例。
这种继承方式更贴近 JavaScript 原型性质，新对象通过共享基础对象的 `prototype` 原型属性，实现原型继承。

ES5将其规范化实现，增加了 `Object.create()` 方法

```js
if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}
const newObject = Object.create(oldObject);
```

但借用 `prototype` 共享属性也就意味着这种方式与**原型链继承**一样存在引用数据会在所有实例间共享的问题

### 寄生式继承

```js
function createObject(o) {
  const obj = object(o); // 以原型式继承为基础
  obj.log = function() {
    console.log('new object')
  }; // 增强对象
  return obj;
}
```

在**原型式继承**的基础上，借用工厂函数并以自定义方式增强对象。
这种继承方式就是**原型式继承**的扩展，但并没有解决实例共享引用数据的问题，且通过这种方式增强对象难以复用。
相同的是：**原型式继承**与**寄生式继承**都是把重点放在对象上，而不用关注构造函数与类型。

### 组合寄生式继承

回看**组合继承**方式，我们在其基础上优化调用两次父类构造函数的问题，就可以得到一个目前最佳的继承方式。
而上述多种继承方式也明显指出直接指定子类原型对象避免不了引用数据会在所有实例间共享的问题：

```js
Child.prototype = new Person();

// 不用多次调用父类构造函数，但引用数据仍共享
Child.prototype = Person.prototype;
```

因此需要借用寄生式继承来继承父类原型

```js
// 以父类原型为基础创建一个新的对象，并赋值给子类原型
Child.prototype = Object.create(Person.prototype);
```

但由于此时子类原型被重写为以父类原型为基础创建的对象，那么其原型对象所指向的也就是父类构造函数，因此需要修正子类原型对象的正确指向

```js
/* prototype is Person cause `Object.create()` */
Child.prototype.constructor === Person; // true

/* fix constructor */
Child.prototype.constructor = Child;
```

到此，糅合多种继承方式的优点而成的最佳继承方式就实现了

```js
function Person(sex) {
  this.sex = sex;
  this.arr = [1];
}
Person.prototype.log = function() {
  console.log(this.sex)
};

function Child(sex) {
  Person.call(this, sex); // 继承实例属性
}

// 以父类原型为基础创建一个新的对象，并赋值给子类原型
Child.prototype = Object.create(Person.prototype);

// 修正重写子类原因导致的constructor错误指向
Child.prototype.constructor = Child;
```

### ES6 Class

```js
class Person {
  static isSuper = true;
  constructor(sex) {
    this.sex = sex;
  }
}

class Child extends Person {
  constructor() {
    super();
  }
}
```

通过 `babel` 编译来了解其背后的实现原理：[e.g.](https://babeljs.io/repl/#?browsers=&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYGwhgzhAEAKCmAnCB7AdtA3gKGtCALmAQJbDQkQDKArgA5LQC80BiN8A3NgJDDqF2wAikQAKCPAAeASiy48rABaUAdJKnN807ngC-2A9lCQYAYRUgAJtGkF4aKzATJ08vgLY1hosXJyK-PRIfrrQBnpAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.15.3&externalPlugins=&assumptions=%7B%7D)

```js
// 实现继承
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    },
  });
  if (superClass) {
    subClass.__proto__ = superClass;
  }
}

// 执行构造函数
function _createSuper(Derived) {
  // ...
  return Super.apply(this, arguments);
}

// 避免把构造函数当成普通函数执行的验证，即需要通过 new 调用
function _classCallCheck() {
  if (!instance instanceof Constructor) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// 父类构造函数
var Person = function Person(sex) {
  _classCallCheck(this, Person);
  this.sex = sex;
};

Object.defineProperty(Person, "isSuper", true);

// 子类构造函数
var Child = /*#__PURE__*/ (function(_Person) {
  _inherits(Child, _Person);
  var _super = _createSuper(Child);

  function Child() {
    _classCallCheck(this, Child);
    return _super.call(this);
  }
  return Child;
})(Person);
```

为便于浏览删除并修改了辅助函数相关的代码，但也可看出 `ES6 Class` 本质也是**组合寄生式继承**的实现
