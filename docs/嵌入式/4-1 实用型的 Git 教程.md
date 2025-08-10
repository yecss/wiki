# 实用型的Git教程

## 1. 基本概念

Git 是一个**分布式版本控制系统**，你可以把它理解成一个会记录每个文件变动的“时光机”，方便回退、协作和同步。
 几个核心概念：

- **工作区（Working Directory）**：你电脑上的项目文件夹
- **暂存区（Stage / Index）**：准备提交的变动区
- **本地仓库（Local Repo）**：你的提交历史都存在这里
- **远程仓库（Remote Repo）**：GitHub / Gitee / GitLab 上的版本

## 2. 初始化与克隆

```bash
# 在当前目录创建一个 Git 仓库
git init

# 从远程仓库克隆
git clone https://github.com/user/project.git
```

> 初始化一般用在你自己新建的项目，克隆是别人已有的项目。

## 3. 基本工作流

标准四步走：

```bash
# 1. 查看状态
git status

# 2. 添加到暂存区
git add 文件名          # 添加指定文件
git add .              # 添加当前所有修改

# 3. 提交到本地仓库
git commit -m "提交说明"

# 4. 推送到远程仓库
git push origin 分支名
```


## 4. 分支操作

分支是 Git 的灵魂，用来并行开发：

```bash
# 查看分支
git branch

# 创建分支
git branch new-feature

# 切换分支
git checkout new-feature
# 或者新建并切换
git checkout -b new-feature

# 合并分支到当前分支
git merge new-feature

# 删除分支
git branch -d new-feature
```


## 5. 远程仓库操作

```bash
# 查看远程仓库地址
git remote -v

# 添加远程仓库
git remote add origin https://github.com/user/project.git

# 从远程拉取更新并合并
git pull origin main

# 推送本地分支到远程
git push origin 分支名
```

## 6. 回退与撤销

```bash
# 撤销暂存区的文件（回到未添加状态）
git reset 文件名

# 回退到某个提交（保留工作区修改）
git reset --soft 提交ID

# 回退到某个提交（丢弃修改）
git reset --hard 提交ID

# 查看提交历史
git log --oneline
```

> 提交 ID 就是 `git log` 看到的那串哈希（前几位就行）。


## 7. 常用技巧

### （1）查看修改

```bash
git diff            # 查看工作区改动
git diff --cached   # 查看暂存区改动
```

### （2）忽略文件

`.gitignore` 文件中写入要忽略的文件或目录，例如：

```bash
*.log
node_modules/
config/*.json
```

### （3）临时保存工作

```bash
git stash           # 暂存当前修改
git stash pop       # 恢复暂存的修改
```


## 8. 简单协作流程（多人开发）

1. 克隆仓库
2. 创建自己的分支开发
3. 开发完成后推送到远程
4. 提交 Pull Request 或直接合并到主分支

## 本地仓库和远程仓库进行绑定

### ① 在远程平台新建仓库

### ② 本地关联远程并推送

在你本地项目文件夹执行：

```bash
# 添加远程仓库，origin 是远程仓库的别名
git remote add origin https://github.com/YourName/your-repo.git

# 把本地的 main 分支推送到远程
git push -u origin main
```

> 如果你本地分支叫 `master`，就把 `main` 换成 `master`。

💡 **小贴士**

- `git remote -v` 可以查看是否关联成功
- `-u` 是让 Git 记住你推送的远程和分支，下次只用 `git push` 就行

- `-u` 是 `--set-upstream` 的缩写，作用是**在本地分支和远程分支之间建立“追踪关系”**。

- 如果远程仓库已经有文件（比如 README.md），第一次推送可能要先 `git pull` 合并

