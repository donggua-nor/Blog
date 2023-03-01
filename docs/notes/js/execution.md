---
sidebarDepth: 5
---

# 编译执行流程

## 基本编译流程

### 词法分析（Lexical Analysis）

将代码解析为词法单元 `token` 。 主要分为以下几种：

- 关键字：例如 `var`、`let`、`const` 等
- 标识符：没有被引号括起来的连续字符，可能是一个变量，也可能是 `if`、`else` 这些关键字，又或者是 `true`、`false` 这些内置常量
- 运算符： `+`、`-`、 `\`、`/` 等
- 数字：像十六进制，十进制，八进制以及科学表达式等语法
- 字符串：因为对计算机而言，字符串的内容会参与计算或显示
- 空格：连续的空格，换行，缩进等
- 注释：行注释或块注释都是一个不可拆分的最小语法单元
- 其他：大括号、小括号、分号、冒号等

```js
// source code
var name = 'donggua'[
  // compile into Tokens
  ({
    type: 'Keyword',
    value: 'var'
  },
  {
    type: 'Identifier',
    value: 'name'
  },
  {
    type: 'Punctuator',
    value: '='
  },
  {
    type: 'String',
    value: "'donggua'"
  },
  {
    type: 'Punctuator',
    value: ';'
  })
]
```

### 语法分析（Synatax Analysis）

将词法分析获得的 token，结合语句表达式，组合建立**抽象语法树**

:::tip
**抽象语法树**（ _Abstract Synatax Tree_, **AST** ）
常用于：

- `ESLint` 等代码风格与语法检查
- `babel` 等工具进行代码转换
- `IDE` 的代码格式化、高亮与自动补全等
- `UgligyJS` 代码压缩混淆等
  :::

```js
// AST
{
  "type": "Program",
  "body": [{
    "type": "VariableDeclaration",
    "declarations": [{
      "type": "VariableDeclarator",
      "id": {
        "type": "Identifier",
        "name": "name"
      },
      "init": {
        "type": "Literal",
        "value": "donggua",
        "raw": "'donggua'"
      }
    }],
    "kind": "var"
  }],
  "sourceType": "script"
}
```

**AST** 中代码结构清晰，上例中，变量声明语句 _VariableDeclaration_，变量声明器 _VariableDeclarator_ 使用的是 `var` ，并在初始化 `init` 时提供字面量 _Literal_ 值为 `donggua`

### 代码生成

获取 AST 并将其转化成平台机器可执行的低级代码

## 执行上下文与作用域

> _Execution Contect & Stack_

除此之外，在 JavaScript 解析执行过程中，JS 引擎并不是真正的逐行解析，而是根据代码划分成对应的执行环境并依此执行
:::tip
JS 引擎有 _Chrome_ 的 [ `V8` ](https://v8.dev/)、 _Firefox_ 的 `SpiderMonkey` 等各浏览器厂商基于 `ECMAScript` 标准实现。但部分实现上亦存在细节上的差异，如 `EventLoop` 执行顺序可能并不一致。笔者实践上以 `Chrome` 为主。
:::

### 执行上下文

JS 代码的执行环境称为 **执行上下文** (_Execution Contect_)，一般分为以下几种：

- 全局代码
- 函数代码
- Eval 代码

:::warning
[ `eval` ](https://developer.mozilla.org/zh-CN/docs/orphaned/Web/JavaScript/Reference/Global_Objects/eval#don.27t_use_eval.21) 通过调用 JS 解释器执行代码，拥有调用者权限，容易导致网站遭受恶意攻击，应避免使用
:::

```js
// ctx.js
// Global context
function fn() {
  // local context of funtion fn
  function foo() {
    // local context of funtion foo
  }

  function bar() {
    // local context of funtion bar
  }
  foo()
}
fn()
```

### 执行上下文堆栈

在实际开发中，函数的数量是任意多的。而 JavaScript 解释器是单线程同步进行的，每次仅能执行处理一个上下文。
因此 JS 中通过 **堆栈** 抽象化 **执行上下文堆栈** 以处理代码块执行

通过堆栈对上述例子进行抽象如下：

```js
// abstract stack for ctx.js
// 程序执行时，初始化将推入全局执行上下文
const ECStack = [GlobalExecutionContext]

