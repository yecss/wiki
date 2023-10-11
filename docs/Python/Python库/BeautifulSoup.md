# BeautifulSoup4 介绍

### 文档

[Beautiful Soup 4.4.0 文档 — Beautiful Soup 4.2.0 中文 文档](https://beautifulsoup.readthedocs.io/zh_CN/v4.4.0/)

### 安装

`pip install beautifulsoup4`

### 使用方法

```python
#导入库
from bs4 import BeautifulSoup

#内容导入
soup = BeautifulSoup(resp.text, 'html.parser')

#属性选择器
soup.section.find_all("div")['data-bg']

#指定类选择器
soup.find('div', class_="bg-image js-lazy")

#CSS选择器
	#类选择器
	title = soup.select(".masthead__title")
	#类名拼接
	article = soup.select(".button"+".-icon")
	#类层级选择器
	content = soup.select(".blogPost__content > p")

#读取文本
title.get_text(strip=True)
```

### find_all

`find_all( name , attrs , recursive , string , **kwargs )`

```python
html_doc = """
<html><head><title>The Dormouse's story</title></head>
<body>

<div class="box">这是一个盒子</div>
<p class="title"><b>The Dormouse1's story</b></p>
<p class="title"><b>The Dormouse11's story</b></p>
<p id="title"><b>The Dormouse2's story</b></p>

<p class="story love">Once upon a time there were three little sisters; and their names were
<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>
<a data="as"></a>
<p class="story">...</p>
"""
from bs4 import BeautifulSoup
soup = BeautifulSoup(html_doc,'html.parser')


print(unicode(soup))


# 浏览结构化数据的方法
print(soup.title)
# <title>The Dormouse's story</title>
print(soup.title.string)
# The Dormouse's story


#找到 一个 class = title的标签
print(soup.find(class_="title"))
#找到 所有 class = title的标签
print(soup.find_all(class_="title"))
#找到id = title的标签
print(soup.find_all(id="title"))


#两者等效
print(soup.a)
print(soup.find('a'))
#找出所有的a标签
print(soup.find_all('a'))


#找出a标签里面所有的链接
for link in soup.find_all('a'):
    print(link.get('href'))


#找出所有的文字内容
print(soup.get_text())


#打印P标签里面class的属性
a = soup.find("p")["class"]
print(a)


# 循环获得字符串
a = soup.body.stripped_strings
for list1 in a:
	print(list1)

import re
a = soup.find(string=re.compile("sisters"))


```

