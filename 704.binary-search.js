/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length < 2) return nums[0] == target ? 0 : -1;
    let L = 0, R = nums.length - 1;
    let mid;
    while (L < R) {
        mid = ~~((L + R) / 2);
        if (nums[mid] > target) R = mid - 1;
        else if (nums[mid] < target) L = mid + 1;
        else return mid;
    }
    return nums[R] == target ? R : -1;
};
// console.log(search([1,3,4], 3));
// @lc code=end

