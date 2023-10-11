## 定义

![image-20220718142501659](images/image-20220718142501659-16581255027541.png)

### 示例

```JavaScript
watchEffect(()=>{
    // 我不说我监视谁,谁变了就调用
    console.log("watchEffect所指的的回调被执行了");
    let x = person.job.j1
})
```