// fn() 函数 fn 执行，推入栈中
ECStack.push(fnExecutionContext)
// foo() 函数 foo 执行，推入栈中
ECStack.push(fooExecutionContext)
// 函数 bar 并没有执行，不会推入栈中

// foo() 执行完毕后自动推出堆栈
ECStack.pop()
// fn() 执行完毕后自动推出堆栈
ECStack.pop()
// ECStack 的 GLobalExecutionContext 将保留直到程序结束运行，比如浏览器关闭/当前标签页关闭
```

可以借助浏览器调试工具进行直观的 **debugger**

> `chrome == > Source === > Call Stack`

![execution_context_example](https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/execution_context_example.gif)

### 深入执行上下文

当进入执行上下文时，都会经历两个阶段：

#### 创建阶段

##### 初始化作用域链（_Scope Chain_）

在 JavaScript 中，决定变量、函数和对象等属性的可访问性的区域称为 **作用域**(_Scope_)，作用域起到了数据隔离的作用，非嵌套的作用域是独立不冲突的

:::tip
JavaScript 使用**词法作用域**(_lexical scoping_)，又称**静态作用域**(_static scoping_) 在函数定义时即决定了作用域。

与之相对的是**动态作用域**(_dynamic scoping_), 在函数运行时才决定作用域

简单来说，单从代码层面上我们就能确定 JavaScript 中函数的作用域
:::

在进入执行上下文时，会创建变量对象的一个**作用域链**(_Scope Chain_)。这个作用域链决定了各级上下文中的代码在访问变量和函数时的顺序与访问权限，代码正在执行的上下文的变量对象始终位于作用域链的最前端。

查找变量时，从作用域链的最前端(即当前上下文)查找, 然后逐级向后查找父级上下文，直到最顶层的全局上下文。若最终找不到，通常抛出错误 `Reference Error`

```js
// Global Scope
var val = 1

function foo() {
  // Local Scope #foo
  console.log(val)

  function bar() {
    // Local Scope #bar
    val = 2
    console.log(val)
  }
  bar()
}
foo()
```

![scope_chain_example](https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/scope_chain_example.jpg)

##### 创建变量对象

**变量对象**（_Variable Object_，**AO**）是与执行上下文相关的数据对象，其保存了上下文中所定义的变量和函数。并且只有进入执行上下文时，变量对象才被激活，其各种属性才能被访问。

> 变量对象是 ECMAScript 规范术语, 只有解析器在处理数据时才会使用它。

:::tip

1. 在 web 浏览器的全局上下文中， `window` 对象被认为是**全局对象**（_Global Object_，**GO**），因此所有全局变量和函数都是作为 `window` 对象的属性与方法。即全局上下文中，全局对象预被定义为活动对象，且通过 `window` 属性指向其自身：

```js
this === window // true
window.window === window // true
```

2. 在函数上下文中，初始化时将创建只包括 [arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments) 对象的**活动对象**（_Activation Object_，**AO**）并将其作为变量对象

:::

##### 扫描分析代码

1. 先处理函数声明，使用函数名在活动对象中创建属性，并引用指向该函数。若存在相同的函数名，完全替换之。
2. 再处理变量声明，使用变量名在活动对象中创建属性，并初始化值为 `undefined`。若存在相同的变量名，则跳过。

```js
// example
function foo(a) {
  var b = 1

  function fn() {}
  var anonymous = function () {} // 声明变量且指向匿名函数
  b = 2
}
context(1)
```

```js
// abstract example
fooExecutionContext = {
  ScopeChain: {
    ...
  },
  ActivationObject: {
    arguments: {
      1: 3,
      length: 1
    },
    a: 1,
    b: undefined,
    fn: reference to fn(), // 对函数fn的引用
    anonymous: undefined
  },
  this: {
    ...
  }
}
```

##### 确定 this 的值

- 在全局上下文中，this 指向全局对象，具体值由其宿主环境决定

  在 web 浏览器中，默认为非严格模式，其指向 `window`

  在 `ECMAScript` 规范中，默认开启严格模式， **this** 的值为 `undefined`

```js
function fn() {
  'use strict'
  console.log(this)
}
fn() // undefined
```

- 在函数中， this 始终指向调用函数的对象（ 运行时绑定）

```js
function fn() {
  console.log(this)
}
const obj = {
  fn
}

