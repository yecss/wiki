```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/2.6.14/vue.js" type="application/javascript"></script>
    <title>Document</title>
    <style>
        .basic{
            color: rgb(34, 97, 221);
            font-size: 20px;
        }
        .happy{
            height: 200px;
            width: 260px;
            border: 10px solid rgb(208, 238, 11);
        }
        .normal{
            height: 200px;
            width: 260px;
            border: 10px solid rgb(2, 29, 10);
        }
        .sad{
            height: 200px;
            width: 260px;
            border: 10px solid rgb(63, 216, 111);
        }
        .s1{
            font-size: 25px;
        }
        .s2{
            width: 260px;
            height: 200px;
            color: red;
        }
        .s3{
            border: 10px solid rgb(136, 10, 219);
        }
    </style>
</head>
<body>
    <div id="root">
        <!-- 绑定class样式，字符串写法，适用于样式的类名不确定，需要动态指定 -->
        <!-- 冒号：== v-bind绑定 -->
        <div class="basic" :class="mood" @click="changeMood">{{name}}</div>
        <br>
        <br>
        <!-- 绑定class样式，数组写法,适用于要绑定的样式个数不确定，名字也不确定 -->
        <div :class="moodArr">{{name}} </div>
        <br>
        <br>
        <!-- 绑定class样式，数组写法,适用于要绑定的样式个数确定，名字也确定,但不确定用不用 -->
        <div :class="moodObj">{{name}} </div>

        <!-- 绑定style样式 :style-->
        <br>
        <br>
        <div class="basic" :style="styleObj">{{name}}</div>
    </div>
    <script>
        new Vue({
            el:'#root',
            data:{
                name:'尚硅谷',
                mood:'normal',
                moodArr:['s1','s2','s3'],
                moodObj:{
                    s1:true,
                    s2:false
                },
                styleObj:{
                    fontSize:'40px'
                    //绑定style，的对象的键需要是样式对象
                }
            },
            methods: {
                changeMood(){
                    // this.mood = 'happy'
                    const arr = ['happy','sad','normal']
                    this.mood = arr[Math.floor(Math.random()*3)]
                }
            }
        })
    </script>
</body>
</html>
```

