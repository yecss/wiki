## commonjs的特点

- 动态导入，运行时执行
- 导入的是数据的拷贝，可以对其进行修改

导出：

```javascript
module.exports = {
    sayHello
}
```

导入:

```javascript
require
```



## ES6的特点

- 静态导入，编译时执行
- 导入的是源数据的引用，是只读的，不能对其进行修改

导出：

```javascript
export default {
	name:'lisi'
}
//---
export function add(){}
export function mod(){}
```

导入：

```javascript
import xxx from ""
//---
import {add,mod} from ""
```

