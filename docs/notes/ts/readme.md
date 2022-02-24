# 介绍

 本篇仅是笔者实践 type-challenge 的知识回顾笔记，基本是对官方文档的精简拷贝

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

无论是开发者指定或是由 TypeScript 隐式推断出的 `any` 类型，都会导致 TypeScript 失去准确的类型推断能力，
可能会导致遗漏一些运行时错误，违背使用 TypeScript 的初衷。

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

### 数组与元组

* 数组类型声明有 `类型[]` 以及 [范型](#范型) 两种形式

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

## 进阶
