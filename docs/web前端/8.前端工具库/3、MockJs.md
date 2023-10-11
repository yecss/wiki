官方网站：http://mockjs.com/

## 安装

```Bash
npm install mockjs
```

## 使用示例

```JavaScript
// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    // 也可以固定获取10个元素
    'list|1-10': [
        {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            // Mock.Random 的方法在数据模板中称为『占位符』，书写格式为 @占位符(参数 [, 参数]) 。
            // @cname 表示获取一个中文姓名
            name: '@cname',
            'age|1-100': 1,
            email: '@email',
            address: '@county(true)',
        },
    ],
})

console.log(data)
```

## 随机生成10个用户信息

```C
let Mock = require('mockjs')
let data = Mock.mock({
  "code":200,
  "message":"success",
  "user|10":[
    {
      "id|+1":1,
      "name":"@cname",
      "age|1-100":1,
      "gender|1":true
    }
  ]
})

console.log(JSON.stringify(data))
```