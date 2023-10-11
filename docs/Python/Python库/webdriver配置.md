# webdriver配置

### 一、下载webdriver（以chrome为例）*

下载地址 https://npm.taobao.org/mirrors/chromedriver

**一定要下载与安装的浏览器版本对应的driver**

### 二、将下载的webdriver放到浏览器目录下

一般是  C:\Program Files\Google\Chrome\Application

### 三、配置环境变量

1.将chromedriver.exe所在的路径拷贝出来（例如：C:\Program Files\Google\Chrome\Application，不需要带上chromedriver.exe

2.配置环境变量path（双击系统变量的path）

### 4.重启编译器，运行下面脚本检查是否配置成功（若成功打开谷歌浏览器，则配置成功）

测试代码示例

```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("http://www.baidu.com")
```

