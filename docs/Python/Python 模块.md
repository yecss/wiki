## Python 内置模块

```
1. re
2. json
3. random
4. time
5. sys
6. os
```

## 各模块基本用法

### requests

```python
import requests
url = 'http://www.baidu.com'
response = requests.get(url)
print(response.text)
```

### uuid

```python
import uuid
with open('C:/work/{}.jpg'.format(uuid.uuid1().hex),'bw') as f:
```

### multiprocessing

```python
from multiprocessing import Process

if __name__ =='__main__':
    p = Process(target=函数, args=(参数,))
# 启动进程
p.start()
```

### lxml

```python
import requests
from lxml import etree

response = requests.get("https://pc.qq.com/detail/1/detail_1841.html")
response.encoding = 'utf-8'
res_xpath = etree.HTML(response.content)
result = res_xpath.xpath('/html/body/div[3]/div[1]/div/div/div[2]/div[3]/div[2]/p[1]/text()')
print(result)
```

### re

```python
import requests
import re

r = requests.get("https://defcon.cn/bizhi/api.php?cid=36&start=0&count=30&resolution=3840x2160")

re_str = r'"http:?.+?\.jpg"'#正则表达式
images = re.findall(re_str,r.text)#正则查找
for li in images:
	li1 = re.sub("_85","",li)#正则替换
	print(li1)
```

