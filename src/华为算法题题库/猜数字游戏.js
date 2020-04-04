/**
 * 你正在和你的朋友玩 猜数字（Bulls and Cows）游戏：你写下一个数字让你的朋友猜。每次他猜测后，你给他一个提示，
 * 告诉他有多少位数字和确切位置都猜对了（称为“Bulls”, 公牛），有多少位数字猜对了但是位置不对（称为“Cows”, 奶牛）。
 * 你的朋友将会根据提示继续猜，直到猜出秘密数字。
 *
 * 请写出一个根据秘密数字和朋友的猜测数返回提示的函数，用 A 表示公牛，用 B 表示奶牛。
 *
 * 请注意秘密数字和朋友的猜测数都可能含有重复数字。
 *
 * 示例 1:
 *
 * 输入: secret = "1807", guess = "7810"
 *
 * 输出: "1A3B"
 *
 * 解释: 1 公牛和 3 奶牛。公牛是 8，奶牛是 0, 1 和 7。
 * 示例 2:
 *
 * 输入: secret = "1123", guess = "0111"
 *
 * 输出: "1A1B"
 *
 * 解释: 朋友猜测数中的第一个 1 是公牛，第二个或第三个 1 可被视为奶牛。
 * 说明: 你可以假设秘密数字和朋友的猜测数都只包含数字，并且它们的长度永远相等。
 */

/**
 * 方法一：两次for循环，分别找出公牛和奶牛
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let bulls = [],
    cows = [];
  let secretArray = secret.split("");
  let guessArray = guess.split("");
  secretArray.forEach((item, index) => {
    // 找出所有的公牛
    if (item === guessArray[index]) {
      bulls.push(item);
      secretArray[index] = guessArray[index] = "A";
    }
  });
  secretArray.forEach((item, index) => {
    if (item !== "A" && guessArray.includes(item)) {
      // 找出所有的奶牛
      cows.push(item);
      guessArray[guessArray.indexOf(item)] = "B";
    }
  });
  return `${bulls.length}A${cows.length}B`;
};

/**
 * 方法二：先找出公牛，并记录guess数据，利用obj计数
 */
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let bullsCount = 0,
    cowsCount = 0,
    numberObj = {},
    restGuessArray = [];
  let secretArray = secret.split("");
  let guessArray = guess.split("");
  secretArray.forEach((item, index) => {
    if (item === guessArray[index]) {
      // 公牛数加1
      bullsCount++;
    } else {
      // 将 secret 不是公牛的数字通过 对象属性 的方式记录出现的次数
      numberObj[item] = (numberObj[item] || 0) + 1;
      // 取出猜测的数据
      restGuessArray.push(guessArray[index]);
    }
  });
  restGuessArray.forEach(item => {
    if (numberObj[item] > 0) {
      cowsCount++;
      numberObj[item]--;
    }
  });
  return `${bullsCount}A${cowsCount}B`;
};
