/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let ans = [1];
    for (let i = 1; i < nums.length; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }
    let tmp = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] = tmp * ans[i];
        tmp *= nums[i];
    }
    return ans;
};
// productExceptSelf([2,3,4,5]);
// @lc code=end

