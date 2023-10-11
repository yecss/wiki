![image-20221031150856809](images/image-20221031150856809.png)

废话不多说，直接上代码

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      hr {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .wrapper {
        width: 100vw;
        height: 500px;
        display: flex;
      }
      .left {
        width: 200px;
        height: 100%;
        background-color: coral;
      }
      .right {
        flex-grow: 1;
        height: 100%;
        background-color: blueviolet;
      }
      .wrapper-2 {
        width: 100vw;
        height: 500px;
      }
      .left-2 {
        background-color: aqua;
        width: 200px;
        height: 100%;
        float: left;
      }
      .right-2 {
        margin-left: 200px;
        background-color: darkgreen;
        height: 100%;
      }
      .wrapper-3 {
        width: 100vw;
        height: 500px;
        font-size: 0;
      }
      .left-3 {
        background-color: rgb(203, 209, 31);
        width: 200px;
        height: 100%;
        display: inline-block;
      }
      .right-3 {
        background-color: rgb(226, 30, 213);
        height: 100%;
        display: inline-block;
        width: calc(100% - 200px);
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <hr />
    <div class="wrapper-2">
      <div class="left-2"></div>
      <div class="right-2"></div>
    </div>
    <hr />
    <div class="wrapper-3">
      <div class="left-3"></div>
      <div class="right-3"></div>
    </div>
  </body>
</html>

```

