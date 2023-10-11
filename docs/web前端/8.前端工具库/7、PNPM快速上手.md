## pnpm快速入门

### 环境搭建

> 官方文档：https://www.pnpm.cn/installation

安装：

```shell
npm install -g pnpm
```

查看当前安装的pmpm版本

```shell
pnpm -v
```

### 常用命令

| npm命令         | pnpm命令         |
| --------------- | ---------------- |
| `npm insatll`   | `pnpm install`   |
| `npm i <pkg>`   | `pnpm add <pkg>` |
| `npm run <cmd>` | `pnpm <cmd>`     |

当你使用一个未知命令时，pnpm 将会查找和该命令具有相同名称的脚本， 因此，`pnpm run lint` 和 `pnpm lint` 是一样的。如果没有相同名称的脚本的话， 那么 pnpm 将按照 shell 脚本的形式执行该命令，所以你可以执行类似 `pnpm eslint` (see [pnpm exec](https://www.pnpm.cn/cli/exec)) 指令的命令。

## 下载源相关

### 查看源

```bash
pnpm get registry
```

### 临时修改

```bash
pnpm --registry https://registry.npm.taobao.org install any-touch
```

### 持久使用

```bash
pnpm config set registry https://registry.npmmirror.com
```

### 还原

```bash
pnpm config set registry https://registry.npmjs.org
```
