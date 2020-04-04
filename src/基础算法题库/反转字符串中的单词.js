/**
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 *
 * 示例 1:
 *
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc"
 * 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 */

/**
 * 方法一：把字符串按照分割成数组，遍历每一项倒叙即可
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let sArr = s.split(" ");
  sArr.forEach((item, index) => {
    sArr[index] = item
      .split("")
      .reverse()
      .join("");
  });

  return sArr.join(" ");
};

/**
 * 方法二：
 *    1、把字符串按照每个字符拆分成数组，整体 `reverse`，然后 `join` 合并单词
 *    2、按照 `" "` 空格字符拆分为数组，然后 `reverse`, 然后 `join` 合并为字符串
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s
    .split("")
    .reverse()
    .join("");
  return arr
    .split(" ")
    .reverse()
    .join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));

