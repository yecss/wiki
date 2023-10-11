## 1、安装

全局安装

```C
npm install -g json-server
```

在新版中，我们不需要提前创建好 `db.json` 这个文件。

```Bash
json-server db.json
# 自动创建 db.json 并开启服务器。
```

json-server 把 db.json 根节点的每一个 key，当作了一个 router。我们可以根据这个规则来编写测试数据。

配置启动脚本

在当前文件夹下，新建一个 package.josn，在其中加入以下代码。

```Bash
{"scripts": {"mock": "json-server --watch db.json --port 3004"}}
```

## 2、启动服务

```Bash
json-server --watch db.json

# 指定端口启动
json-server --watch db.json --port 3004#快捷启动npm run mock
```

## 3、数据操作

我们自己折腾一下 db.json。加入以下内容

```JSON
"fruits": [
        {
            "id": 1,
            "name": "苹果",
            "price": 1.28
        },
        {
            "id": 2,
            "name": "橘子",
            "price": 3.88
        },
        {
            "id": 3,
            "name": "西瓜",
            "price": 1.98
        }
    ],
```

### **get请求**

获取所有数据 - `http://localhost:3000/fruits`

获取id为1的数据（对象）- `http://localhost:3004/fruits/1`

获取id为1的数据（数组）- `http://localhost:3000/fruits?id=1`

获取name为苹果的数组 - [`http://localhost:3000/fruits?name=%E8%8B%B9%E6%9E%9C`](http://localhost:3000/fruits?name=苹果)

多个条件 - `http://localhost:3004/fruits?name=橘子&price=3.88`

#### **分页请求**

`http://localhost:3000/fruits?_page=1&_limit=5`

_page表示当前请求所在的页面

_limit表示限定每页有多少个元素

#### **排序请求**

`http://localhost:3000/fruits?_sort=id&_order=asc`

_sort表示以什么进行排序

_order表示倒序还是正序（asc、desc)

#### **取局部数据**

`http://localhost:3004/fruits?_start=2&_limit=4`

#### **全文搜索**

`http://localhost:3004/fruits?q=3`

?q=关键词

### **post请求**

增加数据

body参数

```C
{
    "name":"红宝石葡萄",
    "price":9.22
}
```

### **patch局部更新数据**

`http://localhost:3000/fruits/1`

参数形式：x-form-www-urlencoded

### **put全局更新数据**

形式如上

### **delete删除数据**

`http://localhost:3000/fruits/14`

## **接口的规范**

一般来说响应接口会包含以下三个部分

- code

- message

- data 