# 项目文件命名

## 命名规范

市面上常用的命名规范：

-   `camelCase`（小驼峰式命名法 —— 首字母小写）
    
-   `PascalCase`（大驼峰式命名法 —— 首字母大写）
    
-   `kebab-case`（短横线连接式）
    
-   `Snake`（下划线连接式）

## 项目文件命名

全小写，中间用 - 隔开

如：`my-project-name`



## 目录名

**参照项目命名规则，有复数结构时，要采用复数命名法**。

例：docs、assets、components、directives、mixins、utils、views。

```JavaScript
my-project-name/
|- BuildScript    // 流水线部署文件目录
|- docs           // 项目的细化文档目录（可选）
|- nginx          // 部署在容器上前端项目 nginx 代理文件目录
|- node_modules   // 下载的依赖包
|- public         // 静态页面目录
    |- index.html // 项目入口
|- src            // 源码目录
    |- api        // http 请求目录
    |- assets     // 静态资源目录，这里的资源会被wabpack构建
        |- icon   // icon 存放目录
        |- img    // 图片存放目录
        |- js     // 公共 js 文件目录
        |- scss   // 公共样式 scss 存放目录
            |- frame.scss   // 入口文件
            |- global.scss  // 公共样式
            |- reset.scss   // 重置样式
    |- components     // 组件
    |- plugins        // 插件
    |- router         // 路由
    |- routes         // 详细的路由拆分目录（可选）
        |- index.js
    |- store          // 全局状态管理
    |- utils          // 工具存放目录
        |- request.js // 公共请求工具
    |- views          // 页面存放目录
    |- App.vue        // 根组件
    |- main.js        // 入口文件
    |- tests          // 测试用例
    |- .browserslistrc// 浏览器兼容配置文件
    |- .editorconfig  // 编辑器配置文件
    |- .eslintignore  // eslint 忽略规则
    |- .eslintrc.js   // eslint 规则
    |- .gitignore     // git 忽略规则
    |- babel.config.js // babel 规则
    |- Dockerfile // Docker 部署文件
    |- jest.config.js
    |- package-lock.json
    |- package.json // 依赖
    |- README.md // 项目 README
    |- vue.config.js // webpack 配置
```

## 图像文件命名，html文件夹命名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以**下划线**分隔。

如：

tree.jpg, animal_cat.png

index.html, buy_card.html

  

## CSS 文件名， JavaScript 文件名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以**短横线**分隔。

```JavaScript
|- normalize.less
|- base.less
|- date-picker.scss
|- input-number.scss

|- app.js
|- data-util.js
```

  

上述规则可以快速记忆为“静态文件下划线，编译文件短横线”。

  

## Vue 组件命名

### 单文件组件名

文件扩展名为 `.vue` 的 `single-file components` (单文件组件)。单文件组件名应该始终是**单词大写开头** (PascalCase)。

```JavaScript
components/
|- MyComponent.vue
```

### 单例组件名

**只拥有单个活跃实例的组件应该以** **`The`** **前缀命名，以示其唯一性。**

这不意味着组件只可用于一个单页面，而是_每个页面_只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，_只是目前_在每个页面里只使用一次。

比如，头部和侧边栏组件几乎在每个页面都会使用，不接受 prop，该组件是专门为该应用所定制的。

```JavaScript
components/
|- TheHeading.vue
|- TheSidebar.vue
```

### 基础组件名

> 基础组件：不包含业务，独立、具体功能的基础组件，比如**日期选择器**、**模态框**等。这类组件作为项目的基础控件，会被大量使用，因此组件的 API 进行过高强度的抽象，可以通过不同配置实现不同的功能。

应用特定样式和约定的基础组件(也就是展示类的、无逻辑的或无状态、不掺杂业务逻辑的组件) 应该全部以一个特定的前缀开头 —— Base。**基础组件在一个页面内可使用多次，在不同页面内也可复用，是高可复用组件。**

```JavaScript
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
```

### 业务组件

> 业务组件：它不像基础组件只包含某个功能，而是在业务中被多个页面复用的（具有可复用性），它与基础组件的区别是，业务组件只在当前项目中会用到，不具有通用性，而且会包含一些业务，比如数据请求；而基础组件不含业务，在任何项目中都可以使用，功能单一，比如一个具有数据校验功能的输入框。

**掺杂了复杂业务的组件（拥有自身** **`data`****、****`prop`** **的相关处理）即业务组件**应该以 `Custom` 前缀命名。业务组件在一个页面内比如：某个页面内有一个卡片列表，而样式和逻辑跟业务紧密相关的卡片就是业务组件。

```JavaScript
components/
|- CustomCard.vue
```

### 紧密耦合的组件名

**和父组件紧密耦合的子组件应该以父组件名作为前缀命名。** 因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

```JavaScript
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
```

### 组件中的单词顺序

**组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。** 因为编辑器通常会按字母顺序组织文件，所以现在组件之间的重要关系一目了然。如下组件主要是用于搜索和设置功能。

```JavaScript
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```

# 代码参数命名

## name

**组件名应该始终是多个单词，应该始终是 PascalCase 的。** 根组件 App 以及 `<transition>`、`<component>` 之类的 Vue 内置组件除外。这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。

