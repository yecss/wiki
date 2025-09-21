## 基础知识

### 启动命令

```
uvicorn main:app --reload
```

### 新增依赖文件

```
pip freeze > requirements.txt
```

### Render启动命令

```
uvicorn main:app --host 0.0.0.0 --port 10000
```

Render就是个大坑，TMD，免费计划都要定时访问，不然就会限制你的速度。

## 常见问题

### 问题一：JWT: 'module' object has no attribute 'encode'

出现该问题的原因是因为需要导入的是PyJWT但是默认导入了jwt库。

解决方法：

```python
# jwt卸载命令
pip uninstall jwt
# 保险起见，将PyJWT一同卸载
pip uninstall PyJWT
# 重新安装PyJWT
pip install PyJWT
```

### 问题二：CORS跨域问题

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 允许的源列表
origins = [
    "http://localhost",
    "http://localhost:5500",  # 前端可能运行的地址
    "http://127.0.0.1:5500",  # 另一种本地地址格式
]

# 添加 CORS 中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # 允许的源列表
    allow_credentials=True,
    allow_methods=["*"],  # 允许的 HTTP 方法
    allow_headers=["*"],  # 允许的 HTTP 头部
)
```

同时前端的网页不能是以本地文件的形式打开，应该是以服务器的形式打开。

本地文件的形式：浏览器的地址栏是file://xxx