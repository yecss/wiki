## 定义

ES6 引入了一种新的数据类型，symbol，表示独一无二的值。是一种类似字符串的数据类型。

### 创建 Symbol

```javascript
let s = Symbol()
let s2 = Symbol('尚硅谷')
console.log(typeof s);
```

## Symbol for

通过Symbol.for 方法创建的是唯一的

```javascript
let s3 = Symbol.for('黑马')
let s4 = Symbol.for('黑马')
console.log(s3 == s4);  //true
```

## Symbol的特点

不能其他的数据进行运算，拼接

## 迭代器 Symbol.iterator

```javascript
const xiyou = ["唐僧","猪八戒","孙悟空","沙僧"]
console.log(xiyou)
// for of 循环，for of保存的是键值，而for in循环保存的是键名
for (let v of xiyou){
    console.log(v)
}
```

## forEach()

forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。

```javascript
banji.stus.forEach(function(v){

  console.log(v)

})
```

## JS 的数据类型记忆口诀

USONB you are so niubility

**u: undefined** 

**s: string symbol**

**o: object**

**n: null number**

**b: boolean**
