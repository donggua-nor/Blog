# 介绍

 [type-challenges](https://github.com/type-challenges/type-challenges) 的前置知识回顾笔记，源于 [官方文档](https://www.typescriptlang.org/docs/handbook/intro.html) 与 [@wangtunan](https://github.com/wangtunan) 的慷慨指导

## 基础

### 原始类型

* `string`
* `number`
* `boolean`
* `symbol`
* `bigint`
* `null`
* `undefined`

::: details strictNullChecks
`strictNullChecks` 开启严格空值检查模式

```json
// tsconfig.json
{
  "strictNullChecks": true
}
```

该模式下， `null` 、 `undefined` 只允许被分配给自己或 `any` 类型的变量

```ts
const a: null = null
const b: undefined = undefined
const c: any = null

const err: number = null // Type 'null' is not assignable to type 'number'
```

:::

### 任意值

`any` 是一个特殊的类型，当一个值是 `any` 类型的时候, TypeScript 将不会对其进行类型检查

```ts
// 如同写 js，你可以任意操作你的变量，TypeScript 并不会抛出相关的提示
let free: any = 1
free = { name: 'donggua' }
free.log()
free = 'any'
```

::: details noImplicitAny
`noImplicitAny` 严格检查类型，不允许任何隐式 `any` 类型

```json
// tsconfig.json
{
  "noImplicitAny": true
}
```

```ts
function fn(s) {
  // Parameter 's' implicitly has an 'any' type
  console.log(s.subtr(3))
}
```

:::

:::warning
无论是开发者指定或是由 TypeScript 隐式推断出的 `any` 类型，都会导致 TypeScript 失去准确的类型推断能力。可能会导致遗漏一些运行时错误，违背使用 TypeScript 的初衷。
:::

### Unknown

`unknown` 用于描述一个我们还不知道其类型的变量

```ts
let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;
```

:::tip unknown VS any
相比于 `any` 不会对变量进行任何检查，对于 `unknown` 类型的变量在执行大多数操作时必须进行相应的检查，因此 `unknown` 类型相对更加严格
:::

### 字面量

除了常见的类型，还可以将类型声明为具体的数字或者字符串，常用于 [联合类型](#联合类型与交叉类型)

```ts
const demo: 'demo' = 'demo'

// 更常用的联合类型
type Alignment = "left" | "right" | "center"
```

### 对象

定义对象类型，可以罗列属性和对应的类型

```ts
const obj: { name: string, job: string } = { 
  name: 'donggua',
  job: 'fe'
}
```

在 JavaScript 中访问对象还可以使用方括号 `[]` 作为属性访问器，TypeScript也提供了对应的 **索引访问类型**。

即通过 `[]` 进行索引签名访问，并以此创建 **映射类型**：

```ts
const obj: { [key: string]: string } = { 
  name: 'donggua',
  job: 'fe'
}
```

### 函数

TypeScript 允许指定函数的参数类型和返回类型

```ts
function sum(a: number, b: number): number {
  return a + b
}
```

#### 空值

对于没有返回值的函数，用 `void` 进行声明注解

```ts
function log(): void {
  console.log('TypeScript is Cool!')
}
```

#### 匿名函数

不同于函数声明，TypeScript 会根据 **上下文推断** 为匿名函数指定正确的类型

```ts
const names = ["Alice", "Bob", "Eve"]; // 此处不做类型注解
 
names.forEach(function (s) {
  console.log(s.toUppercase());
// Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
 
// 箭头函数同样支持
names.forEach((s) => {
  console.log(s.toUppercase());
// Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
```

#### Never

`never` 类型表示的是那些永不存在的值的类型，更多的用于表示函数无法达到终点

```ts
function errorHandler(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

:::tip Important
如果一个联合类型中存在 `never` ，那么实际的联合类型并不会包含 `never`

```ts
// 定义
type test = 'name' | 'age' | never
// 实际
type test = 'name' | 'age'
```

:::

### 数组与元组

* 数组类型声明有 `类型[]` 以及 [泛型](#泛型) 两种形式

```ts
const queues: number[] = [1, 2, 3]
const stack: Array<number> = [1, 2, 3]
```

* 元组相当于固定长度的数组，并且已知数组每项对应的的类型

 对元祖类型的数据进行 **越界访问** 或 **分配错误的类型值** 时，TypeScript 将报错提示

```ts
type Tuple = [string, number]
const tuple: Tuple = ['donggua', 123]
tuple[0] = 666 // Type 'number' is not assignable to type 'string'
console.log(tuple[2]) // Tuple type 'Tuple' of length '2' has no element at index '2'
```

### 类型别名与接口

* 类型别名即使用关键字 `type` 指定基础类型、对象类型、联合类型等任意类型的命名，类似于 JavaScript 中的 `let`

```ts
type ID = number;
type Person = {
  name: string;
  age: number;
}
```

* 接口是指定对象类型命名的另一种形式

```ts
interface Person {
  name: string;
  age: number;
}
```

:::details type VS interface
 - 二者都可以用来声明对象或函数签名，仅语法不同

```ts
  // type
  type Person = {
    name: string;
    sex: number;
  }
  type Params = (a: number, b: number) => void

  // interface
  interface Person {
    name: string;
    sex: number;
  }
  interface Params {
    (a: number, b: number) => void
  }
  ```

* 二者可以相互拓展，`type` 借助 `&`，`interface` 借助 `extends`

```ts
// type extends type
type Parameter = { a: number };
type Result = Parameter & { b: number };

// interface extends interface
interface Parameter = { a: number };
interface Result extends Parameter { 
  b: number;
};
// type extends interface
interface Parameter = { a: number };
type Result = Parameter & { b: number };

// interface extends type
type Parameter = { a: number };
interface Result extends Parameter { 
  b: number;
};
// 接口只能扩展对象类型或对象类型与静态已知成员的交集
type Parameter = { a: number } | { b: number };
// An interface can only extend an object type or intersection of
// object types with statically known members.
interface Result extends Parameter {
  c: number;
}
```

* `type` 可用于声明基础类型、联合类型、元组，而 `interface` 不行

```ts
type str = string
type Union = string | number
type tuple = [string, number]
```

* 类可以实现接口或类型别名，但不可实现联合类型的类型别名

```ts
  type UnionAlias = { a: number } | { b: number }
  class Demo implements UnionAlias {}
  // A class can only implement an object type or intersection of object types
  // with statically known members
  ```

* `interface` 支持 [声明合并](#声明合并)
:::

:::tip
类似 `let` 、 `const` 的选择，一般情况下建议使用 `interface` ，在不支持的情况下再使用 `type` 类型别名
:::

### 类型推断与类型注解

* **类型注解**：显式指定变量的类型
* **类型推断**：由 TypeScript 根据上下文内容自动推断出变量类型

```ts
let nickname: string = 'donggua'
let job = 'FE' // TypeScript 自动推断为 job: string
```

:::tip

* 在为变量赋值明确的值时，建议尽量使用 **类型注解** 的方式
* 对于函数返回值，始终显示指明返回类型是个更好的习惯
:::

### 联合类型与交叉类型

* 联合类型是由两个或者更多类型组成的类型，并用 `|` 连接，表示值可能是这些类型中的任意一个

```ts
function print(value: number | string): void {
  console.log(value)
}
```

* 交叉类型是由多个类型的成员合并，用 `&` 连接，表示取所有成员的类型交集

```ts
type Bird = {
  fly: () => void;
}
type Fish = {
  swim: () => void;
}

type Animal = Bird & Fish
// Animal: {
//   fly: () => void;
//   swim: () => void;
// }
```

### 枚举

枚举表示一组常量集合，通过 `enum` 关键字定义

```ts
enum FORM_ITEMS {
  INPUT: 'input',
  SELECT: 'select'
}
```

#### 数字枚举

当定义数字枚举类型时, TypeScript 默认对成员进行自动递增，若初始项没有赋值，则默认由 `0` 开始

```ts
// 默认由 0 开始递增
enum Queues {
  FIRST,
  SECOND
}
console.log(Queues.FIRST) // 0
console.log(Queues.SECOND) // 1

// 按序递增
enum Queues {
  FIRST = 1,
  SECOND,
  THIRD = 5,
  FOURTH,
  FIFTH
}
console.log(Queues.FIRST) // 1
console.log(Queues.SECOND) // 2
console.log(Queues.THIRD) // 5
console.log(Queues.FOURTH) // 6
console.log(Queues.FIFTH) // 7
```

#### 反向映射

数字枚举成员还可以通过枚举值获取对应的枚举名称，称为 **反向映射**

```ts
enum Queues {
  FIRST,
  SECOND
}
console.log(Queues[0]) // FIRST
console.log(Queues[1]) // SECOND
```

## 进阶

### 类

> 随着 `ECMAScript` 的发展，TypeScript 中针对 [ES6 Class](https://es6.ruanyifeng.com/#docs/class) 的特性已经逐步落地并于主流浏览器/平台上得到支持。

#### 继承

* 通过 `extends` 关键字派生子类实现继承

* 通过 `super` 关键字执行基类构造函数、访问基类的属性或方法

```ts
const enum SEX {
  UNKNOWN,
  MAN,
  WOMAN
}

class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  introduce() {
    console.log(`Hello, my name is ${this.name}.`)
  }
}

class Man extends Person {
  gender = SEX.MAN
  constructor(name: string) {
    super(name)
  }
}

const man = new Man('donggua');
console.log(man); // Man { name: 'donggua', gender: 1 }
man.introduce(); // Hello, my name is donggua.
```

#### 存取器

在类中可以通过 `getters` 、 `setters` 拦截对象成员的存取行为

```ts
class Person {
  _name: string
  constructor(name: string) {
    this._name = name
  }
  get name() {
    return this._name
  }
  set name(newName: string) {
    this._name = newName
  }
}

const man = new Person('donggua')
man.name = 'donggua_nor'
man.name // donggua_nor
```

:::tip
仅设置了 `get` 而没有 `set` 的存取器将被推断为 `readonly` ，以告知用户该属性不应该被改变

```ts
class Person {
  _name: string
  constructor(name: string) {
    this._name = name
  }
  get name() {
    return this._name
  }
}

const man = new Person('donggua')
man.name = 'donggua_nor'
// Cannot assign to 'name' because it is a read-only property
```

:::

#### 属性修饰符

TypeScript 提供了几种语义化的修饰符，用以描述类中各种属性：
* `readonly` 只读属性

```ts
class Person {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

const man = new Person('donggua')
man.name = 'donggua_nor'
// Cannot assign to 'name' because it is a read-only property
```

* `public` 表示公有的访问修饰符，可以自由访问类中的成员
* `private` 表示私有的访问修饰符，只能在类内部使用
* `protected` 表示受保护的访问修饰符，只能在基类及其派生类内部使用

```ts
class Person {
  public name: string
  private age: number
  protected address: string
  constructor(name: string, age: number, address: string) {
    this.name = name
    this.age = age
    this.address = address
  }
}

class Man extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address)
  }
  getAge() {
    console.log(this.age);
    // Property 'age' is private and only accessible within class 'Person'
  }
  getAddress() {
    return this.address
  }
}

