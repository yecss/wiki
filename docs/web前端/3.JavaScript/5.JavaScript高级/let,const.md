## 块级作用域

块级作用域，也就是说声明的变量只在{}内有效。

```JavaScript
function f() {
    let y = 1

    if (true) {
        var x = 2
        let y = 2
    }

    console.log(x) // 2
    console.log(y) // 1
}

// 答：y具有块级作用域
```

## 不允许重复声明

```JavaScript
let a = 1
let a = 2
console.log(a)

var a = 1
var a = 2
console.log(a)

// 输出：报错 Identifier 'a' has already been declared
// 答：let不允许重复声明, 但是var可以
```

## 暂时性死区

经常看到有文章说: 用let和const申明的变量不会提升。其实这种说法是不准确的

```JavaScript
console.log(x)
var x = 1  // undefined
let x = 1  // Cannot access 'x' before initialization

var x = 1
if(true){
    console.log(x)
    let x = 2
}

// 输出：ReferenceError: Cannot access 'x' before initialization
//上述代码会报错Uncaught ReferenceError: Cannot access 'x' before initialization。
// 如果let申明的x没有变量提升，那我们在他前面console应该拿到外层var定义的x才对。
// 但是现在却报错了，说明执行器在if这个块里面其实是提前知道了下面有一个let申明的x的，所以说变量完全不提升是不准确的。
// 只是提升后的行为跟var不一样，var是读到一个undefined，**而块级作用域的提升行为是会制造一个暂时性死区(temporal dead zone, TDZ)。
// **暂时性死区的现象就是在块级顶部到变量正式申明这块区域去访问这个变量的话，直接报错，这个是ES6规范规定的。
```

## 不影响全局对象

```JavaScript
var JSON = 'json'
console.log(window.JSON)
// 输出：json

let JSON = 'json'
console.log(window.JSON)
// 输出：JSON {Symbol(Symbol.toStringTag): 'JSON', parse: ƒ, stringify: ƒ}
```

## 循环语句的应用

```JavaScript
for(var i=0;i<3;i++){
    setTimeout(()=>{console.log(i)},1000)
}
// 输出 333
// 上述代码我们期望的是输出0,1,2，但是最终输出的却是三个3，这是因为setTimeout是异步代码，会在下次事件循环执行，而i++却是同步代码，而全部执行完，等到setTimeout执行时，i++已经执行完了，此时i已经是3了。以前为了解决这个问题，我们一般采用自执行函数:
for (var i = 0; i < 3; i++) {
    ;(function (i) {
        setTimeout(() => {
            console.log(i)
        })
    })(i)
}
// 现在有了let我们直接将var改成let就可以了：
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i)
    })
}
```