## 【JavaScript】算法练习

### 项目说明

> 本项目记录个人平时练习各类型的算法题解题思路及解题源码，希望对各位有所帮助

### 目录结构

```
|- src                            // 资源文件夹
|- |- 二叉树相关算法
|- |- 排序算法
|- |- |- 插入排序.js
|- |- |- 堆排序.js
|- |- |- 归并排序.js
|- |- |- 快速排序.js
|- |- |- 冒泡排序.js
|- |- |- 选择排序.js
|- LICENSE                        // MIT 许可
|- README.md                      // 项目介绍
```

#### 排序算法

- 冒泡排序

  ```
  /**
  * 时间复杂度O(n*n)
  * 算法思路：分两层循环。
  *      1、外层循环 n 次；
  *      2、内层循环 n - i 次，相邻元素比较，前者大于后者则互换位置
  */
  function bubbleSort(testDataArr) {
    // 两层for循环
    for (let i = 1; i < testDataArr.length; i++) {
      // 内层比较内层比较(相邻元素大者靠后)
      for (let j = 0; j < testDataArr.length - i; j++) {
        if (testDataArr[j] > testDataArr[j + 1]) {
          [testDataArr[j], testDataArr[j + 1]] = [testDataArr[j + 1], testDataArr[j]];
        }
      }
    }
  }
  ```
