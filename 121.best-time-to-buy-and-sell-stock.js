/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let L = 0;
    let R = L + 1;
    while (L < prices.length && R < prices.length) {
        if (prices[L] > prices[R]) {
            L = R;
            R++;
        } else {
            maxProfit = Math.max(maxProfit, prices[R] - prices[L]);
            R++;
        }
    }
    return maxProfit;
};
// console.log(maxProfit([7, 6, 5, 3, 1]));
// console.log(maxProfit([0]));
// console.log(maxProfit([2, 2, 2, 2, 2, 2, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 7, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7]));
// @lc code=end

