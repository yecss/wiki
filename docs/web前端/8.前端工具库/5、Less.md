## CSS 变量

css 原生也支持变量的设置，但是老版本的浏览器不支持。

声明变量：`--变量名`

```CSS
html{
    --color: brown;
    --height: 300px
}
```

应用变量：`var(--变量名)`

```CSS
background-color: var(--color);
```

## calc - 计算函数

除法乘法等等。但是兼容性不好。

## less

为解决上面的一些问题以及CSS 的一些缺陷，Ruby 开发了 less

less 是一门 css 预处理语言，可以用更少的代码实现更强大的样式。

在less中添加了许多新特性，

1. 变量的支持

1. mixins的支持...

> vscode 插件推荐：easy-less

## 子元素样式

子元素写到父元素内部。

```CSS
body{
    height: 100px;
    width: 100px;
    .box1{
        color: @color;
    }
    .box2{
        color: @color;
    }
    > .box3{
    height: 100px;
    }
}
```

## 注释

`//`： 双斜杠，单行注释，不会被解析到中 CSS

`/* */`：斜杠星号，CSS 注释，会被解析到 CSS 中

## 变量

在变量中可以存储一个任意的值(颜色，尺寸，类名)。

声明变量：`@变量名：值`

使用变量：

- 直接使用：`属性：@变量名`

- 作为类名或一部分值时：`@{变量名}`

## 使用属性值

> 新语法

```
$属性名
box1{
    height: 200px;
    width: $height;
}
```

## and 符

`&`：表示外层的父元素

示例一：

```CSS
.box1{
    &:hover{
        color: red;
    }
}
```

示例二：

```CSS
.imlist{
    &-item{
        color: #fff;
    }
}
```

## 选择器分组

直接分组（复制样式）

直接对指定的样式进行引用：(mixin 混合)

```CSS
.p1{
    color: red;
    height: 200px;
}
.p2{
    .p1()
}
```

分组扩展：

```CSS
.p1{
    font-size: 12px;
    color: #bfa;
  }
  // p2对p1进行扩展
  .p2:extend(.p1){
    background-color: aqua;
  }
```

## mixins - 混合函数

使用类选择器时可以在类名后面就加一个括号，这是我们就创建了一个mixins，这个混合不用于自身，可以用于传递给其他属性。

```CSS
.de(){
    color: #eee;
    background-color: aqua;
    font-size: 12px;
}
.p3{
    .de
}
```

### mixins 常用用法

1. 按顺序传递参数

1. 按形参传递参数

1. 设置默认值

```CSS
// mixins函数，可以传递值

// 按顺序传递参数
.test(@w,@h){
    width: @w;
    height: @h;
    font-size: 14px;
}
.box{
    .test(20px,100px)
}

// 按形参传递参数,必须传三个值
.box1{
    .test(@c:#baaa,@h:100px,@w:20px,)
}

// 设置默认值，在传值时，就可以不需要传递全部的值了
.test(@w:100px,@h:100px,@c:#000){
    width: @w;
    height: @h;
    background-color: @c;
}
.box1{
    .test(@w:200px)
}
```

## 颜色

计算颜色之间的平均值

```CSS
.box2{
    color: average(green,yellow)
}
```

颜色加深

```CSS
color: darken(#bfa,10%)
```

## less 运算

less 中所有的数值都可以进行计算，如加减乘除。

```CSS
width: 100px +100px;
```

## 引入 @import

引入其他的 less 文件到当前的 less 中。

```CSS
@import url(./style.less);
.box1{
    width: 100px;
    height: 100px;
}
```

## 源码地图 - Sourcemap

能够在调试当中快速定位样式在 less 文件中的位置。