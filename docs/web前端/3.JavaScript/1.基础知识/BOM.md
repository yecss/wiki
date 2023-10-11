## 浏览器对象模型

BOM可以使我们通过JS来操作浏览器，在BOM中提供了一组对象，用来完成对浏览器的操作。

BOM对象

1. Window：代表整个浏览器窗口，同时也是网页中的全局对象
2. Navigator：代表当前浏览器的信息，通过改对象可以来识别不同的浏览器。
3. Location：代表当前浏览器地址栏的信息。通过location可以获取地址栏信息，或者跳转页面
4. History：可以获取浏览器的历史记录，可以通过改对象来操作浏览器的历史记录，由于隐私的原因，该对象不能获取到具体的历史记录，只能简单的操作浏览器向前访问或向后访问，且只在当次访问有效。
5. Screen：代表用户屏幕的信息，通过该对象可以获取到显示器相关信息。

> 这些对象在浏览器中都是作为window的属性保存的。
>
> 可以通过window对象使用，也可以直接使用

## Window

### 定时调用：

​	如果希望一段程序，每间隔一段时间执行一次，可以使用定时调用。

`setInterval(函数,毫秒)` 

参数：

​	第一个参数：函数；

​	第二个参数：时间（单位毫秒）

返回值：

返回一个Number类型的数据，这个数字来作文定时器的唯一标识。

---

自加案例

```JavaScript
btn.onclick = function(){
	setInterval(function(){
		h1.innerHTML++;
	},1000);
}
```

### 关闭定时器

`clearInterval(标识)` 

可以接受任意参数，如果参数是一个有效的定时器标识，则停止对应的定时器，如果不是有效的标识则什么也不做。

### 延时调用

不马上执行，而是等一会再执行。而且只执行一次。

`setTimeout(函数,时间)`

## Navigator

navigator.userAgent 代理，一般我们使用这个属性判断浏览器的信息。

```
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36 Edg/100.0.1185.36
```

浏览器检测

```JavaScript
var agent = navigator.userAgent
if(/edg/i.test(agent)){
	console.log("111")
}
```

如果不能通过userAgent来判断，我们可以通过IE的一些特有的属性来判断。

比如：ActiveXObject

```JavaScript
"ActiveXObject" in window
或者
!!window.ActiveXObject
```

## History

`history.length` 查看历史记录长度

`history.back()` 往回退

`history.forward()` 往前跳转

`go(1)`，正数参数表示跳转页面的数量，负数，表示向后跳转。

## Location

如果直接打印location可以直接获取到地址栏的信息。

`location.href` 设置或返回完整的URL

`location.search` 设置或返回以？开始的URL部分

`location.assign("链接")` 跳转到其他页面

`location.reload()` 重新加载当前页面，加参数**true**表示强制清空缓存

`location.replace()` 替换当前页面，改方法不会生成历史记录。不能通过回退按钮回退。
