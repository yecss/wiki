## 连接数据库

`db.js`

```JavaScript
//引入mongoose
const mongoose = require('mongoose')
//定义字符串常量
const db_url = 'mongodb://localhost:27017/book'
//1.连接数据库
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
//2.连接成功
mongoose.connection.on('connected', function () {
  console.log('连接成功：', db_url)
})
//3.连接失败
mongoose.connection.on('error', function (err) {
  console.log('连接错误：', err)
})
//4.断开连接
mongoose.connection.on('disconnection', function () {
  console.log('断开连接')
})

module.exports = mongoose
```

## 定义Model

`userModel.js`

```javascript
// 数据模型(规范数据格式)
const mongoose = require('./db')

// 定义 User Schema(数据规范)
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true, // 必需
      unique: true, // 唯一
    },
    password: String,
    age: Number,
    city: String,
    gender: {
      type: Number,
      dafault: 0, //0-保密,1-男,2-女
    },
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

// 定义 User Model
const User = mongoose.model('user', UserSchema)

// 类
class dataBaseHandle {
  // 构造函数,会在new的时候调用
  constructor() {}
  //添加
  async add(data) {
    try {
      return await User.create(data)
    } catch (err) {
      throw new Error(err)
    }
  }
  // 删除
  async deleteOne(data) {
    try {
      return await User.deleteOne(data)
    } catch (error) {
      throw new Error(error)
    }
  }
  // 修改
  async updateOne(oldvalue, newvalue,) {
    try {
      return await User.updateOne(oldvalue, newvalue)
    } catch (error) {
      throw new Error(error)
    }
  }
  // 查询
  async findOne(data) {
    try {
      return await User.findOne(data)
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = new dataBaseHandle()
```

## 测试脚本

`test.js`

```JavaScript
const dataBaseHandle = require('./userModel')

/* 创建一个异步函数，测试功能 */
async function testDBHandle() {
  
  /* 新增 */
  let result = await dataBaseHandle.add({
    username:'Mik2e',
    password:'dawd',
    age:22,
    city:'shenzhen',
    gender:1
  })

  /* 删除 */
  // let result = await dataBaseHandle.deleteOne({
  //   id: '63a9a1d571e8f4c2f9717188',
  // })

  /* 更新 */
  // let result = await dataBaseHandle.updateOne(
  //   {
  //     _id: '63a9a795b1f937caf371dec2',
  //   },
  //   {
  //     username: 'Mike2',
  //   }
  // )

  // /* 删除 */
  // let result = await dataBaseHandle.findOne({
  //   username:'Mike',
  //   password:'dawd'
  // })

  /* 输出结果 */
  console.log(result)
}

testDBHandle()
```

