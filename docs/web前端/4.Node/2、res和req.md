## Get请求

![image-20221222215118091](images/image-20221222215118091.png)

## Post请求

![image-20221222215202485](images/image-20221222215202485.png)

## 概览

![image-20221222213643138](images/image-20221222213643138.png)

```JavaScript
/* 
  require的三级：系统自带模块，npm安装的模块，自定义的模块
*/
const http = require('http');
const server = http.createServer(()=>{
  console.log('已经监听到')
})
server.listen(3000) //3000端口的http请求已经被监听
```

## 总结

![image-20221223193039694](images/image-20221223193039694.png)
