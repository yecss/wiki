# vue2知识点复盘

2023年2月9日20:38:27开启学习vue2官方文档，并记录一些重点在这里。

## 开始

### 声明式渲染 

在data中定义数据，在模板中使用{{数据}}

### 指令

### 组件化

> 在一个大型应用中，有必要将整个应用程序划分为组件，以使开发更易管理。

注册组件 Vue.component

数据传递 子单元通过 prop(类似自定义属性) 接口与父单元进行良好的解耦

```html
<div id="app">
    <ol>
        <todo-item v-for="item in listData" :key="item.id" :todo="item"></todo-item>
    </ol>
</div>
<script>
    Vue.component('todo-item',{
        props:['todo'],
        template:'<li>{{todo.text}}</li>'
    })
    var app = new Vue({
        el:'#app',
        data:{
            listData:[
                {id:0,text:'西瓜'},
                {id:1,text:'苹果'},
                {id:2,text:'草莓'},
            ]
        }
    })
</script>
```

### 数据和方法

数据property：data中的数据

方法property：Vue实例暴露出来的一些有用的方法，他们都以前缀 **$ **开头，例如：vm.$el, vm.$watch

### 生命周期钩子函数

在生命周期中 this是指向vm实例对象的。生命周期钩子的 `this` 上下文指向调用它的 Vue 实例。



8个生命周期：创建 挂载 更新 销毁(前，完成)

1. beforeCreate
2. created
3. beforeMount
4. mounted
5. beforeUpdate
6. updated
7. beforeDestroy
8. destroyed

## 模板语法

### 插值

文本插值：使用“Mustache”语法 (双大括号) 的文本插值

v-once: 一次性插值

v-html: 输出真正html代码

### 指令

指令 (Directives) 是带有 `v-` 前缀的特殊 attribute

`v-bind` 指令可以用于响应式地更新 HTML attribute，缩写为 **：**

`v-on` 指令，它用于监听 DOM 事件，缩写为 **@**

`v-if` 指令，它用于条件判断

`v-for` 指令，它用于循环遍历

`v-model` 指令，它用于双向数据绑定



动态参数

```vue
<!--
注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”章节所述。
-->
<a v-bind:[attributeName]="url"> ... </a>
```

指令修饰符

以 . 开头

```html
<form v-on:submit.prevent="onSubmit">...</form>
```

## 计算属性和侦听器

### 计算属性

一些复杂的逻辑我们可以使用计算属性来代替。

我们在插值语法中可以直接使用计算属性，计算属性的本质就是一个函数

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```javascript
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

计算属性默认只有 getter，不过在需要时你也可以提供一个 setter

```javascript
var vm = Vue({
	el:'#app',
    data:{},
    computed:{
        fullName:{
            get:func,
            set:func,
        }
    }
})
```



### 侦听属性

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：**侦听属性**。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 `watch`

## class和style绑定

### class

我们在使用v-on绑定html属性的时候，表达式结果的类型除了字符串之外，还可以是对象或者数组。

当他是一个对象的时候，生效取决于对象值的真假，当他是一个对象的时候，可以同时绑定多个html attribute

## 条件渲染

`v-if`

`v-else`：他必须跟在v-if的后面

`v-else-if`

`v-show`，注意: 他不支持 template元素，也不支持v-else

### key

用key管理可复用的元素，Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。

## 列表渲染

`v-for`：把一个数组对应为一个元素

- 在v-for中，我们可以所有父作用域中的property。
- v-for还支持第二个可选的参数，即当前项的索引。
- 你也可以用 `of` 替代 `in` 作为分隔符，因为它更接近 JavaScript 迭代器的语法。
- 你也可以用 `v-for` 来遍历一个对象的 property。第一个参数为property的值，第二个参数为property的,。第三个参数为索引。

## 事件

监听事件：v-on

事件修饰符：v-on:click.stop

按键修饰符

## 表单输入绑定

`v-model`：数据的双向绑定

### 修饰符

1. .lazy
2. .number
3. .trim

