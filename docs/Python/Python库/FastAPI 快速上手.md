## FastAPI 快速上手

### 1、安装 FastAPI 和 uvicorn

> uvicorn 是一个ASGI服务器，用来拉起FastAPI写的应用

```python
pip install fastapi
pip install uvicorn
```

### 2、创建main.py

```python
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
 return {"Hello": "World"}
# 创建了一个web服务，运行项目后访问浏览器的根路径，
# FastAPI会执行read_root函数， 该函数的返回值会作为响应内容返回给浏览器
```

### 3、运行 uvicorn

```sh
uvicorn main:app --reload
```

> 补充解释：
>
> `uvicorn main:app` 命令含义如下:
>
> - `main`：`main.py` 文件（一个 Python文件或模块）。
> - `app`：在 `main.py` 文件中创建的`app`对象。
> - `--reload`：让服务器在更新代码后重新启动。一般在开发时使用。

## API 文档

FastAPI 自带交互式 API文档，有Swagger UI生成。

使用uvicorn拉起项目后浏览器访问 [http://127.0.0.1:8000/docs](https://link.juejin.cn/?target=http%3A%2F%2F127.0.0.1%3A8000%2Fdocs) 或者 [http://127.0.0.1:8000/redoc](https://link.juejin.cn/?target=http%3A%2F%2F127.0.0.1%3A8000%2Fredoc)