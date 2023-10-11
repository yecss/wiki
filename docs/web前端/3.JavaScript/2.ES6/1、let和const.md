## let

1. 不能重复声明变量

```javascript
let star = "小星星"
let star = "大猩猩"
console.log(star)
```

2. 具有块级作用域 {}, if, else, while, for 

```javascript
{
    let girl = "周扬青"
}
console.log(girl);
```

3. 不存在变量提升

```javascript
console.log(song); //输出underfined
var song = "歌手"
```

4. 不影响作用域链,沿着作用域链向上查找。

```javascript
{
    let school = "尚硅谷"
    function fn(){
        console.log(school);
    }
    fn()
    
}
```

## const

1. 声明常量一般要大写

```javascript
const PI = 3.1415926
console.log(PI);
```

2. 声明变量时需要初始化

```javascript
const APP //错误
const APP = 666
```

3. 常量的值不能修改

```javascript
const PI = 3.1415926
PI = 666 //错误
```

4. 块级作用域

```javascript
{
    const PLAYER = "周杰伦"
}
console.log(PLAYER); // PLAYER is not defined
```

5. 对于数组和对象的元素修改，不算对常量的修改，不会报错。

因为数组和对象保存的内存地址

```javascript
const TEAM = ["周杰伦","陈奕迅","陈百强"]
TEAM.push("薛之谦") //TEAM 所指向的地址没有发生改变，所以不会报错。
console.log(TEAM);

TEAM = 222
console.log(TEAM); //TypeError: Assignment to constant variable.
```

因此，我们在声明数组和对象时，使用const是比较稳妥的。

## 练习

### 为三个box点击点击切换背景

#### 错误写法

```JavaScript
var box = document.querySelectorAll(".box")

for(var i=0;i<box.length;i++){
    // 点击事件是访问的时候就加上去了的。
    box[i].addEventListener('click',function(){
        // 下面的代码是我们点击时才会去执行。
        // 这时的 i 回去上面找，找到为3，所以点击所以的方块都是第三个box变色。
        box[i].style.background = "pink";
    })
}
// {i=3}：全局i
console.log(i)// 这时i=3，因此click事件中的i都为3,索引已经越界了
```

#### let 写法

```JavaScript
var box = document.querySelectorAll(".box")

for(let i=0;i<box.length;i++){
    // 点击事件是访问的时候就加上去了的。
    box[i].addEventListener('click',function(){
        // 下面的代码是我们点击时才会去执行。
        // 这时的 i 回去上面找，找到为3，所以点击所以的方块都是第三个box变色。
        box[i].style.background = "pink";
    })
}
//执行原理：每个i都是独立的，互不影响 {i=0};{i=1};{i=2}
```

#### this 写法

```JavaScript
var box = document.querySelectorAll(".box")

for(var i=0;i<box.length;i++){
    box[i].addEventListener('click',function(){
        this.style.background = "pink";
    })
}
console.log(i)
```

