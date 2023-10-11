![image-20221031151015193](images/image-20221031151015193.png)

废话不多说，直接上代码

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta>
  <title>全局居中的实现方法</title>
  <style>
    *{
      margin: 0;
      padding: 0;
    }
    .box{
      width: 800px;
      height: 900px;
      background-color: bisque;
      position: relative;
    }
    .box-s{
      position: absolute;
      width: 100px;
      height: 100px;
      background-color: brown;
      top: 400px;
      left: 350px;
    }
    .box-d{
      width: 100px;
      height: 100px;
      background-color: blue;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    .box-ff{
      background-color: rgb(48, 222, 54);
      width: 800px;
      height: 800px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box-f{
      width: 200px;
      height: 200px;
      background-color: brown;
    }
  </style>
</head>
<body>
  <div class="box">
    <div class="box-s">top,left</div>
  </div>
  <hr>
  <div class="box">
    <div class="box-d">transform</div>
  </div>
  <hr>
  <div class="box-ff">
    <div class="box-f">flex</div>
  </div>
</body>
</html>
```

