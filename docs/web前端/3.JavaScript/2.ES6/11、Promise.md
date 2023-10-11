## Promise - 承诺

Promise相当于一个容器，保存着未来才会结束的事件。（异步操作的结果）

特点：

- 对象的状态不受外界的影响
- 三个状态，pending 进行, Resolved 成功, Rejected 失败。
- 一旦状态改变，就不会再逆转。任何时候都可以得到这个结果。

## 创建Promise对象

```javascript
const p = new Promise(function (resolved, rejected) {
    // 执行异步操作
    let res = {
        code: 2100,
        data: {
            name: 'xiaomage'
        },
        error: '失败了'
    }
    setTimeout(() => {
        if (res.code === 200) {
            resolved(res.code)
        }
        else {
            rejected(res.error)
        }
        console.log(p);
    },1000)

})
console.log(p);

// 参数val接受promise成功返回的结果，参数err接受promise失败返回的结果
p.then((val) => {
    console.log(val)
}, (err) => {
    console.log(err)
})
```

## 封装Promise

```javascript
function timeOut(ms){
    return new Promise((resolved, rejected)=>{
        setTimeout(()=>{
            resolved("Hello Promsie !!!")
        }, ms)
    })
}
timeOut(2000).then((val)=>{
    console.log(val)
})
```

## then方法

then的第一个参数是resolve回调函数，第二个参数是reject(可选的)回调函数。

`then()`返回的是一个新的promise实例，可以采用链式编程。

## resolve方法

resolve方法能将任何对象转换为promise对象.

```javascript
let p = Promise.resolve('foo')
// 等价于下面的函数
// let p = new Promise(resolve=>resolve('foo')
p.then((data)=>{
    console.log(data);
    
})// foo
```

## catch方法

```javascript
catch(err=>{})等价于then(null,err=>{})
```

## all方法

异步并行类操作。应用：游戏类素材比较多

```javascript
let p4 = Promise.all([promise1,promise2,promise3])

p4.then(()=>{
    //三个都成功 才成功
}).catch(err=>{
    //如果有一个失败，则失败。
})
```

## race方法

为某个异步请求设置超时时间，并且在超时后执行响应的操作

### 代码 2022年6月15日13:16:50

```JavaScript
// 在起始函数里面的代码都会在 promise 实例化时立即执行
let p = new Promise((resolve, reject) => {
    let data = 9
    // 两秒之后判断 data的值是否等于8
    setTimeout(() => {
        if(data == 8){
            resolve(data)
        }
        else{
            reject(data)
        }
    }, 2000);
})

// 调用 resolve 会执行 then 方法（then方法可以多次使用）
// 调用 reject 会执行 catch 方法
p.then(res => {
    console.log("data = 9")
}).catch(err => {
    console.log("data != 9")
}).finally(() => {
    console.log("Promise函数执行完毕");
})

// 在 promise 执行结束后都会自动执行finally 方法
```

