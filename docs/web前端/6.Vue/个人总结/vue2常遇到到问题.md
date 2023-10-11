### 1、components文件夹下，新建文件的命名规则？

大驼峰还是帕斯卡

### 2、vue2怎么使用vue-router



### 3、.sync修饰符的作用

### 4、常用的库

- velocity-animate
- axios
- nanoid

### 5、怎么开启深度监视

在watch配置里面，以对象的形式配置监视目标，并把deep属性配置为true

## vue-router

### 通配符跳转指定组件

```javascript
// 通配符 * 会匹配所有路径
{ path: '*', redirect: { name: 'Todo' } },
```

### 定义路由时快速引入组件

```JavaScript
component: () => import('../App.vue'),
```

## vue2常用的功能

- 计算属性

- 数据监视
