## 数组

使用数字作为索引来操作元素，索引从0开始，数组中的元素可以说任意属性的值，也可以是对象

### 用构造函数创建数组

`var arr = new Array();`

### 用字面量创建数组

```javascript
var arr = ["111",222];
arr[0] = "111"
arr[1] = 222
```

### 获取数组的长度

```javascript
arr.lenght //属性
```

### 打印数组

```javascript
console.log(arr)
```

## 数组的方法

#### `数组名.push()`

向数组添加一个或多个元素到数组的末尾

```javascript
arr.push("小米",222)
```

#### `数组名.pop()`

删除数组的最后一个元素，并将删除的元素返回

```javascript
del = arr.pop()
console.log("刚刚删除的元素是"+del)
```

#### `数组名.unshitf()`

在数组的开头添加一个或多个元素

```JavaScript
arr.unshift("123",222)
```

#### `数组名.shitf()`

删除数组的第一个元素并返回

```javascript
del = arr.shift()
```

#### `数组名.forEach()`

```JavaScript
arr.forEach(function(value,index,obj){
	console.log(value)
})
```

这个方法需要这个函数作为参数，像这种函数，由我们创建但是不是由我们调用，称为回调函数。

数组中有几个元素，函数就会执行几次。每次执行时，浏览器会将遍历到的元素以实参的形式传递进来。我们可以定义形参，来读取内容。

浏览器会在回调函数中传递三个参数。

1. 第一个参数就是正在遍历的元素
2. 第二个参数是当前遍历元素的索引值
3. 第三个参数是正在遍历的数组

#### `数组名.slice(索引开始,索引结束)`

开始-结束，结束参数可省略，-1参数为倒数一个值

```javascript
var arr = [111,222,333,444]
console.log(arr.slice(0,2))
```

#### `数组名.splice(索引开始,删除的数量,传递新元素)`

删除元素；替换元素，增加元素

```JavaScript
var arr = [111,222,333,444]
// 在指定位置插入元素
//arr.splice(1,"新增1","新增2")

// 删除元素
//arr.splice(0,2)

//替换元素
arr.splice(1,1,555)
```

也可以加入第三个参数，第三个参数的值，将会添加到开始索引值的前面

#### `数组名.concat(数组名)`

连接一个或多个数组，并返回一个新的数组

#### `数组名.join()`

将一个数组转换成一个字符串，并返回一个新的数组

```JavaScript
console.log(arr2.join("-"))//参数是连接符，空值则是""
```

#### `数组名.reverse()`

反转数组，会改变原数组

#### `数组名.sort()`

对数组中的元素进行排序，会改变原数组，对于纯数字排序可能会出现错误

## 遍历数组

```JavaScript
//方法一
var arr = [111,222,333,4232,3542,423,4332]
for(var arrs in arr){
	console.log(arrs)
}
//方法二
for(var i=0;i<arr.length;i++){
	console.log(arr[i])
}

//方法三
var arr = [{name:'lihua',age:22},{name:'lisa',age:16},{name:'susa',age:14}]
arr.forEach(function(x){
	console.log(x)
})
```

## 数组去重算法

```javascript
var arr = [222,111,222,333,444,1212,111,222]
var newArr = []
for (var i=0;i<arr.length;i++) {
	for(var j=arr.length;j!=i&&j>0;j--){
		if(arr[i]==arr[j]){
			arr.splice(j,1)
		}
	}
}
//重点第二次循环的j--，以及条件判断的&&，
//不能用j--,因为删除前面的元素之后，后面索引会发生变化
```

