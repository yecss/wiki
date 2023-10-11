## 关于函数写法

> 基于的版本："mongoose": "^7.0.3",
>
> 注意：高版本的mongoose的方法不再支持回调函数的写法，回调函数的使用在 Mongoose 7.x 中已被弃用。

## model

由Schema构造生成的模型，除了Schema定义的数据库骨架以外,还具有数据库操作的行为，类似于管理数据库属性、行为的类

## schema

一种以文件形式存储的数据库模型骨架，无法直接通往数据库端，也就是说它不具备对数据库的操作能力.可以说是数据属性模型(传统意义的表结构)，又或着是“集合”的模型骨架

## 自定义静态方法和自定义实例方法的区别

> 自定义静态方法(模型上使用)，定义静态方法时，可以使用 this 关键字来访问模型

```javascript
studentSchema.statics.findByName = function (name) {
  this.findOne({ name })
    .then((res) => console.log(res))
    .catch((error) => console.error(error))
}
```



> 自定义实例方法(文档实例上使用)，在定义实例方法时，可以使用 this 关键字来访问该文档的属性和方法

```javascript
studentSchema.methods.getReverseName = function () {
  return `${this.name.split('').reverse().join('')}`
}
```

