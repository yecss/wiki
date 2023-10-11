# Element.classList

`Element.classList` 是一个只读属性，返回一个元素的类属性的实时 `DOMTokenList`集合。

相比将 `element.className` 作为以空格分隔的字符串来使用，`classList` 是一种更方便的访问元素的类列表的方法。

## 基础语法：

- `contains` 存在类
- `add` 添加类
- `toggle` 切换类
- `replace` 替换类

## 操作示例

### HTML

```html
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
<div class="box">4</div>
<div class="box">5</div>
```

### CSS

```css
var box = document.querySelectorAll(".box")
// 存在类
console.log(box[1].classList.contains("box"))

// 移除类
box[0].classList.remove("box")

// 添加类
box[0].classList.add("other")

// 如果 box 类值已存在，则移除它，否则添加它
box[0].classList.toggle("box")

// 替换类
box[0].classList.replace("box", "bar");

// 可以添加或移除多个类值！！用逗号隔开。

// 使用展开语法添加或移除多个类值
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);
```

## 关于classList的“妙用”

我们都知道，通过JS去操控CSS确实是一件很麻烦的事情——他可能导致回流和重绘。

一般我们会这样做：

```css
document.style.background="red";
document.style.fontSize="24";
```

这样的话相当于【元素的样式被改变了两次】！整个JavaScript的性能就下来了。必要的时候（对一个元素更改多个样式）我们可以“把他们合在一起”：

```css
document.style.cssText="background:red;font-size:24;";
```

