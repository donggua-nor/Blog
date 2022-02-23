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

### 数组 Array

```ts
const queues: number[] = [1, 2, 3]
const stack: Array<number> = [1, 2, 3]
```

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

### 空值

在 TypeScript 中，用 `void` 来表示一个没有返回值的函数

```ts
function log(): void {
  console.log('TypeScript is Cool!')
}
```

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

### 接口

## 进阶
