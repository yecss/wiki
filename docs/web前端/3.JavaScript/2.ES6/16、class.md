## class - 类

```JavaScript
// es5造类
function Person(name,age){
    this.name = name,
    this.age = age
}
Person.prototype.sayName = function(){
    return this.name
}
// 实例化对象
let a = new Person('lisi',22)
console.log(a.sayName())

// es6造类
class Person{
    // 实例化的时候会立即调用
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    // 添加共同的方法
    sayName(){
        return this.sayName
    }
}
let p2 = new Person("wangwu",33)
console.log(p2);
```

## 类的继承

```JavaScript
class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    sayName(){
        return this.name
    }
    sayAge(){
        return this.age
    }
}

class Chinese extends Person{//此时Chinese的prototype就是Person了
    constructor(name,age,color){
        // 继承父类的属性
        super(name,age);
        // Person.call(this.name,age);//相当于这一句
        this.color = color
    }
}
let p3 = new Chinese("zhangsi",21,"color")
console.log(p3);
```
