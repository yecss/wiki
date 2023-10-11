网页宽度大于1200px时，显示1200px，小于1200px时，显示90%
```css
.container{
  width: 90%;
  max-width: 1200px;
  /* 上面两条也可以缩写成下面这样 */
  /* width: min(90%,1200px); */
  height: 600px;
  margin: 0 auto;
  background-color: coral;
}
```

