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
    let ans = [];
    //sort asc
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] == nums[i]) {
            //duplicate
            continue;
        }
        //let 3sum become 2sum question
        let target = nums[i] * -1;
        let front = i + 1;
        let back = nums.length - 1;
        while (front < back) {
            if (target > nums[front] + nums[back]) {
                front++;
            } else if (target < nums[front] + nums[back]) {
                back--;
            } else {
                //filter the duplicate
                while (nums[front] == nums[front + 1]) front++;
                while (nums[back] == nums[back - 1]) back--;
                ans.push([nums[i], nums[front], nums[back]]);
                front++;
                back--;
            }
        }
    }
    return ans;
};
// @lc code=end

