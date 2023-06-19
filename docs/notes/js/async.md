# 异步编程

## 单线程模式

JavaScript 引擎是单线程同步进行的，即每次仅能处理一个事件。当处理多个事件时，则需要排队等待执行。因此当一个事件在执行时，将阻塞后续的事件执行。
这在实际的浏览器交互中将是极差的用户体验，比如远古时代当用户提交一个表单时，浏览器将等待表单提交动作完成才能进行下一步操作，期间对于用户而言浏览器一直是卡死的一个状态。
同时单线程机制也不适应如今多核 CPU 的环境，无法充分利用 CPU 资源，效率低效，程序运行时间长。

为了解决此类问题，JavaScript 引入了**异步**（_Asynchronous_）的执行模式，如 ajax 操作。了解异步编程的方式，可以帮助我们编写更加合理出色的 JavaScript 程序。

## 回调函数

回调函数是异步操作最基本的方法，也是应用及其广泛的存在。在此借用 [Node.fs](http://nodejs.cn/api/fs.html) 作为例子：

```js
const fs = require('fs')
const { resolve } = require('path')
const dirPath = resolve(__dirname, './directory')

function errHandler(err) {
  /* handle error */
}

fs.mkdir(dirPath, (err, data) => {
  if (err) {
    errHandler(err)
    // return or not
  }
  fs.writeFile(`${dirPath}/demo.txt`, 'Hello World!', 'utf8', (err, data) => {
    if (err) {
      errHandler(err)
      // return or not
    }
    fs.readFile(`${dirPath}/demo.txt`, 'utf8', (err, data) => {
      if (err) {
        errHandler(err)
        // return or not
      }
      console.log(data)
    })
  })
})

// Hello World!
```

可以看出回调函数的缺点也很明显：

- 只能指定一个回调任务，当业务复杂时，不得不写出多个嵌套的回调函数而陷入**回调地狱**（_Callback Hell_）
- 每个回调事件中的错误处理都需要单独判断处理，事件流程控制也显得复杂
- 嵌套的回调函数不仅代码可读性差，其代码结构也高度耦合。即使我们可以将各个部分封装抽离，对于或者流程追踪也显得异常棘手。

## Promise

**为解决回调地狱**，社区提出并实现了 [Promise](https://es6.ruanyifeng.com/#docs/promise) 方案，并在 ES6 中规范化提供原生 `Promise` 对象。

```js
const mkdir = function(path) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, (err, data) => (err ? reject(err) : resolve(data)));
  });
};

const writeFile = function(path, msg, type = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, msg, type, (err, data) =>
      err ? reject(err) : resolve(data)
    );
  });
};

const readFile = function(path, type = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.readFile(path, type, (err, data) => (err ? reject(err) : resolve(data)));
  });
};

mkdir(dirPath)
  .then(() => writeFile(`${dirPath}/demo.txt`, 'Hello World!'))
  .catch(writeErr => errHandler(writeErr));
.then(() => readFile(`${dirPath}/demo.txt`))
  .catch(readErr => errHandler(readErr));
.then((data) => console.log(data), err => errHandler(err));

// Hello World!
```

`Promise.then` 使用**链式调用**技巧解决了回调地狱，并且对于错误处理，有对应的状态/方法处理，使得异步编程更加清晰。

但是大量的 `Promise.then/catch` 使代码显得冗余，且当 `Promise` 处于 `pending` 状态时，我们无法判断异步事件的执行阶段，更无法中断其执行，不利用控制流程。

## Generator + co

在 ES6 中使用 [Generator](https://es6.ruanyifeng.com/#docs/generator) 实现了协程：一种类似于线程，但交替执行的程序运行方式。

```js
function* gen() {
  yield mkdir(dirPath)
  yield writeFile(`${dirPath}/demo.txt`, 'Hello World!')
  yield readFile(`${dirPath}/demo.txt`)
}

const scheduler = gen()
scheduler.next().value.catch(err => errHandler(err))
scheduler.next().value.then(() => {
  const result = scheduler.next()
  result.value.then(res => console.log(res))
})

// Hello World!
```

在使用 `Generator` 封装文件操作后，其内部就像是在执行同步操作，并且 `Generator` 总是返回一个 `Iterator` 对象，使得我们可以控制流程的执行。内部异步操作仍是 `Promise` 接口，亦不影响我们进行错误处理。

不过手动单步执行以及嵌套取值的方式并非所愿，我们需要借助 [co](https://github.com/tj/co) 库为 `Generator` 函数做自动执行的封装。
`co` 模块的原理很简单，利用递归 + 回调函数（体现为[Thunk 函数](https://es6.ruanyifeng.com/#docs/generator-async#Thunk-%E5%87%BD%E6%95%B0)）或 `Promise` 封装异步操作，在异步回调中继续执行下一步异步操作，直到完成 `Generator` 函数的执行。

```js
// Thunk 函数
function thunkLauncher(gen) {
  const g = gen()

  function next(data) {
    const res = g.next(data)
    if (res.done) {
      return res.value
    }
    res.value(next)
  }
  next()
}

// Promise
function promiseLauncher(gen) {
  const g = gen()

  function next(data) {
    const res = g.next(data)
    if (!res.done) {
      return res.value
    }
    res.value.then(data => next(data))
  }
  next()
}
```

基于 `Promise` 的支持更广泛且实用性广，也是 `co` 模块后续重构选择的实现方式。

## async / await

> It is a stepping stone towards the async/await proposal —————— 引用于 tj/co

由 `Generator + co` 的异步操作为基础，ES6 小版本（ES2017）引入了新标准 [async](https://es6.ruanyifeng.com/#docs/async) 函数。

在异步处理上， `async` 函数就是 `Generator` 函数的语法糖。
`async` 函数返回一个 `Promise` 对象，配合 `await` 命令（ `Promise.then` 的语法糖）执行异步操作：

```js
async function fileScheduler() {
  try {
    await mkdir(dirPath)
    await writeFile(`${dirPath}/demo.txt`, 'Hello World!')
    const result = await readFile(`${dirPath}/demo.txt`)
    console.log(result)
  } catch (err) {
    errHandler(err)
  }
}

;(async () => await fileScheduler())()

// Hello World;
```

`async/await` 的写法，就相当于只写了 `Generator` 函数： `* => async，yield => await `

且包含了 co 自动执行器的机制，使得异步编程更加方便，代码层面就如同同步操作一般。

除此之外， `async/await` 方式更加语义化，除了例子中统一处理错误的方式，我们还可以针对某个一步操作进行错误处理：

```js
;async () => await mkdir(dirPath).catch(err => errHandler(err))
```
