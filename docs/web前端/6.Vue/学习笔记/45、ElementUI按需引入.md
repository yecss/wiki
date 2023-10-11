## babel.config.js

```javascript
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

```

## main.js

```javascript
// 按需引入
import { Button, Row, DatePicker, Message} from 'element-ui';
Vue.use(Button)
Vue.use(Row)
Vue.use(DatePicker)

//弹窗的按需引入
Vue.prototype.$message = Message
```

