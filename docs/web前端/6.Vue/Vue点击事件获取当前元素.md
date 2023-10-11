## Vue的 event 事件

在开发中我们可能会使用单击事件去获取当前元素，这样就需要进行传参：

关键词: **`$event`** 在括号中输入这个关键词，然后在方法中就可以使用以下的方法去获取你当前所需要使用的元素

当前点击的元素

```JavaScript
e.target
```

是你绑定事件的元素

```JavaScript
e.currentTarget
```

获得点击元素的前一个元素

```JavaScript
e.currentTarget.previousElementSibling.innerHTML
```

获得点击元素的第一个子元素

```JavaScript
e.currentTarget.firstElementChild
```

获得点击元素的下一个元素

```JavaScript
e.currentTarget.nextElementSibling
```

获得点击元素中id为string的元素

```JavaScript
e.currentTarget.getElementById("string")
```

获得点击元素的string属性

```JavaScript
e.currentTarget.getAttributeNode('string')
```

获得点击元素的父级元素

```JavaScript
e.currentTarget.parentElement
```

获得点击元素的前一个元素的第一个子元素的HTML值

```JavaScript
e.currentTarget.previousElementSibling.firstElementChild.innerHTML
```

