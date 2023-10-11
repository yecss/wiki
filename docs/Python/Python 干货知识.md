# Python基本知识

## 基础知识

### Python三个引号

```python
str1 = """
str1
str2
str3
"""
print(str1)
# 可实现包裹多行字符串
```



### 查看python的版本

```bash
cmd >> python --version
```

```bash
cmd >>pip --version
```



### Python 之禅

```python
import this
```

运行即可。

### 常量

常量类似于变量，但是其值在整个声明周期内保持不变。通常用全大写来标识。

### 注释

多编写注释，删除注释总是比添加注释要好

不知道写一些什么的时候，你的名字，时间，以及简单的介绍也是可以写一写的

注释的写法

```python
# 单行注释
"""
多行注释
第一行
第二行
"""
```



### Bs4的引入

```python
from bs4 import BeautifulSoup
```

### 转码
```python
resp.encoding = "utf-8"
```

### 下载文件

```python
# 创建文件
	f = open("tu_%s.jpg" % n,mode="wb") # wb表示写入的内容非文本文件，w写，b二进制
	f.write(img_down)
```

### Python 关键字

下面的列表显示了在 Python 中的保留字。这些保留字不能用作常数或变数，或任何其他标识符名称。

所有Python的关键字只包含小写字母。

| and      | exec    | not    |
| :------- | :------ | :----- |
| assert   | finally | or     |
| break    | for     | pass   |
| class    | from    | print  |
| continue | global  | raise  |
| def      | if      | return |
| del      | import  | try    |
| elif     | in      | while  |
| else     | is      | with   |
| except   | lambda  | yield  |

### 数据类型

字符串，整数，浮点数，布尔

```python
name = 'Crossin'
myVar = 123
price = 5.99
visible = True

# 示例
```

`\ `被称作**转义字符**，除了用来表示引号，还有比如用

\n 表示字符串中的换行（相当于按一下回车键的效果）
\t 表示字符串中的制表符（相当于按一下tab键的效果）
\\ 表示字符串中的 \ （因为单个斜杠被用来做转义了，所以真的要表示 \ 字符，就要两个斜杠）

### 字符串的格式化

数字转字符串

```python
a = 18
str(a)
```

还有一种方法，就是用 `%`对字符串进行格式化

```python
num = 18
print('My age is %d' % num)

# 输出的时候，原始字符串中的 %d 会被 % 后面的值替换。输出
# My age is 18
# %d 整数，%f 小数，如果你想保留两位小数，需要在f前面加上条件：%.2f
```

另外，可以用 `%s`来替换一段字符串

```python
name = 'Crossin'
print('%s is a good teacher.' % name)
# 输出 Crossin is a good teacher.
```

打印不换行

```
print('*', end=' ')
```

之前我们说到，可以用%来构造一个字符串，比如

```python
print ('%s is easy to learn' % 'Python')
```

### 命令行常用命令

**dir** 显示出当前目录下的文件和文件夹。

**cd** 目录名

**cd ..**  跳回到上级目录

### 函数的参数

不能指定参数的函数就好比你去餐厅吃饭，服务员告诉你，不能点菜，有啥吃啥。这显然不能满足很多情况。

所以，如果我们希望自己定义的函数里允许调用者提供一些参数，就把这些参数写在括号里，如果有多个参数，用逗号隔开，如：

```python
def sayHello(someone):
   print(someone + ' says Hello!')

# sayHello('Crossin')
```

### 字典

字典这种数据结构有点像我们平常用的通讯录，有一个名字和这个名字对应的信息。在字典中，名字叫做“键”，对应的内容信息叫做“值”。字典就是一个键/值对的集合。

```python
score = {
   '萧峰': 95,
   '段誉': 97,
   '虚竹': 89
}

for name in score:
	print(name)
	print (score[name])
```

### 正则表达式

这里字符串前面加了r，是raw的意思，它表示对字符串不进行转义。

```python
m = re.findall(r"hi", text)
```

“.”在正则表达式中表示除换行符以外的任意字符。

