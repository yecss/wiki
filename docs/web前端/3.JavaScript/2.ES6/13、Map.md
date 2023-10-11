## 定义

Map类型是键值对的有序列表，键和值可以是任意的数据类型

### 创建Map

```JavaScript
let map = new Map()
```

### 一些操作

```JavaScript
// 添加值
map.set('name','lisi')
map.set('age',20)
// 获取值
console.log(map.get('name'));
// 存在值
console.log(map.has('name'));
// 删除
map.delete('age')
// 直接清空
map.clear()
map.set('Hello',[1,2,3,45,2])
console.log(map.get('Hello'))
console.log(map)
```

## Map初始化

```JavaScript
let m = new Map([['a',1],['b',2]])
console.log(m);
```

## 弱引用 WeakMap