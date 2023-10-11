## Watch

### Vue2写法

```JavaScript
watch:{
    // 简写
    sum(newV,oldV){
        console.log("sum的值变了",newV,oldV);
    },
    sum:{
        // 立即执行
        immediate:true,
        // 深度监视
        deep:true,
        handler(newV,oldV){
            console.log("sum的值变了",newV,oldV);
        }
    }
},
```



### Vue3写法

注意点:

- Vue3的wtach的监视层级很深
- 可以重复写多个watch
- 单个watch写多个监视对象用数组写法
- 监视对象无法获取oldValue
- 监视reacttive所定义的对象里面的对象，深度监视是有效的。
- 监视ref对象里面的求助reactive所定义的独享，深度监视是有效的。

```javascript
// 情况一：监视ref所定义的一个响应式数据
// watch可以传递第三个参数
// Vue3的wtach的监视层级很深
watch(sum,(newV,oldV)=>{
    console.log("sum的值变了",newV,oldV);
},{
    deep:true,
    immediate:true
})

// 情况二：监视ref所定义的多个响应式数据
// 重复写watch
watch(msg,(newV,oldV)=>{
    console.log("msg的值变了",newV,oldV);
})

// 数组写法
// newV,oldV就变成了一个数组
watch([sum,msg],(newV,oldV)=>{
    console.log("msg的值变了",newV,oldV);
})

// 情况三,监视对象,Bug:无法获得正确的oldValue
// 强制开启了深度监视(deep配置无效)
watch(person,(newV,oldV)=>{
    console.log('person变化了,',newV,oldV);
})

// 情况四:监视对象中的某个属性
watch(()=>person.job.j1,(newV,oldV)=>{
    console.log("person中的job中的j1变化了",newV,oldV);
})

// 特殊情况:
// 直接监视reactive怼出来的对象deep无效,而这个内部的对象deep是生效的
// 也无法获取oldValue
watch(()=>person.job,(newV,oldV)=>{
    console.log("person中的job变化了",newV,oldV);
},{deep:true})
```

