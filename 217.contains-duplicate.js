/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let set = new Set([...nums]);
    return nums.length > set.size;
};
// containsDuplicate([1, 2, 3, 4])
// @lc code=end

