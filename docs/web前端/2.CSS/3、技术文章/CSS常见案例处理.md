## 一个盒子内文本垂直居中

```CSS
.box{
    height:100px;
    width:100px;
    line-height:100px;
    /* 把盒子的行高调到和高度一致 */
    background-color:skyblue;
}
```

## 图片全屏铺满解决方案

```CSS
body {
    height: 100vh;
    background-image: url(../img/bz.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
```

## 全屏遮罩

```CSS
body * {
    z-index: 1;
}
body::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
```

## 文本禁止选中

```CSS
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
```

## 媒体查询设置断点

![img](images/16684782446091.png)

```CSS
/*
    该样式将会在宽度小于768px时生效。
*/
@media screen and (max-width: 768px) {}
```

## 清除浮动

浮动的缺陷，浮动会导致父元素高度坍塌，当一个父元素的高度完全是由子元素撑起时，子元素发生浮动就会导致元素的高度坍塌。

解决方法：使用以下样式。

```JavaScript
.clearfix::before,
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
```

## **input 设置 width:100%；时实际宽高溢出父元素容器范围**

导致这个情况的原因是因为盒子模型的问题，盒子模型分为 W3C 和 IE 标准盒子。input 元素默认由 IE 标准盒子来计算宽度。

W3C 标准盒子：

```
width = content width 。即设定的 width 为元素的真实宽度，不计入 border padding。
```

IE 盒子：

```
width = content width + padding + border 。 将元素设定的 width + padding + border 加在一起算为元素的真实宽度。
```

由于 Input 默认为 IE 标准盒子，这就导致了input的宽度计算除了 content，还加上了 border padding，一起导致 input 设定 width:100%时溢出了父元素容器。

这时候我们可以通过 `box-sizing` 属性来解决：

```CSS
input{
 box-sizing:border-box;
}
```

## 如何设置高度为100%
```css
*{ 
	margin: 0; 
	padding: 0;
} 
html, body {
	height: 100%;
}
```