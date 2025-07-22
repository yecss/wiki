## if判断

### 格式

```python
car = "xiaomi"
if car == "bms":
    print(True)
elif car == "xiaomi":
    print("小米汽车")
else:
    print(False)
```

### 布尔表达式

- True
- False

### 条件表达式

- ==
- !=
- and
- or
- in
- not in

### 列表判空

```python
menu_list = []
if menu_list:
    print("列表不为空")
else:
    print("列表为空")
```

## while循环

```python
message = ""
while message != 'exit':
    message = input("请输入：")
    print(message)
```

