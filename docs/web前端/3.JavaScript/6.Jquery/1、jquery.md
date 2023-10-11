

# jquery

### 添加事件：

`选择器.on('事件名',回调函数)`

### 修改CSS

`选择器.css('属性名','属性值')`

```JavaScript
改变css样式
$("div").css("background","pink")
$("ul li").css("color","red")

对象的形式来写
$(this).css({
    color:"red",
    width:300,
})
```

### 排他思想

改变其他兄弟元素的背景颜色

```JavaScript
$('#btn1').on('click',()=>{
  $('#li-2').siblings().css('background','#eeeddd')
}) 
```

### Jquery入口函数

作用：保证Jquery的执行在DOM记载完毕之后。

```javascript
$(()=>{
  $('li').css('background', '#eeeddd')
})

// 或者
$(document).ready(()=>{

})
```

| **window.onload** | **$(document).ready()**                                      |                                                            |
| ----------------- | ------------------------------------------------------------ | ---------------------------------------------------------- |
| **执行时机**      | **必须等待网页全部加载完毕（包括 图片等），然后再执行包裹代码** | **只需要等待网页中的DOM结构 加载完毕，就能执行包裹的代码** |
| **执行次数**      | **只能执行一次，如果第二次，那么 第一次的执行会被覆盖**      | **可以执行多次，第N次都不会被上 一次覆盖**                 |

一定要使用入口函数吗？

答案：不一定的，例如把script放在整个代码的之后就不会出现该问题，就可以不用入口函数。

## 思考

对jquery中append多次同一个元素不生效的思考，因为append()方法在Jquery是使用appendChild()实现的。简单的说就是相当于剪切。

解决方法1：

将DOM元素写进append中

```JavaScript
// 这样
$('ul').append('<li>我是后来创建的li</li>')
// 而不是
let li = $('<li>我是后来创建的li</li>')
$('ul').apppend(li)
```

解决方法2：

使用克隆的方法：

```JavaScript
$('ul').append(li.clone())
```

