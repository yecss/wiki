## splice - 拼接

splice(), 中文意思为拼接,  此方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。

可以实现对数组的 增删改 操作

```JavaScript
Array.splice(start,deleteCount,newValue)
let arr1 = [1, 2, 3, 4]
arr1.splice(1, 0, 'feb')
// 输出：[ 1, 'feb', 2, 3, 4 ]
```

## slice - 切片

slice(), 中文意思是切片, 此方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。

```JavaScript
Array.slice(start,end)
let arr1 = [1, 2, 3, 4]
let arr2 = arr1.slice(0, 2)
console.log(arr2)
// 输出：[ 1, 2 ]
```

## split - 分裂

split(), 中文意思是分裂, 此方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。(不改变原字符串)

```JavaScript
String.split(separator,[count]) 
//separator：以字符串中的什么内容进行分裂，count：限定返回的数量
let s = 'Hello,World!'
let a = s.split('', [6])
console.log(a)
// 输出：[ 'H', 'e', 'l', 'l', 'o' ]
let b = s.split(',')
console.log(b)
// 输出：[ 'Hello', 'World!' ]
```