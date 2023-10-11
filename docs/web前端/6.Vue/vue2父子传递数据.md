## vue2父子传递数据

### 父传子

父组件，使用v-bind指令向子组件传递数据

```vue
<MainLink :isAuth="isAuth" ></MainLink>
```

子组件,使用props接收父组件传递进来的数据

```vue
props: ['isAuth'],
```

### 子传父

父组件，给子组件绑定一个自定义事件，同时自身创建一个事件处理函数

```vue
<TheAside @changeAuth="handlerchangeAuth"></TheAside>
```

子组件，使用$emit命令去触发父组件给子组件绑定的那个事件同时携带上数据,这样父组件那边的事件处理函数就会运行同时能够接收到数据。

```javascript
this.$emit('changeAuth',true)
```



## 语法糖

在 Vue.js 2.x 中，父组件向子组件传递数据时，使用 `.sync` 修饰符和不使用 `.sync` 修饰符有以下区别：

1. 使用 `.sync` 修饰符：

   - 当在父组件中使用 `.sync` 修饰符传递数据给子组件时，子组件可以直接修改该数据，并将修改后的值传递回父组件。
   - 在父组件中，使用 `:变量.sync` 将变量传递给子组件。
   - 在子组件中，通过 `$emit('update:变量', newValue)` 将新值传递回父组件。

   父组件示例：

   ```
   htmlCopy code<template>
     <div>
       <ChildComponent :message.sync="parentMessage"></ChildComponent>
     </div>
   </template>
   ```

   子组件示例：

   ```
   htmlCopy code<template>
     <div>
       <input type="text" v-model="childMessage">
     </div>
   </template>
   
   <script>
   export default {
     props: ['message'],
     data() {
       return {
         childMessage: this.message
       };
     },
     watch: {
       childMessage(newValue) {
         this.$emit('update:message', newValue);
       }
     }
   }
   </script>
   ```

2. 不使用 `.sync` 修饰符：

   - 当在父组件中不使用 `.sync` 修饰符传递数据给子组件时，子组件无法直接修改父组件的数据，而只能通过触发事件将修改后的值传递回父组件。
   - 在父组件中，使用普通的属性绑定方式将变量传递给子组件。
   - 在子组件中，通过 `$emit` 方法触发一个自定义事件，将新值传递回父组件。

   父组件示例：

   ```
   htmlCopy code<template>
     <div>
       <ChildComponent :message="parentMessage" @update:message="updateParentMessage"></ChildComponent>
     </div>
   </template>
   
   <script>
   import ChildComponent from './ChildComponent.vue';
   
   export default {
     components: {
       ChildComponent
     },
     data() {
       return {
         parentMessage: 'Hello'
       };
     },
     methods: {
       updateParentMessage(newValue) {
         this.parentMessage = newValue;
       }
     }
   }
   </script>
   ```

   子组件示例：

   ```
   htmlCopy code<template>
     <div>
       <input type="text" v-model="childMessage" @input="updateMessage">
     </div>
   </template>
   
   <script>
   export default {
     props: ['message'],
     data() {
       return {
         childMessage: this.message
       };
     },
     methods: {
       updateMessage() {
         this.$emit('update:message', this.childMessage);
       }
     }
   }
   </script>
   ```

总结： 使用 `.sync` 修饰符可以简化父组件和子组件之间的双向数据绑定，子组件可以直接修改父组件的数据。而不使用 `.sync`