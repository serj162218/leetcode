/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let ans = [];

    //because it need at least three elements, so end with len-3
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i - 1] === nums[i]) continue;
        let L = i + 1;
        let R = nums.length - 1;
        while (L < R) {
            if (nums[L] + nums[R] + nums[i] < 0) L++;
            else if (nums[L] + nums[R] + nums[i] > 0) R--;
            else {
                while (nums[L] === nums[L + 1]) L++;
                while (nums[R] === nums[R - 1]) R--;
                ans.push([nums[i], nums[L], nums[R]]);
                L++;
                R--;
            };
        }
    }
    return ans;
};
// @lc code=end

