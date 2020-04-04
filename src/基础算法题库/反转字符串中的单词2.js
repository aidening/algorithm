/**
 * 给定一个字符串和一个整数 k，你需要对从字符串开头算起的每个 2k 个字符的前k个字符进行反转。
 * 如果剩余少于 k 个字符，则将剩余的所有全部反转。
 * 如果有小于 2k 但大于或等于 k 个字符，则反转前 k 个字符，并将剩余的字符保持原样。
 *
 * 示例:
 *
 * 输入: s = "abcdefg", k = 2
 * 输出: "bacdfeg"
 * 要求:
 *
 * 该字符串只包含小写的英文字母。
 * 给定字符串的长度和 k 在[1, 10000]范围内。
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let result = "";
  if (s.length <= k) {
    return s
      .split("")
      .reverse()
      .join("");
  } else {
    let sArr = s.split("");
    for (let i = 0; i < sArr.length; ) {
      if (sArr.length - i < k) {
        result += sArr
          .slice(i, sArr.length)
          .reverse()
          .join("");
      } else {
        result += sArr
          .slice(i, i + k)
          .reverse()
          .join("");
        if (i + 2 * k > sArr.length) {
          result += sArr.slice(i + k, sArr.length).join("");
        } else {
          result += sArr.slice(i + k, i + 2 * k).join("");
        }
      }
      i += 2 * k;
    }
  }
  return result;
};

console.log(
  reverseStr(
    "hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl",
    39
  )
);
