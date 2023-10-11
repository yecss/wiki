## rest函数

> 获取函数的实参。rest参数必须放到最后。

```javascript
function data(a, b, ...args){
    console.log(a);
    console.log(b);
    console.log(args)
}

data(1,2,3,4,5,6)
```

