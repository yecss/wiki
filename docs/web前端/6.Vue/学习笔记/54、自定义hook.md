## 自定义hook

- 什么是hook——本质是一个函数，把setUp函数中使用的composition api进行了封装。
- 类似于vue2中的mixin
- 自定义hook的优势，复用代码，让setup中的罗技更加清晰易懂。

### 示例

**hook/usePoint.js**

```JavaScript
import {onBeforeUnmount, onMounted, reactive } from '@vue/runtime-core'

export default function (){
    // 实现鼠标打点的数据
    let point = reactive({
        x:0,
        y:0
    })
    // 实现鼠标打点的方法
    function savePoint(event){
        point.x = event.pageX
        point.y = event.pageY
        // 控制台输出位置
        console.log(event.pageX,event.pageY)
    }
    onMounted(()=>{
        window.addEventListener('click',savePoint)
    })
    onBeforeUnmount(()=>{
        console.log("demo被销毁了")
        window.removeEventListener('click',savePoint)  
    })

    return point
}


```

