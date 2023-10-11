## 简介

npm，全名 node package manger，是node的开放式模块登记和管理系统，是node.js包的标准发布平台。

## npm如何使用

npm 在按照 Node.js 时会连带被安装。但有可能不是最新版本，需要 `npm install npm@latest -g` 升级到最新版本。

基本命令：

```bash
# 查看 npm 命令列表
$ npm help

# 查看各个命令的简单用法
$ npm -l

# 查看 npm 的版本
$ npm -v

# 查看 npm 的配置
$ npm config list -l
```

## npm init

npm init 初始化 package.json 文件

用来初始化生成`package.json`文件。在这个过程中会向用户提问一系列问题，如果你觉得不用修改默认配置，一路回车就可以了。

如果使用了`-f`（代表`force`）、`-y`（代表`yes`），则跳过提问阶段，直接生成一个新的`package.json`文件。

## npm set

npm set 设置环境变量

```bash
  $ npm set init-author-name 'Your name'
  $ npm set init-author-email 'Your email'
  $ npm set init-author-url 'http://yourdomain.com'
  $ npm set init-license 'MIT'
```

上面命令等于为`npm init`设置了默认值，以后执行`npm init`的时候，`package.json`的作者姓名、邮件、主页、许可证字段就会自动写入预设的值。这些信息会存放在用户主目录的`~/.npmrc`文件，使得用户不用每个项目都输入。如果某个项目有不同的设置，可以针对该项目运行`npm config`。

```bash
  $ npm set save-exact true
```

上面命令设置加入模块时，`package.json`将记录模块的确切版本，而不是一个可选的版本范围。

## npm install

`Node`模块采用`npm install`命令安装。

每个模块可以“全局安装”，也可以“本地安装”。“全局安装”指的是将一个模块安装到系统目录中，各个项目都可以调用。一般来说，全局安装只适用于工具模块，比如`eslint`和`gulp`。“本地安装”指的是将一个模块下载到当前项目的`node_modules`子目录，然后只有在项目目录之中，才能调用这个模块



```csharp
# 本地安装
$ npm install <package name>

# 全局安装
$ sudo npm install -global <package name>
$ sudo npm install -g <package name>

# 也支持直接输入Github代码库地址
$ npm install git://github.com/package/path.git
$ npm install git://github.com/package/path.git#0.1.0

# 强制重新安装
$ npm install <packageName> --force

# 如果你希望，所有模块都要强制重新安装，那就删除node_modules目录，重新执行npm install
$ rm -rf node_modules
$ npm install
```

## npm的不同版本

install 命令总是安装模块的最新版本，如果要安装模块的特定版本，可以在模块名后面加上@和版本号。

```ruby
$ npm install sax@latest
$ npm install sax@0.1.1
$ npm install sax@">=0.1.0 <0.2.0"

# 如果使用--save-exact参数，会在package.json文件指定安装模块的确切版本
$ npm install readable-stream --save --save-exact

$ npm install sax --save
$ npm install node-tap --save-dev
# 或者
$ npm install sax -S
$ npm install node-tap -D

# 如果要安装beta版本的模块，需要使用下面的命令
# 安装最新的beta版
$ npm install <module-name>@beta (latest beta)
# 安装指定的beta版
$ npm install <module-name>@1.3.1-beta.3

# npm install默认会安装dependencies字段和devDependencies字段中的所有模块，如果使用--production参数，可以只安装dependencies字段的模块
$ npm install --production
# 或者
$ NODE_ENV=production npm install
```

## npm uninstall

`npm uninstall`命令，卸载已安装的模块

```ruby
$ npm uninstall [package name]

# 卸载全局模块
$ npm uninstall [package name] -global
```

## npm update

`npm update`命令可以更新本地安装的模块

```ruby
# 升级当前项目的指定模块
$ npm update [package name]

# 升级全局安装的模块
$ npm update -global [package name]
```

它会先到远程仓库查询最新版本，然后查询本地版本。如果本地版本不存在，或者远程版本较新，就会安装。

使用`-S`或`--save`参数，可以在安装的时候更新`package.json`里面模块的版本号。

注意，从`npm v2.6.1`开始，npm update只更新顶层模块，而不更新依赖的依赖，以前版本是递归更新的。如果想取到老版本的效果，要使用下面的命令。

```ruby
$ npm --depth 9999 update
```

## npm config

```bash
  $ npm config set prefix $dir
```

上面的命令将指定的`$dir`目录，设为模块的全局安装目录。如果当前有这个目录的写权限，那么运行`npm install`的时候，就不再需要`sudo`命令授权了。

```swift
$ npm config set save-prefix ~
```

上面的命令使得`npm install --save`和`npm install --save-dev`安装新模块时，允许的版本范围从克拉符号（^）改成波浪号（~），即从允许小版本升级，变成只允许补丁包的升级。

```bash
$ npm config set init.author.name $name
$ npm config set init.author.email $email
```

上面命令指定使用`npm init`时，生成的`package.json`文件的字段默认值。

## npm info

`npm info`命令可以查看每个模块的具体信息

```ruby
$ npm info underscore
$ npm info underscore description
$ npm info underscore homepage
$ npm info underscore version
```

## npm search

`npm search`命令用于搜索npm仓库，它后面可以跟字符串，也可以跟正则表达式

```ruby
  $ npm search <搜索词>
```

## npm list

`npm list`命令以树型结构列出当前项目安装的所有模块，以及它们依赖的模块。

```php
npm list
npm list -global
npm list vue
```

加上global参数，会列出全局安装的模块。

## npm设置淘宝镜像源

```bash
npm config set registry https://registry.npm.taobao.org
```

查看是否更改成功

```bash
npm config get registry
```

