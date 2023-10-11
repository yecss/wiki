
## 前言

async是generator的一个语法糖


## async

使异步操作更加方便。

```JavaScript
async function f(){

}
```

### 代码

```JavaScript
// 定义一个异步函数，3秒后才能获取到值(类似操作数据库)
function getSomeThing(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('获取成功')
        }, 2000);
    })
}

async function test(){
    let a = await getSomeThing()
    console.log(a);
}
test() //3秒后输出：获取成功
```

## sleep函数

```JavaScript
async function test() {
  console.log('Hello')
  await sleep(1000)
  console.log('world!')
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

test()
```

