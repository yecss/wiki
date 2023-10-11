# 介绍

一个第三方的HTML解析器

### 安装

```
pip install lxml
```

### 使用

```
from lxml import etree
```

## 案例

```python
#提取html中的数据
from lxml import etree

text = '''
<html>
    <div class="clearfix">
    <div class="nav_com">
     <ul>
       <li class="active"><a href="/" rel="external nofollow" >推荐</a></li>
       <li class=""><a href="/nav/python" rel="external nofollow" >Python</a></li>
       <li class=""><a href="/nav/java" rel="external nofollow" >Java</a></li>
       <li class=""><a href="/nav/web" rel="external nofollow" >前端</a></li>
       <li class=""><a href="/nav/arch" rel="external nofollow" >架构</a></li>
       <li class=""><a href="/nav/db" rel="external nofollow" >数据库</a></li>
       <li class=""><a href="/nav/5g" rel="external nofollow" >5G</a></li>
       <li class=""><a href="/nav/game" rel="external nofollow" >游戏开发</a></li>
       <li class=""><a href="/nav/mobile" rel="external nofollow" >移动开发</a></li>
       <li class=""><a href="/nav/ops" rel="external nofollow" >运维</a></li>
     </ul>
    </div>
    </div>
</html>>
</html>>
'''

#将字符串解析为html文档
html = etree.HTML(text)
# print(html)
#将字符串序列转化为html
result = etree.tostring(html).decode('utf-8')
print(result)

#从文件读取内容.parse()
html = etree.parse('index.html')
#将html内容序列化
result = etree.tostring(html).decode('utf-8')
print(result)
```

其他属性有:

- @name
- @id
- @value
- @href
- @src
- @class
- text()
  - `html.xpath("//p[text()='Hello World']")`
- postion()
  - `html.xpath("//p[position()=2]")` 获取第二个 p 节点
