## 概念

JSON（JavaScript Object Notation）格式最初是为JavaScript 开发的，但随后成了一种常见格式，被包括Python在内的众多语言 采用。

## 存储到文件

```python
import json

numbers = [2, 3, 4, 5, 6, 7]
with open("programing.json", "w") as f_obj:
    json.dump(numbers, f_obj)  # 将数字列表存储到文件
```

## 从文件中读取

```python
import json

filename = "programing.json"
with open(filename) as f_obj:
    numbers = json.load(f_obj)
print(numbers)
```