```JavaScript
export default {
  name: 'ToDoList',
  // ...
}
```

## prop

**在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case**。我们单纯的遵循每个语言的约定，在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。

```HTML
<WelcomeMessage greeting-text="hi"/>
```

```JavaScript
export default {
  name: 'MyComponent',
  // ...
  props: {
    greetingText: {
      type: String,
      required: true,
      validator: function (value) {
        return ['syncing', 'synced',].indexOf(value) !== -1
      }
    }
  }
}
```

## router

**Vue Router Path 命名采用 kebab-case 格式。** 用 Snake（如：`/user_info`）或 camelCase（如：`/userInfo`)的单词会被当成一个单词，搜索引擎无法区分语义。

```JavaScript
// bad
{
  path: '/user_info', // user_info 当成一个单词
  name: 'UserInfo',
  component: UserInfo,
  meta: {
    title: ' - 用户',
    desc: ''
  }
},

// good
{
  path: '/user-info', // 能解析成 user info
  name: 'UserInfo',
  component: UserInfo,
  meta: {
    title: ' - 用户',
    desc: ''
  }
},
```

## 模板中组件

对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 PascalCase 的，但是在 DOM 模板中总是 kebab-case 的。

```JavaScript
<!-- 在单文件组件和字符串模板中 --> 
<MyComponent/>

<!-- 在 DOM 模板中 --> 
<my-component></my-component>
```

## 自闭合组件

**在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。**

```HTML
<!-- 在单文件组件和字符串模板中 -->
<MyComponent/><!-- 在所有地方 -->
<my-component></my-component>
```

## 变量

-   命名方法：camelCase
    
-   命名规范：类型 + 对象描述或属性的方式
    

```JavaScript
// bad
var getTitle = "LoginTable"// good
let tableTitle = "LoginTable"
let mySchool = "我的学校"
```

## 常量

-   命名方法：全部大写下划线分割
    
-   命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词
    

## 方法

-   命名方法：camelCase
    
-   命名规范：统一使用动词或者动词 + 名词形式
    

```JavaScript
// 1、普通情况下，使用动词 + 名词形式
// bad
go、nextPage、show、open、login

// good
jumpPage、openCarInfoDialog

// 2、请求数据方法，以 data 结尾
// bad
takeData、confirmData、getList、postForm

// good
getListData、postFormData

// 3、单个动词的情况
init、refresh
```

动词

含义

返回值

can

判断是否可执行某个动作 (权 )

函数返回一个布尔值。true：可执行；false：不可执行；

has

判断是否含有某个值

函数返回一个布尔值。true：含有此值；false：不含有此值；

is

判断是否为某个值

函数返回一个布尔值。true：为某个值；false：不为某个值；

get

获取某个值

函数返回一个非布尔值

set

设置某个值

无返回值、返回是否设置成功或者返回链式对象

## 自定义事件

**自定义事件应始终使用 kebab-case 的事件名。**

不同于组件和 prop，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。

```JavaScript
this.$emit('my-event')
复制代码
```

```JavaScript
<MyComponent @my-event="handleDoSomething" />
复制代码
```

不同于组件和 prop，事件名不会被用作一个 JavaScript 变量名或 property 名，所以就没有理由使用 camelCase 或 PascalCase 了。并且 `v-on` 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以 `v-on:myEvent` 将会变成 `v-on:myevent`——导致 `myEvent` 不可能被监听到。

## methods 事件方法


-   命名方法：camelCase
    
-   命名规范：handle + 名称（可选）+ 动词
    

```JavaScript
<template>
  <div
    @click.native.stop="handleItemClick()"
    @mouseenter.native.stop="handleItemHover()"></div>
</template>

<script>export default {
  methods: {
    handleItemClick () {
      //...
    },
    handleItemHover () {
      //...
    }
  }
}
</script>
```

# 代码规范

## Vue

-   **组件的** **`data`** **必须是一个函数。**
    
-   **Prop 定义应该尽量详细。**
    
-   **应该把复杂计算属性分割为尽可能多的更简单的属性。** 小的、专注的计算属性减少了信息使用时的假设性限制，所以需求变更时也用不着那么多重构了。
    
-   为 `v-for` 设置键值
    
-   **永远不要把** **`v-if`** **和** **`v-for`** **同时用在同一个元素上。**
    
-   **多个 attribute 的元素应该分多行撰写，每个 attribute 一行。**
    
-   **组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。**
    

  

demo:

```JavaScript
<template>
  <div id="my-component">
    <DemoComponent />
  </div>
</template>

<script>
import DemoComponent from '../components/DemoComponent'

export default {
  name: 'MyComponent',
  components: {
    DemoComponent
  },
  mixins: [],
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {}
  created () {},
  mounted () {},
  destroyed () {},
  methods: {},
}
</script>

<style lang="scss" scoped>
#my-component {
}
</style>
```

## 指令缩写

-   **用** **`:`** **表示** **`v-bind:`**
    
-   **用** **`@`** **表示** **`v-on:`**
    
-   **用** **`#`** **表示** **`v-slot:`**