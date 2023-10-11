```
yarn add vuex@3
```



### 创建文件

**src/store/index.js**

```JavaScript
// 引入vue
import Vue from 'vue'
// 该文件用于创建Vuex中最为核心的store

// 引入Vuex
import Vuex from "vuex"

// 准备actions,用于响应组件中的动作
const actions = {}

// 准备mutations,用于操作数据
const mutations = {}

// 准备state,用于存储数据
const state = {}

// 使用Vuex插件
Vue.use(Vuex)

// 创建store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
```

### 使用

在**main.js**中创建vue时，传入store配置项。

```javascript
import store from "./store/index"

new Vue({
    el:'#app',
    render:h => h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})
```

## getters配置项

当state中的数据需要进行加工时，可以使用getters配置项。

配置getters

```JavaScript
// 准备getters,用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}
```

取出数据

```html
<h1>当前求和乘10为：{{$store.getters.bigSum}}</h1>
```

## mapState

**用于帮我们映射state中的数据为计算属性**

原写法和简化写法:

```html
<h1>当前求和为：{{$store.state.sum}}</h1>
<h1>当前求和为：{{sum}}</h1>
```

计算属性：

```JavaScript
computed:{
  // 靠自己亲自写计算属性
  // sum(){
  //   return this.$store.state.sum
  // }

  // 依靠mapState自动生成计算属性函数
  // 从state中读取数据
  // key:value(value需要引号)
    
  // 对象写法
  ...mapState({sum:'sum',subject:'subject',school:'school'}),
},
   
  // 数组写法，一个sum两个用途
  // 当计算属性和数据源重名时，可以使用数组简写法
  ...mapState(['sum','subject','school']),
```

使用了mapState之后，就可以使用简写方法，简写state中的属性了。

## mapGetters

使用方法和mapState一样

第一步：引入

```javascript
import {mapState,mapGetters} from 'vuex'
```

第二步，在计算属性中配置

```javascript
...mapGetters(['bigSum'])
```

第三步，到需要使用的地方简写

```html
<h1>当前求和乘10为：{{bigSum}}</h1>
```

## mapMutations

此方法可以映射mutations中的数据到methods中。

方法中会调用commit去联系mutations

使用方法和mapState类似。唯一不同的是该方法需要手动传递参数。当不传递参数时，默认会给我们传递一个事件对象。

```javascript
methods:{
    // 自己写
    // increment(){
    //   this.$store.commit('JIA',this.n)
    // },
    // decrement(){
    //   this.$store.commit('JIAN',this.n)
    // },
    
    // 自动生成
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
}
```

传参数。

```html
<button @click="increment(n)">+</button>
<button @click="decrement(n)">-</button>
```

## mapActions

借助mapActions生成对应的方法，方法中会调用dispatch去联系actions

```javascript
// 自己写
// incrementOdd(){
//   this.$store.dispatch('jiaOdd',this.n)
// },
// incrementWait(){
//   setTimeout(() => {
//     this.$store.dispatch('jiaWait',this.n)
//   }, 500);
// },

// 自动生成
...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
},
```

**该方法同样需要传参**

## 模块化编码

### 第一步

在store中分类好数据，然后开启命名空间

```javascript
const countOptions = {
    // 开启命名空间
    namespaced:true,
    actions:{
        jiaOdd:function(context,value){
            if(context.state.sum % 2){
                context.commit('JIA',value)
            }
        },
        jiaWait(context,value){
            context.commit('JIA',value)
        }
    },
    mutations:{
        JIA(state,value){
            state.sum += value
        },
        JIAN(state,value){
            state.sum -= value
        },
    },
    state:{
        sum:0,
        school:'尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        },
    }
}
```

### 第二步

```javascript
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
```

### 第三步

在配置中加入分类名

```JavaScript
...mapState('countAbout',['sum','school','subject']),
```

