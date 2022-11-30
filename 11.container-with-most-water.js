/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    let L = 0;
    let R = height.length - 1;
    while (L < R) {
        max = Math.max(Math.min(height[L], height[R]) * (R - L), max);
        if (height[L] > height[R]) R--;
        else L++;
    }
    return max;
};
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 1]));
// @lc code=end

