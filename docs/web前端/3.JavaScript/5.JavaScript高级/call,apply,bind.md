## 开始

call,apple,bind 这三个函数存在的意义是什么？

答：改变函数执行时的上下文，再具体点就是改变函数运行时 this 的指向。

## 案例

```JavaScript
function Person(name) {
    this.name = name
}

Person.prototype = {
    constructor: Person,
    showName: function (a, b) {
        console.log(this.name, a, b)
    },
}

let p = new Person('李四')
p.showName(777, 999)

let animal = {
    name: 'cat',
}

// 让一个对象去使用另一个对象身上的方法
p.showName.call(animal, 666, 888)
p.showName.apply(animal, [666, 888])
p.showName.bind(animal)()
```

我们拿别人的showName方法，并动态改变其上下文帮自己输出了信息，说到底就是实现了复用

区别：

- call和apply改变了函数的this后就执行了, 而bind则是返回改变上下文后的一个函数

- call和apply的区别，call和apply的第一个参数都是要改变上下文的对象，call从第二个参数开始以列表的形式传递，用逗号隔开，而apply则是以数组的形式传递

## 应用

```JavaScript
// 求数组中的最大值
let arr = [112, 324, 54675, 5234, 65532, 565543256, 543245645434, 2425565]
console.log(Math.max.call(Math, ...arr))
console.log(Math.max.apply(Math, arr))
```