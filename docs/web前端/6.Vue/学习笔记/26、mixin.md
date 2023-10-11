## 局部混合

### minx文件

```JavaScript
export const mixin = {
    methods: {
        show() {
            alert(this.name)
        }
    },
    mounted() {
        console.log("你好啊！")
    },
}

export const mixin2 = {
    data(){
        return {
            name:'john',
            age:21
        }
    }
}
```

### 主文件

```html

<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click="show">提示</button>
  </div>
</template>

<script>
import {mixin,mixin2} from '../mixin'
export default {
  name: "Student-Name",
  data(){
    return {
      // 当混合中的数据和原代码中的数据重复时，以原代码中的为主
      // 而生命周期的钩子重复时，都会使用
      name:'李四',
    }
  },
  mixins:[mixin,mixin2]
}
</script>

```

## 全局混合

```JavaScript
// 引入混合
import {mixin,mixin2} from './mixin'

Vue.mixin(mixin)
Vue.mixin(mixin2)
```