const man = new Man('donggua', 26, 'guangzhou')
console.log(man.name) // donggua
man.age
// Property 'age' is private and only accessible within class 'Person'
man.address
// Property 'address' is protected and only accessible within class 'Person'
// and its subclasses
```

:::tip
 - 不同于 `C#` 必须明确使用 `public` 指定成员是公开的，TypeScript 默认成员为 `public` 属性
 - `ECMAScript` [新提案](https://github.com/tc39/proposal-private-methods) 中对于私有属性/方法是使用 `#` 修饰符

```ts
class Person {
  #name: string
  constructor(name: string) {
    this.name = name
  }
}
const man = new Person('donggua')
man.name
// Property '#name' is not accessible outside class 'Person'
// because it has a private identifier
```

:::

* `static` 静态属性与静态方法

不同于实例属性/方法，静态属性/方法不会被实例所继承，而必须通过类来使用

```ts
class SingleInstance {
  static instance: SingleInstance;
  private constructor(public name: string) {}
  static getInstance(name: string) {
    if (!this.instance) {
      this.instance = new SingleInstance(name);
    }
    return this.instance;
  }
}

const instance1 = SingleInstance.getInstance('instance1');
const instance2 = SingleInstance.getInstance('instance2');
console.log(instance1 === instance2); // true
```

#### 抽象类

除了上述关键字，TypeScript 还提供了 `abstract` 关键字用于定义抽象类以及抽象类内部的抽象方法。

```ts
abstract class Person {
  constructor(public name: string) {}
  abstract introduce(): void
}
```

其中，抽象类应作为基类使用，不可被实例化。抽象类中的抽象方法不包含具体实现并且必须由派生类实现：

```ts
abstract class Person {
  constructor(public name: string) {}
  abstract introduce(): void
}

class Man extends Person {
  constructor(name: string) {
    super(name)
  }
  introduce() {
    console.log(`Hello, my name is ${this.name}.`)
  }
}

const err = new Person() // Cannot create an instance of an abstract class
const man = new Man('donggua')
```

#### 类实现接口

类同 `Java` 、 `C#` ，TypeScript 支持类继承一个或多个接口以约束类的行为，即类必须拥有接口中对应的属性和方法，通过 `implemenets` 关键字实现

```ts
interface Person {
  name: string
  introduce: () => void
}

class Man implements Person {
  constructor(public name: string) {}
  introduce() {
    console.log(`Hello, my name is ${this.name}.`)
  }
}
```

:::warning
类实现接口时，仅支持实例部分属性/方法，而不允许接口定义其静态属性/方法

```ts
interface Person {
  new (name: string): void;
}

class Man implements Person {
  constructor(public name: string) {}
}
// Class 'Man' incorrectly implements interface 'Person'.
// Type 'Man' provides no match for the signature 'new (name: string): void'
```

:::

:::tip
类也可以实现类型别名，但接口更为贴合类

```ts
type Person = {
  name: string
  introduce: () => void
}

class Man implements Person {
  constructor(public name: string) {}
  introduce() {
    console.log(`Hello, my name is ${this.name}.`)
  }
}
```

:::

#### 接口继承类

在 TypeScript 中支持接口继承类，接口继承类后，将拥有类中所有的属性与方法：

```ts
class Person {
  constructor(public name: string, public age: number) {}
}
interface Man extends Person {
  address: string;
}

const donggua: Man = {
  name: 'donggua',
  age: 26,
  address: 'guangzhou'
};
```

### 泛型

泛型就是将原本具体的类型作为参数声明，在使用或调用时再指定为具体的类型，即 **参数化类型**。通过泛型，可以协助我们定义可复用的方法、接口和类。

#### 泛型变量

假设我们需要定义一个函数，该函数的作用是返回任何传入的值，那么我们自然会想到使用 `any`

```ts
function identity(arg: any): any {
  return arg
}
```

虽然结果是符合预期的，但使用 `any` 将失去类型检查，违背使用 TypeScript 的初衷。即使场景下明确不需要类型检查，但项目中开启了 `noImplicitAny` 配置，导致我们无法使用 `any` 。

此时泛型就派上了用场：我们可以使用 `<>` 定义一个参数变量 `Type` 用于捕获实际传入的类型，通过该参数变量，我们就可以指定实参和返回值为对应的类型

```ts
function identity<T>(arg: T): T {
  return arg
}

console.log(identity<string>('donggua')) // 'donggua'
```

上述代码意为， `identity` 函数接收 **类型参数** `T` 和参数 `arg` ，参数 `arg` 和函数返回值类型是 `T` 。当传入 `string` 类型的参数时， `T` 的具体类型就是 `string` 。

#### 各类泛型定义

* 箭头函数和对象字面量

以上述例子为例，我们可以将其改造为箭头函数形式

```ts
const identity: <T>(arg: T) => T = arg => arg
```

为方便理解，可以把上述代码拆解为：

```ts
type GenericFn = <T>(arg: T) => T
let identity: GenericFn
identity = arg => arg // identity = (arg) => { return arg }
```

对于箭头函数的泛型定义，我们还可以使用对象字面量的形式书写

```ts
// type GenericFn = <T>(arg: T) => T
type GenericFn = { <T>(arg: T): T }
```

* 泛型接口

结合上述类型别名和对象字面量的泛型定义，我们不难想到泛型接口的定义形式：

```ts
interface GenericFn {
  <T>(arg: T): T
}
```

为了清晰的表明具体的类型参数，一般将类型参数提取出来，以表明泛型参数为整个接口的参数

```ts
interface GenericFn<T> {
  (arg: T): T
}
```

* 泛型类

泛型类和泛型接口实现相似，但始终应注意的是，类的静态属性/方法亦不能使用泛型类型

```ts
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```

* 类的构造函数

当需要对类的构造函数进行类型声明时，应采用 `new` 关键字结合 `()`

```ts
interface Ctor<T> {
  new (): T;
}
function createInstance<T>(ctor: Ctor<T>): T {
  return new ctor();
}

class Person {
  name: string = 'donggua';
}

const man = createInstance(Person);
console.log(man); // Person { name: 'donggua' }
```

### 声明合并

**声明合并** 是指 TypeScript 编译器会针对函数、接口或类等的同名声明进行合并，并拥有所有合并的声明的特性

在 `Java` 之类的语言中，最熟悉的声明合并就是 **函数重载**

```ts
// 最为常见的接口合并
interface Person {
  name: string;
  age: number;
}
interface Person {
  gender: number;
}
const person: Person = {
  name: 'donggua',
  age: 26,
  gender: 1
}

// 函数重载
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  return `${a}${b}`
}
```
:::tip TypeScript 中重载的注意事项
- 声明方式为连续多个声明后紧跟具体实现函数，否则将报错

```ts
function add(a: number, b: number): number
function add(a: number | string, b: number | string): number | string {
  return `${a}${b}`;
}
function add(a: string, b: string): string;
// Function implementation is missing or not immediately following the declaration.
// 函数声明缺少或没有紧随一个实现函数
```
- 最终实现必须兼容已有的构造声明

```ts
function add(a: number, b: number): number
// This overload signature is not compatible with its implementation signature.
function add(a: string, b: string): string {
  return a + b
}
```
:::
### typeof

`typeof` 操作符用于在获取变量或属性的类型，多用于获取复杂数据类型，或配合其他操作符使用

```ts
// 对原始类型使用，返回对应类型，但并没有什么必要
type name: string = 'donggua'
type Base = typeof name
// Base: string

// 对对象使用
const person = { name: "donggua", age: "26" }
type Obj = typeof person;
// Obj: { name: string; age: number }

// 对枚举类型使用形似于对象
enum TYPES {
  INPUT,
  SELECT,
}
type Enum = typeof TYPES
// Enum: { INPUT: number; INPUT: number }

// 对函数使用
function sum(a: number, b: number): number {
  return a + b
}
type Func = typeof sum
// Func: (a: number, b: number) => number
```

### keyof

`keyof` 操作用于获取对象所有属性键的字面量组合而成的联合类型，类似于 JavaScript 中的 `Object.keys()`

```ts
type Person = {
  name: string;
  age: number;
}
type Result = keyof Person;
// Result: 'name' | 'age'
```

* 需要注意的是，对于 `number` 类型的索引签名，将视为 `string | number` 联合类型，因为 JavaScript 中对象属性键会被强制转换为字符串

```ts
type Mapish = {
  [key: number]: string;
}
type Result = keyof Arrayish;
// Result: 'string' | 'number'

const obj: Mapish = {}
obj[1] = 'donggua' // 等同于 obj['1'] = 'donggua'
```

### in

`in` 操作符右侧跟随一个联合类型，表示逐一遍历该联合类型的所有字面量，类似于 JavaScript 中的 `for...in` ，通常结合 `keyof` 用以创建索引签名的映射类型

```ts
type Readonly<T> = {
  readonly [K in keyof T]: T[K]
}
type Person = {
  name: string;
  age: number;
}

type Result = Readonly<Person>
// Result：{
//   readonly name: string;
//   readonly age: number;
// }
```

* 定义一个类型别名 `Readonly` 接收一个泛型参数 `T`
* `keyof T` 获取 `T` 的联合类型，在此结果为 `'name' | 'age'`
* 使用 `in` 遍历 `'name' | 'age'` 并将每次的取值赋值给变量 `K`
* `readonly` 关键字将对象中的属性转换为只读属性，对应值为 `T[K]`

### infer

`infer` 关键字声明占位变量，起到延迟推导的作用。

```ts
type ReturnType<T> = T extends (...args: any) => infer R ? R : any

const add = (a: number, b: number): number => a + b

type Result = ReturnType<typeof add>
// Result: number
```
以 `ReturnType<T>` 为例，用于获取函数返回类型:

- 声明泛型变量 `T` 表示一个函数类型
- 声明占位变量 `R`，此时并不确定函数具体返回类型
- 若 `T` 类型为函数类型，则根据函数类型上下文推导出 `R` 具体类型并返回，否则则返回 `any` 类型
- 在上述例子中，`add` 即为返回 `number` 类型的函数，由此推断出 `R` 为 `number`

## 拓展

### 装饰器
### 命名空间

### tsconfig.json