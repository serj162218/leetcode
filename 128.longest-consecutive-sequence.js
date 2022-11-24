/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;
    let set = new Set([...nums]);
    let max = 1;
    let left = 0;
    let right = 0;
    for (let i = 0; i < nums.length; i++) {
        right = nums[i] + 1;
        left = nums[i] - 1;
        while (set.has(right)) {
            set.delete(right);
            right++;
        }
        while (set.has(left)) {
            set.delete(left);
            left--;
        }
        max = Math.max(right - left - 1, max);
        if (set.size === 0) return max;
    }
    return max;
};
// longestConsecutive([0,3,7,2,5,8,4,6,0,1])
/*

    if (nums.length === 0) return 0;
    nums = [...new Set([...nums])].sort((a, b) => a - b);
    let count = 1;
    let max = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            count++;
        } else {
            max = Math.max(count, max);
            count = 1;
        }
    }
    return Math.max(count, max);
*/
// @lc code=end

