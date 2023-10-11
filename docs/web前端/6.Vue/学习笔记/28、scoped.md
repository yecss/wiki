## scoped

让组件的CSS部分独立起来，互不影响。

原理：给标签加上了一个data属性，且旁边的值是随机生成的。

```html
<style scoped>
.demo{
  background-color: rgb(25, 212, 137);
}
</style>
```

> 注意：App.vue中的style标签不适合加scoped属性。

## style

在Vue中我们不仅可以用CSS写也可以用less去写。但是脚手架默认不支持直接编译less。需要安装less-loader的7版本。