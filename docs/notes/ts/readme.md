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

:::tips unknown VS any
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

// 索引签名
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

* 类型别名即使用关键词 `type` 指定基础类型、对象类型、联合类型等任意类型的命名，类似于 JavaScript 中的 `let`

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

:::tip type VS interface
 TODO ...
:::

### 类型推断与类型注解

* **类型推断**：显式指定变量的类型
* **类型注解**：由 TypeScript 自动推断出变量类型

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
```

### 枚举

枚举表示一组常量集合，通过 `enum` 关键词定义

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
