## CRC是什么

中文名称：循环冗余校验

CRC校验通过`多项式除法`（模2除法）计算冗余码，附加到原始数据后传输。接收方重新计算并比对校验码，判断数据是否出错。

可以理解为：

> CRC16 = 把数据的每一位和固定的生成多项式进行模 2 除法（逐位 XOR），最终得到一个 16 位二进制数（余数），这就是 CRC16。

## CRC16-IBM

POLY多项式：`0x8005`
$$
x^{16} + x^{15} + x^2 + 1
$$

	位号： 15 14 13 ... 2 1 0
	值：   1  0  0 ... 1 0 1

把 16 位二进制分成 4 位一组：

```
1000 0000 0000 0101 → 0x8005
```

INIT初始值：`0x0000`

CRC结果：`0x0000`

## 计算方法

- 逐位计算法
- 查表法

## 逐位计算法讲解

数据示例

```c
0x31 0x32 // 1 2
```

先用CRC和第一个字节异或，得到0x0031;

然后进行逐位计算

- 最低位LSB如果为1的话就右移以为然后异或多项式0x8005的反向也就是0xA001
- 最低位LSB如果是0的话，就直接右移就好了。

移动八次，完成第一个字节的计算。

如果还有字节，就继续第二个字节。

## 示例程序

```c
#include <stdio.h>
#include <stdint.h>

// CRC16-IBM 逐位计算函数
uint16_t CRC16_IBM(uint8_t *data, uint16_t length)
{
    uint16_t crc = 0x0000; // 初始值
    uint16_t i, j;

    for (i = 0; i < length; i++)
    {
        crc ^= data[i];
        for (j = 0; j < 8; j++)
        {
            if (crc & 0x0001)
                crc = (crc >> 1) ^ 0xA001; // 多项式 0x8005 反向
            else
                crc = crc >> 1;
        }
    }
    return crc;
}

int main()
{
    uint8_t testData[] = {0x31, 0x32, 0x33, 0x34}; // ASCII '1','2','3','4'
    uint16_t crc = CRC16_IBM(testData, sizeof(testData));

    printf("CRC16-IBM: 0x%04X\n", crc);

    return 0;
}

```

输出如下：

```
byte length:4
CRC16-IBM: 0x14BA
```

