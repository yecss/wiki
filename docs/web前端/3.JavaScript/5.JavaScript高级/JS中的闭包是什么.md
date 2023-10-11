太难理解了，这个东西

参考文章：
[「每日一题」JS 中的闭包是什么？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/22486908)
[作用域闭包_AXuna的博客-CSDN博客](https://blog.csdn.net/weixin_42267121/article/details/120402551)
[闭包 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)

## 什么是闭包？

简单的说就是*闭包意味着内部函数始终可以访问其外部函数的变量和参数，即使在外部函数返回后也是如此。*




### 闭包

**概念**：当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。  
**eg**:

```JavaScript
  function foo() {
      var a=2;
      function bar() {
          console.log(a);;
      }
      return bar;
  }
  var baz=foo();
  baz();  //2
```

函数bar() 的词法作用域能够访问foo() 的内部作用域。在foo() 执行后，其返回值（也就是内部的bar() 函数）赋值给变量baz 并调用baz()，实际上只是通过不同的标识符引用调用了内部的函数bar()。  
bar() 显然可以被正常执行。但是在这个例子中，它在自己定义的词法作用域以外的地方执行。  
在foo() 执行后，通常会期待foo() 的整个内部作用域都被销毁，而闭包可以阻止这件事情的发生。事实上内部作用域依然存在，因此没有被回收。bar() 本身在使用这个内部作用域。  
拜bar() 所声明的位置所赐，它拥有涵盖foo() 内部作用域的闭包，使得该作用域能够一直存活，以供bar() 在之后任何时间进行引用。  
bar() 依然持有对该作用域的引用，而这个引用就叫作闭包。

注： 你不知道的javascript上 第一部分第五章读书笔记

## 闭包案例

`计时10秒`

---

**未使用闭包版本：**

```JavaScript
let second = 0
function counter(){
  second += 1;
  return second;
}
const recordSecond = setInterval(()=>{
  if(second == 10){
    clearInterval(recordSecond)
    console.log('计时结束！')
    return;
  }
  console.log(`${counter()}秒`)
},1000)
```

> 为什么说是最低级的呢，因为我们实现功能的思路是定义了一个全局变量，每次累加都是更新这个
> 全局变量，而所有编程语言中有一条不成文的铁律
> 尽可能的少定义全局变量。



**使用闭包版本：**

```JavaScript
function counter(){
  let second = 0;
  function doCounter(){
    if(second == 10){
      clearInterval(recordSecond)
      console.log('计时结束')
      return
    }
    second += 1;
    console.log(`${second}秒`)
  }
  return doCounter
}
const doCounterFn = counter()
const recordSecond = setInterval(() => {
  doCounterFn()
}, 1000);
```
