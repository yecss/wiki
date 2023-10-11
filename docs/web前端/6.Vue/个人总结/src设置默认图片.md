vue img图片 404时候 src显示默认图片


data中写  
```vue
defaultImg:'this.src="' + require("../../../../public/images/NoPic1.gif") + '"',  
```
html：  
```vue
<img :onerror="defaultImg" :src="magazineDataDeal.COVERUrl" />
```
