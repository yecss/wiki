# addEventListener与onclick的区别

在js中一直使用的addEventListener，依稀记得是看视频时老师说的这个好些，但也一直不明白两者之间的优缺点和联系，今天整理了下，对两者进行简单分析。

1.addEventListener可以对同一个元素绑定多个事件，执行顺序从上到下依次执行。而onclick同一个元素只能绑定一个事件，如有多个，后面的事件会覆盖前面的事件。



```javascript
document.getElementById("myDIV").addEventListener("click", function() {
  alert(1)
});
document.getElementById("myDIV").addEventListener("click", function() {
  alert(2)
});
//以上代码会先弹出1，在弹出2
document.getElementById("myDIV").onclick = function () {
  alert(1)
};
document.getElementById("myDIV").onclick = function () {
  alert(2)
};
//以上代码只会弹出1。
```

2.addEventListener的第三个参数为布尔类型，默认为false，也就是执行的冒泡机制，如为true，则执行捕获机制。

3.addEventListener它对任何 DOM 元素都是有效的，而不仅仅只对 HTML 元素有效。[点击查看dom分类]()

4.注册addEventListener事件时不需要写on，而onclick方式则必须加on。



```javascript
document.getElementById("myDIV").addEventListener("click", myFunction);
document.getElementById("myDIV").onclick = myFunction;
```

5.在移除事件上，onclick使用的是指针指向null，例如`document.onclick = null`，而addEventListener则使用的是独有的移除方法removeListener（要使用此方法，addEventListener必须执行的是外部函数或存在函数名，不然则不能使用）

例如：



```javascript
// 向 <div> 元素添加事件句柄
document.getElementById("myDIV").addEventListener("mousemove", myFunction);

// 移除 <div> 元素的事件句柄
document.getElementById("myDIV").removeEventListener("mousemove", myFunction);

//如是以下类型的代码，则不能使用removeEventListener
document.getElementById("myDIV").addEventListener("mousemove", function() {});
```

6.addEventListener为DOM2级事件绑定，onclick为DOM0级事件绑定。

7.IE678只能使用attachEvent，无addEventListener。



作者：转移到CSDN名字丹丹的小跟班
链接：https://www.jianshu.com/p/493da670ce63
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。