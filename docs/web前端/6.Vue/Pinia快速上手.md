### 1. 安装 pinia

```sh
yarn add pinia
```

### 2. 在 main.js中使用pinia

我们在项目中要使用pinia，一定要在main.js中告诉vue我们要使用这个库了：

```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia' // 从pinia中导入createPinia方法
import App from './App.vue'

const app = createApp(App)
app.use(createPinia()) // 使用vue实例的use方法，告诉vue我们要使用pinia
app.mount('#app')

```

### 3. 创建pinia store的文件

首先，按照惯例，我们在src目录下面创建一个文件夹store，存放我们pinia相关的文件，也就是处理我们全局数据的位置，
我们在全局数据中最常处理的就是用户的信息，我们新建一个js文件，叫做profileStore.js，在这里面定义一个pinia的store，一个pinia的store可以理解为是一个全局数据的模块
比如我们的profileStore，就是用户信息这个模块
每增加一个模块，我们就在store文件夹下建立一个js文件，比如后面我们添加permissionStore.js，表示权限模块，
现在我们先只写用户模块，profileStore.js的内容

```javascript
import { defineStore } from 'pinia' //从pinia中导入，defineStore方法，用于定义一个新的store
export const useProfileStore = defineStore('profile', { // 使用defineStore方法定义store
  state() { // state表示这个store里的状态，也就是存放数据的地方
    return {
      userName: '林哥', // 这里我们定义了一个数据叫userName，用于存放我们的用户名 
    }
  },
})

```

### 4. 使用pinia store中的数据

在App.vue中引入我们的用户信息模块，就可以绑定在模板中显示了：

```vue
<template>
  <div>Hello,World!</div>
  <div>{{name}}</div>
</template>
//---
<script>
import {useProfileStore} from "@/store/profile-store"
import { reactive } from 'vue'
export default {
  name:'App',
  data(){
    let name = reactive(useProfileStore().userName)
    return{
      name
    }
  }
}
</script>
```

