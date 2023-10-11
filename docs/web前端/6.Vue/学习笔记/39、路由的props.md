## 路由的props配置

作用：让路由组件更加方便的收到参数。

1.配置props

```javascript
children:[
    {
        name:'xiangqing',
        // params参数 :参数
        path:'detail/:id/:title',
        component: MyDetail,
        // props的第一种写法,值为对象,该对象所有的key:value都会以props的形式传递给detail组件
        props:{a:1,b:'hello'}
        
        // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给detail组件
        // 简化 params接收参数的写法
        props:true

        // props的第三种写法，值为函数
        // 连续解构赋值 {params:{id,title}}
        props($route){
            return {id:$route.params.id,title:$route.params.title}
        }
    }
]
```

2.在路由组件中接收props

```javascript
props:['id','title']
```

