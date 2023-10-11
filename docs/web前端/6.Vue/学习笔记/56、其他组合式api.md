## shallowRef

作用：不将对象类型的数据变成响应式数据

```JavaScript
let x = ref({
    y:0
})
```

**此处的y不是响应式数据**

## shallowReactive

作用：只考虑第一层数据的响应式

```JavaScript
let person = shallowReactive({
    name:'张三',
    age:22,
    job:{
        salary:20000,
        j1:'Vue',
        j2:'React'
    }
})
```

**此处的salary不是响应式数据**

## readonly

作用：让数据不可修改（深只读）

```JavaScript
let x = readonly(ref(0))
```

## shallowReadonly

作用：只保护对象的第一层数据（浅只读）

```JavaScript
let person = shallowReadonly(reactive({
        name:'张三',
        age:22,
        job:{
            salary:20000,
            j1:'Vue',
            j2:'React'
        }
}))
```

**job里面的数据可以修改。**

## toRaw

作用：将一个由 `reactive` 生成的响应式对象转为普通对象。

```JavaScript
const p = toRaw(person)
p.age++  //此处能修改，但是模板不会更新，不是响应式的
console.log("输出最原始的person",p)
```

## markRaw

作用：标记一个对象，使其不再称为响应式对象。

```JavaScript
function addCar(){
    let car = {name:'福特'}
    person.car = markRaw(car)
}
```

应用场景：将响应式数据变成非响应式的，提高性能。

## 判断数据的类型

```JavaScript
let car = reactive({
  name:'梅赛德斯',
  price:'40w'
})
let sum = ref(0)

let car2 = readonly(car)

console.log(isRef(sum)) // true
console.log(isReactive(car)) // true
console.log(isReadonly(car2)) // true
console.log(isProxy(car)) // true
console.log(isProxy(car2)) // true
```

