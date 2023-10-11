## 常用的命令

`db` - 查看当前的数据库

`show dbs` - 查看所有的数据库

`show collections` - 查看当前数据库所有集合



## 创建数据库

> MongoDB的默认数据库是test。 如果没有创建任何数据库，那么集合将被保存在测试数据库。

MongoDb 创建和切换数据库的语法格式为：

```
use database_name
```

如果数据库不存在，则创建数据库，否则切换到指定数据库。

```markdown
use chenyurong
switched to db chenyurong
> db
chenyurong
> show dbs
admin  0.000GB
local  0.000GB
```

上面创建了名为chenyurong的数据库，但是我们使用`show dbs`命令时并没有看到该数据库存在，这是因为该数据库中还没有数据。要显示它，我们需要向 chenyurong 数据库插入一些数据。关于插入数据操作，将在下面提及。

## Nodejs连接Mongodb

```
npm install mongoose
```

```javascript
//引入mongoose
const mongoose = require('mongoose');
//定义字符串常量
const db_url = "mongodb://localhost:27017/zxh"
//1.连接数据库
mongoose.connect(db_url,{useNewUrlParser:true,useUnifiedTopology:true}) 
//2.连接成功
mongoose.connection.on('connected',function(){
    console.log('连接成功：',db_url);
})
//3.连接失败
mongoose.connection.on('error',function(err){
    console.log('连接错误：',err);
})
//4.断开连接
mongoose.connection.on('disconnection',function(){
    console.log('断开连接');
})
module.exports = mongoose;
```

[Nodejs连接mongoDB数据库（实现增删改查）_去宇宙给你摘星的博客-CSDN博客_nodejs连接mongodb](https://blog.csdn.net/weixin_50828895/article/details/122603201)

## MongoDb创建表

Mongodb 中并没有直接创建表的命令，表的数据结构在你往表插入数据时确定。因此在 Mongodb 中，你创建完数据库之后就可以直接往表中插入数据，表名在插入数据时指定。

## 插入数据

## 查询数据

## 更新数据

## 删除数据