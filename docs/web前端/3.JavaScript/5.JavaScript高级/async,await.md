## 异步函数

JavaScript 是一个单线程语言。

异步函数的实现，往往采用的是回调函数的方式。

```JavaScript
setTimeout(() => {
    console.log("")
}, 3000);

// 函数里面就是一个回调函数，当三秒之后就会自动执行
```

## async

在 JS 中 我们使用async 来快速创建异步函数，让我们以同步方式去调用异步代码。

```JavaScript
async function fn1(num) {
    return num + 10
}
async function fn2(num) {
    return num + 10
}
async function fn3(num) {
    return num + 10
}
async function fn4(num) {
    return num + 10
}


fn1(10)
    .then(fn2)
    .then(fn3)
    .then(fn4)
    .then(console.log)
    .catch((e) => {
        console.log(e)
    })
```

注意：当我们使用了async时，需要使用try-catch来处理错误

## await

- await不是在哪里都能用，await 使用的位置

- - async 函数中
  - 模块中的最外层作用域中

```JavaScript
async function fn5() {
    try {
        // 调用 await,他会等待 Promise 执行出结果将结果返回。
        result = await fn1(10)
        result = await fn2(result)
        result = await fn3(result)
        result = await fn4(result)
        console.log(result)
    } catch (e) {
        console.log('出错了', e)
    }
}
fn5()
```

await 不是将异步函数改变为同步函数，只是改变了异步函数的调用方式。

## 错误使用

```JavaScript
// 这样会阻塞下面代码的执行，从而失去了异步函数的意义。
// result = await fn1()
```

## 使用示例

```JavaScript
async function getImg(url=''){
  await fetch(url) //加载图片
}

async function fn(){
  const url = 'https://ts1.cn.mm.bing.net/th/id/R-C.56fc694deb9c296f089be7510c8874a7?rik=42hqD%2fDf0BuWyw&riu=http%3a%2f%2fimg1.v.tmcdn.net%2fimg%2fh000%2fh08%2fimg20120821173754f32380.jpg&ehk=3i6xD8ylcpoKEQs4TB95Rij0UDH0ycVRuUJCMYuGFv0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
  const start = Date.now()
  await getImg(url)
  const ms = Date.now() - start
  console.log(`加载图片花费了 ${ms} 毫秒`)
}
fn()
// 代码的执行机制，先执行fn，然后执行getImg这时fn还没执行完成，等getImg执行完成由回到了fn
```

