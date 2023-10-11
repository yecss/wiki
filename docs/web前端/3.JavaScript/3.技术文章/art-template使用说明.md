# art-template

## 导入工具库

1. 引入文件  
2. 创建一个模板
3. 获取模板 template("模板的id")

CDN文件

`<script src="https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/art-template/4.13.2/lib/template-web.js" type="application/javascript"></script>`

## 创建模板

```html
<!-- 注意是text/html  然后给个id-->
<script type="text/html" id="tpl-students">

</script>
```

## 获取模板

```html
template("tpl-students",{
    students:students
})
<!-- 参数：模板的ID名,数据 -->
```

## 基本语法

> 优先使用标准语法，标准语法解决不了的使用原始语法。

### 遍历

```html
<!-- each 遍历 --> <!-- value 遍历到的每一个值 -->
{{each students}}
    <li>{{$value.name}} {{$value.age}} {{$value.sex}}</li>
{{/each}}
```

### 输出

- `$data` 代表传递进来的所有数据
- `$value` 代表每次遍历获取到的数据
- `$index` 代表当前数据的索引

```html
{{value + 100}}<br />
{{data}}<br />
{{data.name}}<br />
{{value + data.age}}<br />
<!-- $data 代表传进来的所有数据 -->
{{$data}}<br />
<!-- $data.value 可以获取到value值 -->
{{"$data.value获取到的: "+$data.value}}<br />
<!-- 原文输出，默认情况下html标签会当成特殊字符 -->
{{text}}<br />
<!-- 在前面加@就会当成标签处理了 -->
{{@text}}<br />
```

### 条件语法

```html
{{if sex === "male"}}
男
{{else if sex === "female"}}
女
{{else}}
其他
{{/if}}
```

### 循环语法

```html
{{each students}}
<li>姓名：{{$value.name}} || 年龄：{{$value.age}}  索引：{{$index}}</li>
{{/each}}
```

### 子模板

```html
<script type="text/html" id="tpl-4">
    {{include "tpl-4-header"}}
    <p>首页</p>
    {{include "tpl-4-footer"}}
</script>
<script type="text/html" id="tpl-4-header">
    <p>我是公共的头部！</p>
</script>
<script type="text/html" id="tpl-4-footer">
    <p>我是公共的底部！</p>
</script>

<!-- 向子模板传参
<%include("tpl-4-header",{page:"首页"})%>
-->
```

