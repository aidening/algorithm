/**
 * 时间复杂度O(n*n)
 */
function bubbleSort(treeArray) {
  // 两层for循环
  for (let i = 1; i < treeArray.length; i++) {
    // 内层比较
    for (let j = 0; j < treeArray.length - i; j++) {
      if (treeArray[j] > treeArray[j + 1]) {
        [treeArray[j], treeArray[j + 1]] = [treeArray[j + 1], treeArray[j]];
      }
    }
  }
  return treeArray;
}

const treeArray = [5, 6, 8, 1, 233, 0, 9, 3, 78, 24, 99, 333, 111, 5, 666];
console.log(bubbleSort(treeArray), treeArray);
