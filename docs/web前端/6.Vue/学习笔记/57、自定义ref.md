### 示例

**延迟响应 - 防抖（等数据输入完成再响应）**

```JavaScript
// 自定义一个ref
function myRef (value,delay){
    let timer
    return customRef((track,trigger)=>{
        return {
            get(){
                // console.log("有人从myRef读取数据了")
                track() //3.让数据可以追踪
                return value
            },
            set(newV){
                clearTimeout(timer)
                // console.log("有人把myRef中的数据修改了")
                timer = setTimeout(() => {
                    value = newV //1. 修改数据
                    trigger() //2. 通知vue重新解析模板
                }, delay);
                
            }
        }
    })
}
```

