## 组件通信 - 祖先传递后代

### 示例：

```JavaScript
import {reactive,provide,toRefs} from "vue"

// 将数据提供给后代使用
provide('car',car)

//接收数据
setup(){
    let car = inject('car')
    console.log(car)
    return {
        ...toRefs(car)
    }
}
```

> 通常在跨越多级关系时使用。