# node模块之nodemon

## 简介

一个热启动模块，当我们修改文件时，可以自动重启进程。

## 安装

```cpp
npm install -g nodemon
//或
npm install --save-dev nodemon
```

## 使用

```cpp
nodemon app.js // 启动node服务
```

### 无法使用时

输入Set-ExecutionPolicy -Scope CurrentUser运行即可，之后输入RemoteSigned回车运行即可，再次执行nodemon，发现成功了



