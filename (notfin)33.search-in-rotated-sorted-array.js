/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let front = 0;
    let back = nums.length - 1;
    let middle = Math.floor((back - front) / 2);
    while (front < back) {
        if (nums[middle] == target) break;
        if (target < nums[middle])
            while (nums[middle] > nums[back]) middle++;
        if (nums[middle] <= target && target <= nums[back]) {
            front = middle+1;
            middle = Math.floor((back - front) / 2) + front;
        }else if(target >= nums[front] && target < nums[middle]){
            back = middle-1;
            middle = Math.floor((back - front) / 2) + front;
        }else{
            front+=1;
        }
    }
    return nums[middle] == target ? middle : -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([0, 1, 2, 3, 4], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1, 3], 2));
// search([0, 1, 2, 3, 4], 1);
// @lc code=end

