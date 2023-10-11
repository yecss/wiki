Promise 发展历史：

- Promise 和 回调函数相比的优点：

- 可以实现链式调用

## Promise 的三个状态

- Pending

- Fulfilled

- Rejected

## Executor 接收两个参数

`resolve` 和 `reject`。这些函数由 JavaScript 引擎预先定义，因此我们不需要创建它们。我们只需要在准备好（译注：指的是 executor 准备好）时调用其中之一即可。

> resolve和reject 可以传递参数，作为后续.then和.catch 的数据源

1. `resolve`

1. `reject`

```JavaScript
let p = new Promise((resolve, reject) => {
    if (true) {
        resolve('成功的回调')
    } else {
        reject('失败的回调')
    }
})
```

## 回调函数

then()函数返回的是一个新Promise实例

因此可以使用链式调用then()函数，在上一轮then()函数内部return的值会作为下一轮then()函数接收的参数值。

```JavaScript
...
.then(
    (result) => {
        // 成功时的回调函数
        console.log(result)
    },
    (error) => {
        // 失败时的回调函数
        console.log(error)
    }
)
```

## 处理错误

promise 链在错误（error）处理中十分强大。当一个 promise 被 reject 时，控制权将移交至最近的 rejection 处理程序。这在实际开发中非常方便。

捕获所有 error 的最简单的方法是，将 `.catch` 附加到链的末尾：

```JavaScript
fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => alert(error.message));
```

## 执行过程

- Promise 函数创建后会立即调用, 然后等待执行resolve或reject



## Promise.all() 函数

同时执行多个 promise 方法

```JavaScript
const p = new Promise.all[p1,p2,p3]
```

## Promise.race() 函数

Promise.all()函数作用于多个Promise实例上，

返回一个新的Promise实例，

表示的是如果多个Promise实例中有任何一个实例的状态发生改变，

那么这个新实例的状态就随之改变，

而最先改变的那个Promise实例的返回值将作为新实例的回调函数的参数。

```JavaScript
const p = new Promise.race[p1,p2,p3]
```

## Promise.resolve()函数

用于将传入的变量转换为Promise对象，

它等价于在Promise函数体内调用resolve()函数。

Promise.resolve()函数执行后，Promise的状态会立即变为fulfilled，然后进入then()函数中做处理。

```JavaScript
const p = Promise.resolve('111')
p.then(
    (result) => {
        console.log(result)
    },
    (error) => {
        console.log(error)
    }
)
```

## Promise.reject()函数

Promise.reject()函数用于返回一个状态为rejected的Promise实例，

函数在执行后Promise的状态会立即变为rejected，

从而会立即进入catch()函数中做处理，

等价于在Promise函数体内调用reject()函数。

```JavaScript
let p = Promise.reject(new Error('whoops!'))
p.then(
    (result) => {
        console.log(result)
    },
    (error) => {
        console.log(error)
    }
)
```

## 最后, Promise 示例

### demo1

```JavaScript
const promise = new Promise((resolve,reject)=>{
    // promise一旦创建后就会执行
    console.log(1)
    resolve()
    console.log(2)
})
promise.then(()=>{
    // 然后等待resolve函数的返回值
    console.log(3)
})
console.log(4)

// 执行结果：1,2,4,3
```

### demo2

```JavaScript
const promise2 = new Promise((resolve, reject) => {
    resolve('success1')
    reject('error')
    resolve('success2')
})
promise2
    .then((res) => {
        console.log('this', res)
    })
    .catch((err) => {
        console.log(err)
    })

// 执行结果：this success1
// 解答：一个Promise 实例只能有一次状态的变更。
```

### demo3

```JavaScript
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('once')
        resolve('success')
    }, 1000)
})
const start = Date.now()
promise3.then((res) => {
    console.log(res, Date.now() - start)
})
promise3.then((res) => {
    console.log(res, Date.now() - start)
})

// 执行结果：once
        // success 1011
        // success 1011
// 解答：同一个Promise的实例只能有一次状态变换的过程，
// 在状态变换完成后，如果成功会触发所有的then()函数，如果失败会触发所有的catch()函数。
```

### demo4

```JavaScript
Promise.resolve()
    .then(() => {
        console.log(1)
        return new Error('whoops')
    })
    .then((res) => {
        console.log(2)
        console.log('@then', res)
    })
    .catch((err) => {
        console.log('@catch', err)
    })

// 输出：
//  1
//  2
//  @then Error: whoops

// 解答：
// 在then()函数中用return关键字返回了一个“Error”，依然会按照正常的流程走下去
// 进入第二个then()函数，并将Error实例作为参数传递，不会执行后续的catch()函数。

// 这个不同于使用throw抛出一个Error
// 如果是throw抛出一个Error则会被catch()函数捕获。
```

## then接受的参数类型

```JavaScript
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)
// 输出：1
// 解答：then 方法接受一个函数，当接收的参数不是一个函数时，
// 就会直接忽略这个参数，继而进行执行链式调用后续的函数
```

## 捕获错误的两种方法

```JavaScript
Promise.resolve().then(
    () => {
        throw new Error('error')
    },
    (err) => {
        console.log(err)
    }
).catch((err)=>{console.log("@catch",err)})

// 输出：@catch Error: error
// 解答：虽然这两种方法都能处理Promise状态变为rejected时的回调，
// 但是then()函数的第二个函数却不能捕获第一个函数中抛出的异常，
// 而catch()函数却能捕获到第一个函数中抛出的异常。
// 所以推荐使用 .then().catch() 的形式
```