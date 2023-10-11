## Vue开发小技巧

### 强制修改UI组件库的样式

```css
.swiper >>> .swiper-pagination-bullet-active{
xxx
}
```

### 样式穿透

使用 `>>>`

### Vue router

vue2安装路由的3版本

`npm i vue-router@3`

使用的三步骤：

1. 创建路由器
2. 配置路由器
   1. 将路由器加载到 main.js

在 src 文件夹下，创建一个 router 文件夹， 在其中创建一个 index.js 文件，写入以下代码。

```javascript
import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)
export default new Router({
routes:[
    {
        path:'/', // 路径
        name:'', // 此路由的别名
        component: //此路由对应的组件
    }
]
})
```

#### 路由的两种工作方式

- hash (默认)
- history

#### 1、路由中引入组件的两种方法：

- 在最上方使用 import 语句常规引入。
- 使用 `component: () => import('../src/views/Home.vue')`

#### 2、路由跳转的两种配置

- 跳转路径
- 跳转组件别名

#### 3、active-class 设置给 `/` 会产生一个问题。

- 解决方法1，在路由中设置重定向

  ```json
  {
      path:'/',
      name:'TheHome',
      component:TheHome,
      redirect:'TheHome'
  },
  ```

- 解决方法2，在router-link 中写入exact

  ```josn
  <router-link to="/" class="menu-home" active-class="active" exact>首页</router-link>
  ```


#### 4、引入静态文件

- `require("./assets/xxxx")` - 引入的是 src 文件夹下的文件

#### 5、CSS变量写content

我们可以利用 CSS 的attr 属性来搭配HTML标签，动态的给一个元素的after填充文字进入。

```css
.timeline .event:before {
	xxx
	content: attr(data-date);
	xxx
}
```

#### 6、宽度固定但是还是被影响的问题

设置相对定位和绝对定位

