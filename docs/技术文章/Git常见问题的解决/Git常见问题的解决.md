## 报错：找不到编辑器

> git rebase -i e450d77a9228d63e487025fee6b99e3832734445 hint: Waiting for your editor to close the file... "D:\Microsoft VS Code\bin\code" --wait: line 1: D:\Microsoft VS Code\bin\code: No such file or directory error: There was a problem with the editor '"D:\Microsoft VS Code\bin\code" --wait'.

解决方法：

**设置编辑器路径**：如果路径有误，可以通过以下命令重新设置 Git 的默认编辑器：

```
git config --global core.editor "code --wait"
```

如果 `code` 命令不在系统路径中，你可以手动指定正确的路径：

```
git config --global core.editor "\"D:/path/to/VSCode/bin/code\" --wait"
```

## git如何删除一个commit记录

**step1** 使用 Git Rebase 修改历史：你可以使用 `git rebase -i` 命令来交互式地重新编辑 commit 历史。通过这种方式，你可以将需要删除的 commit 记录从历史中去除。
`git rebase -i <commit hash before the one you want to delete>`

注意 -i 后面的参数是 要删除的那一条上一条的版本号的哈希值

**step2** 强制推送到 GitHub：完成上述操作后，你需要使用 `git push --force` 命令将修改后的历史推送到 GitHub 上。这将覆盖远程仓库中的历史。
`git push --force origin <branch>`

注意：强制推送可能会影响其他开发者的工作，因此请确保你有权力执行这个操作，并且明白你的操作可能会影响其他人。