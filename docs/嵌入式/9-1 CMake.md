## Makefile

## Cmake

`CMakeLists.txt`

```txt
cmake_minimum_required(VERSION 3.10)
project(MyApp C)

# 把 main.c 和 func.c 编译成一个可执行文件 main
add_executable(main main.c func.c)
```

然后执行：

```shell
mkdir build
cd build
cmake ..
make
```

- 第一步 `cmake ..` 会生成 Makefile（或其他构建文件）。(让 CMake 去“上一级目录”找 `CMakeLists.txt`)
- 第二步 `make` 会根据生成的 Makefile 编译。

Linux 下程序默认 **没有后缀**，这是正常的，不影响运行。
 直接运行：

```shell
./main
```

# 中大型项目示例

### 项目目录结构

```
MyProject/
├── CMakeLists.txt
├── src/
│   ├── CMakeLists.txt
│   ├── main.c
│   └── app.c
├── lib/
│   ├── CMakeLists.txt
│   ├── mylib.c
│   └── mylib.h
└── tests/
    ├── CMakeLists.txt
    └── test_main.c

```

## 源码部分

### 🔹 顶层 CMakeLists.txt

```
cmake_minimum_required(VERSION 3.10)
project(MyProject C)

# 设置 C 标准
set(CMAKE_C_STANDARD 11)

# 添加子目录
add_subdirectory(lib)
add_subdirectory(src)
add_subdirectory(tests)
```

------

### 🔹 src/CMakeLists.txt

```
# 生成可执行文件
add_executable(MyApp main.c app.c)

# 链接到 lib 子目录生成的库
target_link_libraries(MyApp PRIVATE MyLib)
```

------

### 🔹 lib/CMakeLists.txt

```
# 生成静态库 (libMyLib.a)
add_library(MyLib STATIC mylib.c)

# 可以在这里指定 include 路径，供其他 target 使用
target_include_directories(MyLib PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})
```

------

### 🔹 tests/CMakeLists.txt

```
# 生成测试程序
add_executable(MyTests test_main.c)

# 链接到 MyLib 库
target_link_libraries(MyTests PRIVATE MyLib)
```

### 🔹 src/main.c

```
#include <stdio.h>
#include "mylib.h"

// main.c 作为入口，调用 app.c 和 mylib.c 的功能
extern void app_run(void);

int main(void) {
    printf("=== MyProject Main App ===\n");

    app_run();

    int result = add(5, 7);
    printf("5 + 7 = %d\n", result);

    return 0;
}
```

------

### 🔹 src/app.c

```
#include <stdio.h>
#include "mylib.h"

void app_run(void) {
    printf("[App] Running application logic...\n");
    int value = multiply(3, 4);
    printf("[App] 3 * 4 = %d\n", value);
}
```

------

### 🔹 lib/mylib.h

```
#ifndef MYLIB_H
#define MYLIB_H

int add(int a, int b);
int multiply(int a, int b);

#endif
```

------

### 🔹 lib/mylib.c

```
#include "mylib.h"

int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) {
    return a * b;
}
```

------

### 🔹 tests/test_main.c

```
#include <stdio.h>
#include "mylib.h"

int main(void) {
    printf("=== Running Unit Tests ===\n");

    if (add(2, 3) == 5) {
        printf("Test add PASSED\n");
    } else {
        printf("Test add FAILED\n");
    }

    if (multiply(2, 4) == 8) {
        printf("Test multiply PASSED\n");
    } else {
        printf("Test multiply FAILED\n");
    }

    return 0;
}
```

------

## 编译运行

```shell
mkdir build
cd build
cmake ..
make
```

会生成：

- `MyApp` → 主应用程序
- `libMyLib.a` → 静态库
- `MyTests` → 单元测试

运行：

```
./src/MyApp
./tests/MyTests
```

输出示例：

```shell
=== MyProject Main App ===
[App] Running application logic...
[App] 3 * 4 = 12
5 + 7 = 12

=== Running Unit Tests ===
Test add PASSED
Test multiply PASSED
```

### 4个CMakeLists.txt是怎么联系起来的

1. **顶层 CMakeLists.txt** → 包含所有子目录，告诉 CMake “先处理库，再处理主程序，再处理测试”。
2. **lib/CMakeLists.txt** → 提供公共库 `MyLib`，被 `src` 和 `tests` 共享。
3. **src/CMakeLists.txt** → 编译主程序，可调用 `MyLib`。
4. **tests/CMakeLists.txt** → 编译测试程序，也调用 `MyLib`。

> 核心思想：**顶层统一管理，全局可见库，子目录独立编译，模块化分工**。

## 常见基础面试题

### 1️⃣ 问：CMake 是干什么的？

**答**：

- CMake 是一个 **跨平台构建工具**，用来生成 Makefile 或 IDE 工程文件。
- 它本身不编译代码，而是 **管理编译过程和依赖关系**。

------

### 2️⃣ 问：CMakeLists.txt 文件是干什么的？

**答**：

- 每个目录下的 `CMakeLists.txt` 描述该目录如何构建：
  - 项目名、语言标准
  - 源文件、头文件路径
  - 编译库或可执行文件
- 顶层 `CMakeLists.txt` 可以包含子目录，形成模块化结构。

------

### 3️⃣ 问：怎么指定 C 语言标准？

**答**：

```
set(CMAKE_C_STANDARD 11)
set(CMAKE_C_STANDARD_REQUIRED ON)
```

------

### 4️⃣ 问：如何生成可执行文件？

**答**：

```
add_executable(MyApp main.c app.c)
```

------

### 5️⃣ 问：如果项目里有一个库，要让主程序调用该库，该怎么做？

**答**：

1. 先在库目录里生成库：

```
add_library(MyLib STATIC mylib.c)
target_include_directories(MyLib PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})
```

1. 在主程序目录里链接：

```
add_executable(MyApp main.c)
target_link_libraries(MyApp PRIVATE MyLib)
```

------

### 6️⃣ 问：子目录的 `CMakeLists.txt` 和顶层 `CMakeLists.txt` 是如何联系的？

**答**：

- 顶层使用 `add_subdirectory()` 包含子目录，CMake 会执行子目录的 `CMakeLists.txt`。
- 子目录里定义的库或可执行文件目标可以在顶层或其他子目录中链接。

------

### 7️⃣ 问：如何包含头文件路径？

**答**：

```
target_include_directories(MyApp PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/include)
```

- `PRIVATE` 表示只有这个 target 可见
- `PUBLIC` 表示这个 target 和链接它的 target 都可见

------

### 8️⃣ 问：生成 Makefile 的命令是什么？

**答**：

```
mkdir build
cd build
cmake ..
make
```

------

### 9️⃣ 问：CMake 有哪些常见的构建目标类型？

**答**：

- `add_executable()` → 可执行文件
- `add_library()` → 静态库（STATIC）或动态库（SHARED）
- `INTERFACE` 库 → 仅提供接口给其他 target，不编译源文件

------

### 1️⃣0️⃣ 问：为什么写 `add_subdirectory()` 而不是直接包含源文件？

**答**：

- `add_subdirectory()` 可以让子模块独立管理自己的编译规则
- 支持模块化和可重用，适合中大型项目

------

💡 **面试小提示**：

- 写“了解 CMake 基础用法”，面试官常问 **add_executable、add_library、target_link_libraries、include_directories、add_subdirectory** 这些概念。
- 不必深究高级特性（`find_package`, `interface`），只要能解释项目里怎么生成可执行文件和库、如何链接和包含头文件就足够。