/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    k = nums.length - k;
    let quickSelect = (left, right) => {
        let p = left;
        let key = right;
        for (let i = left; i < right; i++) {
            if (nums[i] <= nums[key]) {
                let tmp = nums[p];
                nums[p] = nums[i];
                nums[i] = tmp;
                p++;
            }
        }
        let tmp = nums[p];
        nums[p] = nums[key];
        nums[key] = tmp;

        if (p == k) return nums[p];
        else if (p > k) return quickSelect(left, p - 1);
        else return quickSelect(p + 1, right);
    }
    return quickSelect(0, nums.length - 1);
};
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// @lc code=end

