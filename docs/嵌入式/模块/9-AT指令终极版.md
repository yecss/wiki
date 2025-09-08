### 查询ip地址

```
AT+CIFSR
```

- `ATE0`：关闭回显（Echo Off）
- `ATE1`：打开回显（Echo On）

### 成功的回复

https://docs.espressif.com/projects/esp-at/zh_CN/latest/esp32/AT_Command_Examples/at_msg_resp_fmt_ctrl_examples.html

```
\r\nOK\r\n
```

连接tcp

```
AT+CIPSTART="TCP","a1saawdoLLP.iot-as-mqtt.cn-shanghai.aliyuncs.com",1883
```

