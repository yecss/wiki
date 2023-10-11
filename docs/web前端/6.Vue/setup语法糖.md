## 介绍

`<script setup>`是在**单文件组件（SFC）**中使用组合式API的编译时语法糖，解决**Vue3.0**中`setup`需要频繁将声明的变量、函数以及`import`引入的内容通过`return`向外暴露，才能在`<template/>`使用的问题

## 基本使用

导入组件不需要去注册

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <BaseHello></BaseHello>
</template>

<script setup>
  import BaseHello from '@/components/base-hello.vue';
</script>
```

其他：

[Vue3中的setup语法糖 - 简书 (jianshu.com)](https://www.jianshu.com/p/b8545d49fc69)



这东西就是个语法糖，能少些很多代码，但是这东西也要一分为二地去看待，简化我们代码的同时，代码的逻辑性下降了。
