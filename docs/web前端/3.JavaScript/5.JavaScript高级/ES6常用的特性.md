## map()


数组的 map 方法，对原数组中的每一个元素进行加工，返回一个新的数组。

```JavaScript
const arr1 = [1,2,3]
const arr2 = arr1.map((x)=>x+1)
console.log(arr1)  // [1,2,3]
console.log(arr2)  // [2,3,4]
```

## filter()


数组的 filter 方法，对原数组的每一个元素进行筛选，返回符合条件的元素。

```JavaScript
const arr1 = [1,2,3,4]
const arr2 = arr1.filter((item,index,arr)=>{
    return item%2 == 0
})
console.log(arr1)  // [1,2,3,4]
console.log(arr2)  // [2,4]
```

## reduce()


数组的 reduce 方法，对数组的每一个元素进行加工，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

```JavaScript
// 该方法会执行的次数是数组的长度 - 1 次，因为他是从数值索引为1开始的。第一次执行会将数组的第0项当场第一次执行的previousV
// previousV 函数上一次执行的结果
// currentV 当前的元素的值
// index 当前的索引
// arr 原数组
const arr1 = [1,2,3,4]
const arr2 = arr1.reduce((previousV,currentV,index,arr)=>{
    return previousV+currentV
})
console.log(arr1)  // [1,2,3,4]
console.log(arr2)  // 10
```

 ## 解构赋值


```JavaScript
// 1.1 数组的解构
let arr = [1, 2, 3]
let [a, b, c] = arr
console.log(a)

// 1.2 对象的解构
let p = {
  username: 'jerry',
  age: 22,
}
let { username } = p
console.log(username)
```

 ## 字符串扩展


```JavaScript
// 2.1 字符串开始，结束，包含
let str = 'Hello,World!'
console.log(str.startsWith('Hello'))
console.log(str.endsWith('Hello'))
console.log(str.includes('World'))
```