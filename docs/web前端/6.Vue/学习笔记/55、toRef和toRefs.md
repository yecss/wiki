## toRef

1.作用：创建一个ref 对象，其value值指向另一个对象中的某一个属性。

ref和toRef的区别：

```JavaScript
return {
    salary:ref(person.salary), 
    //ref 只是初始化的时候读取了源数据，然后重新定义了一份新数据。模板中操作的也是新数据

    salary:toRef(person,'salary'),
    // 通过get将value值指向了salary
}
```

> 区别就是复制和引用的区别。

## toRefs

只能处理一个数据。toRefs可以处理一个对象中的所有属性。

示例：

```JavaScript
setup(){
    let person = reactive({
        name:'张三',
        age:22,
        salary:20000
    })
    return {
        person,
        // 拓展运算符，此处只是单层，如果数据是嵌套的，还需要另外处理
        ...toRefs(person)
    }
},
```

