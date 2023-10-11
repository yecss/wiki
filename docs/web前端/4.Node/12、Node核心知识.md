## 学习资源

- [x] [Node入门 » 一本全面的Node.js教程 (nodebeginner.org)](https://www.nodebeginner.org/index-zh-cn.html)

[Node.js 教程_w3cschool](https://www.w3cschool.cn/nodejs/nodejs-tutorial.html)

[Express/Node 入门 - 学习 Web 开发 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/Introduction)

[Node.js REPL(交互式解释器) | 菜鸟教程 (runoob.com)](https://www.runoob.com/nodejs/nodejs-repl.html)

## Node中的js和浏览器中的js

浏览器的js由ECMAScript和Web API组成

node的js由ECMAScript和Node API组成



NodeJS中的顶级对象是global，而JavaScript中的顶级对象是window

globalThis(ES2020)指向global



> Node.js 中不能使用BOM和DOM中的API，可以使用console和定时器的API。

## 作用域

1. 模块作用域
2. 全局作用域
3. 函数作用域
4. 块级作用域



## 重要知识点

- 阻塞和非阻塞
- 基于事件驱动的回调

## 如何进行模块化

我们可以分成 `server` `router` `app`

流程：创建一个函数

将这个函数导出，在主程序当中引入并使用

```javascript
// server.js
function start(route, handle) {
	xxxx
}

exports.start = start
```

```javascript
//app.js
/* 导入服务器模块 */
const server = require('./server');
const router = require('./router');
/* 启动服务 */
server.start(/* 启动服务 */
server.start(router.route,handle))
```

