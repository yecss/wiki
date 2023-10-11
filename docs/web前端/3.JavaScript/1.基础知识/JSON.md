# JSON

**JavaScript Object Notation** JS对象表示法

JavaScript中的对象只有自己认识，其他的语言不认识

JSON就是一个特殊格式的字符串，这个字符串可以被任意的语言所识别。并且可以转换为任意语言中的对象。

JSON在开发中主要用来数据的交互。

> JSON和JS对象的格式一样，只不过JSON字符串的属性名必须加双引号，

### JSON的分类

1. 对象  {}
2. 数组  []

### JSON中允许的值

1. 字符串
2. 数值
3. 布尔值
4. null
5. 对象
6. 数组

## JS中的JSON对象

这个对象可以帮助我们将一个json和js对象互相转换。

`JSON.parse()` 将json字符串转换为js对象

`JSON.stringify()`

## eval()

`eval()`  这个函数可以用来执行一段字符串形式的JS代码，并将执行结果返回。

这个函数的功能很强大，但是尽量在开发中少使用，

首先他的执行性能比较差，且有安全隐患。

```JavaScript
var text = "alert(222)"
eval(text)
```

如果使用eval()执行的字符串中含有{},他会将{}当成代码块，如果不希望将其当成代码块解析，则需要在前后分别加上()

```javascript
// 兼容IE的JSON字符串转JS对象
var str = '{"name":"lisi","age":22}'

var obj = eval("("+str+")")
```

## 兼容性

如果需要兼容IE的JSON操作， 可以引入外部JSON函数文件。