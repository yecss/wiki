## getAttribute()方法

定义和用法

`getAttribute()` 方法返回指定属性名的属性值。

实例

获得链接的 target 属性：

```javascript
document.getElementsByTagName("a")[0].getAttribute("target");
```

## setAttribute()方法

定义和用法

`setAttribute()` 方法添加指定的属性，并为其赋指定的值。

如果这个指定的属性已存在，则仅设置/更改值。

实例

```javascript
document.getElementsByTagName("INPUT")[0].setAttribute("type","button");
```

---

## querySelectorAll()方法

定义与用法

`querySelectorAll()` 方法返回文档中匹配指定 CSS 选择器的所有元素，返回 NodeList 对象。

NodeList 对象表示节点的集合。可以通过索引访问，索引值从 0 开始。

实例

```javascript
var x = document.querySelectorAll(".example");
```

## className

定义和用法

`className` 属性设置或返回元素的 class 属性。

实例

```javascript
document.write(document.getElementById('myid').className);
```

## classList

定义和用法

`classList` 属性返回元素的类名，作为 DOMTokenList 对象。

该属性用于在元素中添加，移除及切换 CSS 类。

classList 属性是只读的，但你可以使用 add() 和 remove() 方法修改它。

实例

为 `<div>` 元素添加 class:

```javascript
document.getElementById("myDIV").classList.add("mystyle");
```
