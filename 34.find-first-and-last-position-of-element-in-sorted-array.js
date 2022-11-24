/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let searchLeftmostTarget = (nums, target) => {
        let index = -1;
        let left = 0;
        let right = nums.length - 1;
        let mid;
        //search until right < left, which means find the leftmost target's index - 1
        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            if (nums[mid] == target) index = mid;
        }
        return index;
    }
    let searchRightmostTarget = (nums, target) => {
        let index = -1;
        let left = 0;
        let right = nums.length - 1;
        let mid;
        //search until left > right, which means find the rightmost target's index + 1
        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            if (nums[mid] == target) index = mid;
        }
        return index;
    }
    return [searchLeftmostTarget(nums, target), searchRightmostTarget(nums, target)];
};
// @lc code=end