fn() // window - 相当于 window.fn();
obj.fn() // obj
fn.call(obj) // obj
```

- ES6 箭头函数中，没有自身的 `this` 绑定，而是继承其所在上下文的 `this` 值

```js
function fn() {
  var a = 2
  setTimeout(() => {
    console.log(this.a)
  }, 0)
}
var a = 1
fn() // 1
```

#### 激活/执行阶段

- 在上下文中逐行执行代码为变量/函数并赋值

```js
fooExecutionContext = {
  ScopeChain: {
    ...
  },
  ActivationObject: {
    arguments: {
      1: 3,
      length: 1
    },
    a: 1,
    b: 2,
    fn: reference to fn(), // 对函数fn的引用
    anonymous: reference to FunctionExpression // 对函数表达式的引用
  },
  this: {
    ...
  }
}
```

### 应用拓展

#### 变量提升

通过了解执行上下文的完整流程，理解 `var` 及 `function` 声明操作的变量提升：

```js
console.log(typeof foo)

function foo() {}
var foo = 1

console.log(typeof foo)

// 打印结果：
// function
// number
```

编译流程如下：

1. 进入全局上下文
2. 初始化变量对象

- 创建阶段

```js
// line 3：
// 声明变量 foo 并指向函数 foo()
VO = {
  foo: reference to foo()
}

// line 4： `var foo = 1;`
// 变量声明，变量名已存在，跳过处理
VO = {
  foo: reference to foo()
}
```

- 执行阶段，边赋值边执行

```js
  // line 1：`console.log(typeof foo);`
  // 此时 foo 是函数指针
  log: function

  // line 4：`var foo = 1;`
  // 变量赋值，将 foo 赋值为 1
  VO = {
    foo: 1
  }

  // line 6
  log: number
```

:::tip
变量提升只有声明提升，且仅提升到当前执行上下文的最顶部
:::

#### let / const

在 ES6 之前，JS 中声明变量只有 `var` 和 `function` 两种形式，并且相对其他语言没有块级作用域，只有全局/函数作用域。这导致了一些不合理的现象：

- 在变量声明前使用变量不会报错

```js
console.log(a) // undefined
var a = 1
```

- 作用域内外变量数据冲突

```js
var a = 1

function fn() {
  if (false) {
    var a = 2 // 声明变量提升，而赋值操作不会被执行
  }
  // 变量提升仅提升到当前执行上下文
  // 此时 fn 执行上下文中活动对象存在未赋值的 a 变量
  // fn Context => AO = { a: undefined }
  console.log(a)
}
fn() // undefined
```

- 应属于块级作用域的变量泄漏为全局变量

```js
for (var i = 0; i < 3; i++) {
  console.log('i in for', i)
}
console.log(i) // 3