与“.”类似的一个符号是“\S”，它表示的是不是空白符的任意字符。注意是大写字符S。

在很多搜索中，会用“?”表示任意一个字符，`“*”`表示任意数量连续字符，这种被称为通配符。但在正则表达式中，任意字符是用`“.”`表示，而`“*”`则不是表示字符，而是表示数量：它表示前面的字符可以重复任意多次（包括0次），只要满足这样的条件，都会被表达式匹配上。

### 创建列表并增加

```python
list_1 = [1,2,4,5,67,41,54,213,46,58,123]
list_2 = []
for i in list_1:
	if i % 2 == 0:
		list_2.append(i)
print(list_2)
```

### lambda 表达式

Python 是一门简洁的语言，lambda 表达式则充分体现了 Python 这一特点。

```python
sum = lambda a, b, c: a + b + c

print (sum(1, 2, 3))
print (sum(4, 5, 6))
```

### 内容显示不正常

设置编码，gbk或者utf-8

### Pip 换源

由于pip内置源速度较慢，所以我们通常会更换源

***1. 先使用以下命令升级pip\***

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U
```

***2. 然后设置pip默认源为清华大学开源软件镜像站\***

```bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

### Python模块的安装和卸载

***模块的安装\***

```
pip install module
```

***模块的卸载\***

```
pip uninstall module
```

### 常用 cmd 命令

```bash
cd C:/work    - 进入C盘的work文件夹

cd..    - 返回上一级

cd/    - 返回根目录

D:/    - 进入D盘

dir    - 显示某个目录下的子目录

md xx    - 创建xx文件夹
rd xx    - 删除xx文件夹

exit()    - 退出

cls    - 清除历史
```

###  切片

```python
print(list(range(100)[1:100:3]))
```

### 更换编码

```python
res.encoding = 'utf-8'
```

### 设置headers头

```python
在Chrome中输入chrome://version/可获取header
headers = {
	"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
}

res = requests.get("http://www.yerse.club/",headers=headers)
```

### 打印不换行

```python
print(res.text,end='')
```

### if **name** == "**main**": 的作用

```python
当程序，作为脚本直接执行时，运行该代码的上下部分。
而当改程序被引用时（import test）,则只运行该代码的下面一部分
通俗理解，我只是我自己，在别人眼里我是名字，当我是我的名字时，只运行下面的部分
```

### 切割字符串

```python
url = "www.baidu.com/logo.png"
path = url.split(".")[0]
print(path)

# 针对string类型的split()函数。它主要是切割字符串，结果返回由字符串元素组成的一个列表

# split(sep, num)

#  str: 表示为分隔符，默认为空格，但是不能为空(”)。若字符串中没有分隔符，则把整个字符串作为列表的一个元素
#　num：表示分割次数。如果存在参数num，则仅分隔成 num+1 个子字符串，并且每一个子字符串可以赋给新的变量
#　[n]： 表示选取第n个分片
```

### 代码神兽

```python
"""
      ┏┛ ┻━━━━━┛ ┻┓
      ┃　　　　　　 ┃
      ┃　　　━　　　┃
      ┃　┳┛　  ┗┳　┃
      ┃　　　　　　 ┃
      ┃　　　┻　　　┃
      ┃　　　　　　 ┃
      ┗━┓　　　┏━━━┛
        ┃　　　┃   神兽保佑
        ┃　　　┃   代码无BUG！
        ┃　　　┗━━━━━━━━━┓
        ┃　　　　　　　    ┣┓
        ┃　　　　         ┏┛
        ┗━┓ ┓ ┏━━━┳ ┓ ┏━┛
          ┃ ┫ ┫   ┃ ┫ ┫
          ┗━┻━┛   ┗━┻━┛
"""
```

### 运算

```python
# 数学运算
 + plus 加号 
 - minus 减号 
 / slash 斜杠 
 * asterisk 星号 
 % percent 百分号 
 < less-than 小于号 
 > greater-than 大于号 
 <= less-than-equal 小于等于号 
 >= greater-than-equal 大于等于号
```

