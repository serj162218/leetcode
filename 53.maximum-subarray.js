/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let currentSum = 0;
    for (let i of nums) {
        currentSum = currentSum >= 0 ? currentSum : 0;
        currentSum += i;
        if (currentSum > maxSum) maxSum = currentSum;
    }
    return maxSum;
};
// @lc code=end

