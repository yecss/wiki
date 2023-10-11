# Yarn

### 安装 Yarn

在电脑上全局安装 Yarn：

```Bash
npm install -g yarn
```

查看当前所安装的 Yarn 的版本：

```Bash
yarn --version
```

### 镜像

查询当前镜像：

```Bash
yarn config get registry
```

设置镜像：

```Bash
# 设置淘宝镜像
yarn config set registry http://registry.npm.taobao.org/
# 设置回默认的镜像
yarn config set registry https://registry.yarnpkg.com
```

### 管理

初始化项目生成一个 `package.json`：

```Bash
yarn init -y
```

安装项目的全部依赖：

```Bash
yarn install
```

下载包：

```Bash
yarn add xxx
```

卸载包：

```Bash
yarn remove xxx
```