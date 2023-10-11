## 方法

方法是面向对象的术语，函数是面向过程的术语。



## 交互

1. alert() 单项对话框
2. confirm() 双项对话框
3. prompt() 输入对话框

## 修改

`.innerHTML` 修改标签中的内容

```javascript
document.getElementById("saying").innerHTML = "嘿，下午好！"
```

`.textContent` 修改标签中的内容

```javascript
if(className == "light-theme") {
        this.textContent = "Dark";
    }
```

`.classList.toggle('')` 弹出类名

在元素中切换类名。

第一个参数为要在元素中移除的类名，并返回 false。如果该类名不存在则会在元素中添加类名，并返回 true。

```JavaScript
document.body.classList.toggle('dark-theme')
```



## 验证

typeof 检查数据的类型

```javascript
x = 22
console.log(typeof x)
```

## 事件侦听器

```JavaScript
// 监听点击事件
switcher.addEventListener('click',function(){
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
```

