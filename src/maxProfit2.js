/**
 * @title 买卖股票的最佳时机2
 * @tags 数组、贪心算法
 */
var maxProfit = function (prices) {
    let sum = 0
    let i = 0
    while (i < prices.length - 1) {
        let diff = prices[i + 1] - prices[i]
        if (diff > 0) {
            sum += diff
        }
        i++
    }
    return sum
};

let res = maxProfit([7, 1, 5, 3, 6, 4])
console.log(res);
