## ref属性

给元素打上标识，方便后期的获取DOM。简单的来说就是id的替代者。

1. 被用来给元素或者子组件注册引用信息。
2. 应用在html标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象。

```html
<h1 v-text="msg" ref="title"></h1>
```

## 获取元素

```html
console.log(this.$refs.title)
```

> 当我们给组件打上ref时，获取到的是组件的实例对象。