## Vue中常用的ajax库

### axios

通用的ajax请求库，官方推荐，使用广泛

### vue-resource

vue插件库，vue1.x使用广泛，官方已不再维护。

使用方法和axios类似。

```JavaScript
methods:{
  searchUsers(){
    // 请求前更新List的数据
    this.$bus.$emit("updateList",{isFirst:false,isLoading:true,errMsg:'',users:[]})
    this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
      response => {
        // 请求成功后更新List的数据
        this.$bus.$emit("updateList",{isLoading:false,errMsg:'',users:response.data.items})
      },
      error => {
        // 请求失败后更新List的数据
        this.$bus.$emit("updateList",{isLoading:false,errMsg:error.message,users:[]})
      }
    )
  }
}
```

