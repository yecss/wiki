## var()

概述，`var()`函数可以代替元素中任何属性中的值，`var()`函数不能作为属性名，选择器或者其他除了属性值之外的值，（这样做通常会产生无效语法，或者一个没有关联到变量的值。

## 语法

方法的第一个参数是要替换的自定义属性的名称。函数的可选第二个参数用作回退值。如果第一个参数引用的自定义属性无效，则该函数将使用第二个值。

`var( <custom-property-name> , <declaration-value>? )`

## 使用示例

```css
:root {
--green: #00FF00;
--white: #ffffff;
--black: #000000;
}
.light-theme{
    --bg: var(--green);
    --fontColor: var(--black);
    --btnBg: var(--black);
    --btnFontColor: var(--white);
}
.dark-theme{
    --bg: var(--black);
    --fontColor: var(--green);
    --btnBg: var(--white);
    --btnFontColor: var(--black);
}
body{
    background: var(--bg);
    color: var(--fontColor);
}
```

