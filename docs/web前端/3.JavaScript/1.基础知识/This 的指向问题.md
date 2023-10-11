# JavaScript this 关键字

## 简单理解

根据函数调用的不同所指向的对象也不同，一般来说`this` 对象是执行时确定的

1. 以函数的形式调用时，this永远都是window
2. 以方法的形式调用时，this就是调用方法的那个对象（函数体内）

```javascript
function fun(){
	console.log(this);
}
var x = {
	name: 'lisi',
	sayName: fun
}
fun()   //指向Window
x.sayName()   //指向x
```

## 详细解释

面向对象语言中 this 表示当前对象的一个引用。

但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。

- 在方法中，this 表示该方法所属的对象。
- 如果单独使用，this 表示全局对象。
- 在函数中，this 表示全局对象。
- 在函数中，在严格模式下，this 是未定义的(undefined)。
- 在事件中，this 表示接收事件的元素。
- 类似 call() 和 apply() 方法可以将 this 引用到任何对象。

---

### 单独使用this，则它指向全局(Global)对象

```javascript
var x = this;
console.log(x); // >> Window
```

```javascript
// 函数中使用 this（默认）
// 在函数中，函数的所属者默认绑定到 this 上。
```

### 事件中的 this

```javascript
// 在 HTML 事件句柄中，this 指向了接收事件的 HTML 元素：
<button onclick="this.style.display='none'">点我后我就消失了</button>
```

### 对象方法中绑定

```javascript
// 下面实例中，this 是 person 对象，person 对象是函数的所有者：
var person = {
	firstname: 'John',
	lastname: 'Doe',
	id: 555,
	fullname: function(){
		return this.firstname+" "+this.lastname;
		// this当前指向的是person
	}
}
console.log(person.fullname())
```

### 显式函数绑定

```javascript
//在 JavaScript 中函数也是对象，对象则有方法，apply 和 call 就是函数对象的方法。这两个方法异常强大，他们允许切换函数执行的上下文环境（context），即 this 绑定的对象。

//在下面实例中，当我们使用 person2 作为参数来调用 person1.fullName 方法时, this 将指向 person2, 即便它是 person1 的方法：
var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // 返回 "John Doe"
```