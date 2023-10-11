## 引入Vue

引入vue.js, 全局将会新增一个Vue构造函数

```javascript
<script src="../js/vue.js"></script>
```

## 插值语法

插值语法 `{{}}` 花括号就是分隔符，花括号里面放的是表达式。

> 插值语法常用于标签体当中。<标签> 插值语法 </标签>

**花括号里面能看到vm里面的任何属性以及原型上的数据**

### 一次性插值

```html
<h2 v-once>{{a}}</h2>
```

## 指令语法

### v-bind - 单向数据绑定

将引号里面的内容取出来当做JS表达式去处理赋值给响应的属性。

`v-bind: 可以简写为 : `

```vue
<a v-bind:href="url" v-bind:x="hello">点我访问</a>
<a :href="url2">点我访问2</a>
```

> `v-bind`常应用于标签属性当中

### v-model - 双向数据绑定

`v-model` 只能应用在表单类元素上（输入类元素，如input...)

`v-model:value`可以简写为`v-model`因为`v-model`就是作用于value上的。`

## 关闭开发版本提示

```javascript
Vue.config.productionTip = false;
```

## 容器和实例的关系

容器和实例是一对一的。

```html
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<script src="../js/vue.js"></script>
```

> 浏览器小技巧：`Ctrl+刷新` 可以强制刷新

