## webstorage

webSotoage存储的内容大小一般是5MB左右

## 注意

存储的值都是**字符串**，**字符串**

## 二者相同点

sessionStorage和localStorage所拥有的API都一样

不一样的是sessionStorage在浏览器关闭后数据就清除了

```html
<body>
    <h3>本地存储</h3>
    <button onclick="saveData()">保存按钮</button>
    <br>
    <br>
    <button onclick="readData()">读取按钮</button>
    <br>
    <br>
    <button onclick="deleteData()">删除按钮</button>
    <br>
    <br>
    <button onclick="clearAll()">清除所有</button>
    <script>
        let p = { name: "张三", age: 18 }
        function saveData() {
            // 存储数据 键和值都是字符串
            localStorage.setItem("name", "lisi")
            localStorage.setItem("obj", JSON.stringify(p))
        }
        function readData() {
            // 读取数据
            let p = localStorage.getItem("obj")
            console.log(JSON.parse(p));
            console.log(localStorage.getItem("name"));
        }
        function deleteData() {
            // 删除数据
            localStorage.removeItem("name")
        }
        function clearAll(){
            // 清空
            localStorage.clear()
        }
    </script>
</body>
```

