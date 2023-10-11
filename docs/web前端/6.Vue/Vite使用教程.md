## Vite 使用步骤

```Bash
# yarn
yarn create vite
#npm npm init vite@latest
cd 项目名

yarn

code .
```

**自动打开**

vite 执行脚本 后加 `--open` 当我们运行时，会自动帮我打开。

## Vite 配置

### base

```JSON
base: './',
// 设置基础路径为相对路径
```

### 路径别名

```JSON
// vite.config.js

import { resolve } from 'path'

resolve: {
    alias: {
        // 配置组件路径别名
        comp: resolve(__dirname, 'src/components/'),
        // 配置静态资源别名
        '/imgRe': './src/assets/img/avatar/',
    },
},
```

### 生成环境移除console.log

```JSON
// 1.下载terser
yarn add terser

// 2.配置terser
export default defineConfig({
    ...
    plugins: [vue()],
    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
})
```

### 按需引入element plus

```JSON
# 安装这两个包
npm install -D unplugin-vue-components unplugin-auto-import
```

然后把下列代码插入到你的 `Vite` 或 `Webpack` 的配置文件中

Vite

```JSON
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

最后如果之前是使用的完整引入就删除完整引入的代码。

### mock

第一步

```Bash
yarn add vite-plugin-mockjs

yarn add mockjs
```

第二步

```JSON
// vite.config.js

import { viteMockServe } from 'vite-plugin-mock'

// 配置插件项
plugins: [
    ...
    viteMockServe({
        // default
        mockPath: 'mock',
    }),
],
```

第三步

在项目根目录新建 `mock` 文件夹，新建 `index.ts` 写入以下内容

```JSON
// index.ts
import {mock} from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
const data = mock({
    "list|10":[
        {
            "id|+1":1,
            "name":'@cname'
        }
    ]
})
export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data
      }
    },
  },
] as MockMethod[]
```

### 解决跨域问题

设置代理服务器

```JSON
// vite.config.js
server: {
        proxy: {
            // 选项写法
            '/api': {
                target: 'https://saucenao.com/search.php?db=999&output_type=2&url=https://pica.zhimg.com/v2-178387c7e8e907910d715e890bfd7519_1440w.jpg?source=172ae18b&api_key=33d4bee5c19583cd3756ee47f2ebef8edd5bef7e',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
```

在请求时将请求地址更改为 `/api`

### env环境变量的设置

> env环境变量使得在开发环境和生成环境的数据不一样。

1、首先在项目根目录新建 `.env.development` 和 `.env.production` 这两个配置文件，在里面新建好要设置的变量，如

```JSON
VITE_BASE_API=/api/get
```

2、然后使用：

```JSON
import.meta.env.VITE_BASE_API
```

### CDN的配置

1、下载

```Bash
yarn add vite-plugin-cdn-import -D
```

2、配置

```JSON
// vite.config.js

import { Plugin as importToCDN } from 'vite-plugin-cdn-import'

plugins: [
    .....
    importToCDN({
        modules: [
            {
                name: 'vue',
                var: 'Vue',
                path: 'https://unpkg.com/vue@next',
            },
            {
                name: 'element-plus',
                var: 'ElementPlus',
                path: 'https://unpkg.com/element-plus',
                css: 'https://unpkg.com/element-plus/dist/index.css',
            },
        ],
    }),
],
```

3、使用 ElementUI 组件

```JavaScript
// main.js 
import ElementPlus from 'element-plus' 
createApp(App).use(ElementPlus).mount('#app')
```



### gzip压缩

1、下载插件

```Bash
yarn add vite-plugin-compression -D
```

2、使用

```JSON
//vite.config.js

import viteCompression from 'vite-plugin-compression';

export default () => {
  return {
    plugins: [viteCompression()],
  };
};
```

### 图片压缩

1、下载插件

```Bash
yarn add vite-plugin-imagemin -D
```

> 使用 yarn 下载时，下载不下来，就在 package.json 中配置以下代码。
>
> 使用 npm 的话，下载不下来可以换成 cnpm

```JSON
"resolutions": {
    "bin-wrapper": "npm:bin-wrapper-china"
},
```

2、使用

```JSON
// vite.config.js

import viteImagemin from 'vite-plugin-imagemin'

export default () => {
  return {
    plugins: [
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
    ],
  }
}
```