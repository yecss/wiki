## 项目创建教程

https://mp.weixin.qq.com/s/1c9dy8W1jkm4KpsNbPtSow

## 按键防抖

```c
#include "Key.h"

uint8_t Key_Detect(void)
{
    uint8_t res = 0;

    // 1. 检测是否有任意按键被按下（低电平有效）
    if (KEY1 == GPIO_PIN_RESET || 
        KEY2 == GPIO_PIN_RESET || 
        KEY3 == GPIO_PIN_RESET || 
        KEY4 == GPIO_PIN_RESET)  
    {
        HAL_Delay(100);           /* 去抖动 */

        // 2. 再次检测，确认按键状态（去抖后）
        if (KEY1 == GPIO_PIN_RESET)  res = KEY1_PRESS;
        if (KEY2 == GPIO_PIN_RESET)  res = KEY2_PRESS;
        if (KEY3 == GPIO_PIN_RESET)  res = KEY3_PRESS;
        if (KEY4 == GPIO_PIN_RESET)  res = KEY4_PRESS;
    }
    return res;
}
	
```

