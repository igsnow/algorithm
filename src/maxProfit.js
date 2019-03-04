/**
 * @title 买卖股票的最佳时机
 * @tags 数组、动态规划
 */
var maxProfit = function (prices) {
    let minP = prices[0]
    let maxP = 0
    let i = 0
    while (i < prices.length) {
        minP = Math.min(minP, prices[i])
        maxP = Math.max(maxP, prices[i] - minP)
        i++
    }
    return maxP
};

let res = maxProfit([7, 1, 5, 3, 6, 4])
console.log(res);
