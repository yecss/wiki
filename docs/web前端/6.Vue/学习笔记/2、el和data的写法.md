## el的两种写法

```javascript
el: '.container'
// 上面一句可以写成下面这样
v.$mount('.container')
```

### 代码示例

```vue
<script>
    Vue.config.productionTip = false;
    const v = new Vue({
        // el: '.container',
        data:{
            name:'海浪',
        }
    })
    setInterval(function(){
        v.$mount('.container')
    },1000)
    
</script>
```

## data的写法

### 第一种 - 对象式

```JavaScript
data:{
    name:'海浪',
}
```

### 第二种 - 函数式

> 此处的this是Vue实例对象

```javascript
data:function(){
    return{
        name:海浪
    }
}
//或者
data(){
    return{
        name:海浪
    }
}
```

**由Vue管理的函数，一定不要写成箭头函数。一旦写了箭头函数，this就不再是Vue实例了。**

