## render

脚手架里面默认引入的是一个残缺版的Vue，里面是没有模板解析器的。

如果我们想要写入内容的话就需要用到render函数。

> render函数需要又一个返回值

```html
render(createElement){
  return createElement('h1','你好啊')
}
```

