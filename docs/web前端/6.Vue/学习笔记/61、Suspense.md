## Suspense

作用：等待异步组件时，渲染一些额外的内容。

1.异步引入

```JavaScript
import { defineAsyncComponent } from '@vue/runtime-core'
const Demo = defineAsyncComponent(()=>import('./components/Demo.vue')) 
```

2.使用Suspense标签和插槽

```html
<Suspense>
  <template v-slot:default>
    <Demo></Demo>
  </template>
  <template v-slot:fallback>
    <h3>加载中</h3>
  </template>
</Suspense>
```

