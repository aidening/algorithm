/**
 * 时间复杂度O(n*n)
 * 原理：分两层循环。
 *      1、外层循环 n 次；
 *      2、内层循环 n - i 次，相邻元素比较，前者大于后者则互换位置
 */
function bubbleSort(testDataArr) {
  // 两层for循环
  for (let i = 1; i < testDataArr.length; i++) {
    // 内层比较(相邻元素大者靠后)
    for (let j = 0; j < testDataArr.length - i; j++) {
      if (testDataArr[j] > testDataArr[j + 1]) {
        [testDataArr[j], testDataArr[j + 1]] = [testDataArr[j + 1], testDataArr[j]];
      }
    }
  }
  return testDataArr;
}

const testDataArr = [5, 6, 8, 1, 233, 0, 9, 3, 78, 24, 99, 333, 111, 5, 666];
console.log(bubbleSort(testDataArr), testDataArr);
