

## 动画

动画和过渡不同的是不需要有什么事件去触发，可以自动触发。

设置动画效果，必须先设置关键帧。

**关键帧** 设置了动画执行的每一个步骤。

```css
@keyframes 动画名{
    
}
```

### 1、设置关键帧

```css
@keyframes move{
    /* from 开始的位置, from也可以使用 100% 表示 */
    from{
        margin-left: 0;
    }
    /* to 结束的位置, to也可以用 0% 表示 */
    to{
        margin-left: 300px;
    }
}
```

### 2、应用关键帧

```css
/* 要对当前元素生效的关键帧的名字 */
animation-name: move;

/* 设置动画的时间 */
animation-duration: 3s;

/* 设置动画的延时 */
animation-delay: .5s;

/* 设置动画的时序函数 */
animation-timing-function: ease-in;

/* 
动画执行的次数 
可选值：
数字(次数),
infinite(无限执行) 
*/
animation-iteration-count: 2;

/* 
动画执行的方向 
默认值：
normal(from -> to),
reverse(to -> from),
alternate(from -> to, 重复执行时，反向执行),
alternate-reverse(与上面相反)
*/
animation-direction: alternate;

/* 
设置动画的执行状态 
可选值：
    running：正常播放
    paused：暂停播放
*/
animation-play-state: paused;

/* 动画的填充模式 
可选值：
none：默认值，动画执行完毕，元素回到原来的位置
forwards： 动画结束后会停止在终点
backwards：当动画处于延时，就会应用第一个关键帧中设置的值。
both：结合了以上两者的属性。
*/
animation-fill-mode: both;
```

##  简写规则

```css
animation: move 1s 2 both alternate;
```