// 没有块级作用域，相当于
var i
for (i = 0; i < 3; i++) {
  console.log('i in for', i)
}
console.log(i) // 3
```

在 ES6 中新增了 `let` 与 `const` 用于声明变量，并有以下[标准](https://262.ecma-international.org/6.0/#sec-let-and-const-declarations):

_The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated_

> 在实例化变量时，包含变量的词法作用域将创建变量，但在具体声明前不允许访问使用

该标准指明两点内容：

- `let`、`const` 声明仍存在变量提升
- `let`、`const` 声明的变量，必须先声明再使用，否则将抛出错误 `ReferenceError`

其中，在 `let` 、 `const` 所在作用域直到其声明语句前的区域，在语法上称为**暂时性死区**（_Temporal Dead Zone_, 简称**TDZ**）
结合例子理解下上述内容：

```js
console.log(a)
let a // Uncaught ReferenceError: a is not defined
```

1.  在声明前使用变量，报错

```js
let a = 1

function fn() {
  console.log(a) // ReferenceError: Cannot access 'a' before initialization
  let a = 2
}
fn()
```

2.  如果不存在变量提升，那么执行函数 `fn` 应该时打印全局作用域中 `a = 1` 而不是报错

```js
for (let i = 0; i < 3; i++) {
  console.log('i in for', i)
}
console.log(i) // Uncaught ReferenceError: i is not defined
```

3. `let` 声明的变量仅所在块级作用域有效，不会提升到全局上
   :::tip
   `const` 声明的变量并非值不可改变，而是变量指向的那个内存地址所保存的数据不得改动
   :::

```js
const a = 1
a = 2 // Uncaught TypeError: Assignment to constant variable
const obj = {
  a: 1
}
obj.a = 2
obj // { a: 2 }
```

#### 闭包

了解了 作用域 与 作用域链，我们知道变量存在于上下文的作用域中，当函数执行完毕离开执行上下文时，该作用域将不再存在，理论上也不能再访问其中的变量。如：

```js
function fn() {
  var a = 1
  console.log(a) // 1
}
fn()
console.log(a) // VM38:5 Uncaught ReferenceError: a is not defined
```

而实际上，我们会发现有些时候并不一样：

```js
function fn() {
  var a = 1

  function log() {
    console.log(a)
  }
  return log
}

var demo = fn()
demo() // 1
```

在这个例子中，我们就成功打印出了函数 `fn` 中变量 `a` 的值。

原因是我们通过在函数 `fn` 内部嵌套使用 `log` 函数，**保留了对其父级作用域的引用**，即闭包操作。

---

**闭包的应用**

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, 0)
}
// (5)6
```

:::tip
在浏览器 **EventLoops** 机制中， `setTimeout(fn, 0)` 意为：

当主线程执行栈内为空时，尽快执行回调函数 `fn` ，而非简单的 0 毫秒延迟后执行

:::
上例中，第一轮主线程执行完毕后，全局上下文下 `i = 6` ，此时再依次执行 `setTimeout` 的回调函数，所以打印结果都是 `6` 。

为解决这类问题，可通过创建闭包函数，以**立即执行函数（IIFE）** 为经典示例，将每次事件之行后变量 `i` 的值保留到定时器的回调函数中。

```js
// 闭包 - IIFE
for (var i = 1; i <= 5; i++) {
  ;(function (j) {
    setTimeout(function () {
      console.log(j)
    }, 0)
  })(i)
}

// 1 2 3 4 5
```

#### 箭头函数

ES6 对于函数扩展新增了箭头函数 `() =>` ，简化了函数表达式和回调函数的书写。
但需要留意以下几点：

- 没有自身的 `this` 绑定，而是继承其所在上下文的 `this` 值
- 没有自身的 `this` 绑定， 因此不能作为构造函数
- 不可使用 `arguments` 对象，需要用 [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) 参数代替
- 不可使用 `yield` 指令，因此不能作为 `Generator` 函数
- 返回对象时，**必须用扣号包裹**
- 箭头函数不存在原型（打印结果为：`undefined`）

```js
const arrowFn = (...rest) => {
  console.log(this) // window
  // console.log(agruments); throw ReferenceError: agrument is not defined
  console.log(rest) // [1, 2, 3]
}
arrowFn(1, 2, 3)
console.log(arrowFn.prototype) // undefined
new arrowFn() // TypeError: arrowFn is not a constructor
```
