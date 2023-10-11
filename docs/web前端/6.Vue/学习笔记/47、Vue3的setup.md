## setup

1. 理解：Vue3.0中一个新的配置项，值为一个函数。

2. setup可以有两种返回值。第一种是返回一个对象，第二种是返回一个渲染函数。

   ```JavaScript
   // 返回一个对象，常用
   return {
       name,age,sayHello,test2
   }
   
   // 返回一个渲染函数
   // return ()=>{return h('h1','尚硅谷')}
   ```

3. Vue2中的methods可以访问到setup，但是setup无法访问到Vue中的data和methods.所以这两种写法不要混用。

4. 示例：

   ```JavaScript
   setup(){
       // 数据
       let name = '李四'
       let age = 22
       // 方法
       function sayHello(){
         alert(`我是${name},今年${age}岁了。`)
       }
   
       function test2(){
         console.log(name);
         console.log(age);
         console.log(this.sex);
         console.log(this.sayWelcome);
       }
       // 返回一个对象，常用
       return {
         name,age,sayHello,test2
       }
   }
   ```

   5. setup不能是一个async函数，因为返回值不再是return的对象，而是一个promise，模板看不到return对象中的属性。

## ref函数

> *reference-引用, implement-实现*

1.作用：定义一个响应式的数据。

2.语法：`let name = ref('李四')`

- 创建一个包含响应式数据的引用对象。
- JS中操作数据 `xxx.value`
- 模板中读取数据不需要加**value**

3.其他

1. ref处理基本数据类型采用的是 definePropety中的get,set处理的，数据劫持的方式去处理

2. ref处理对象类型的数据，求助了Vue3中的新函数- `reactive`函数。