/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let front = 0;
    let back = height.length - 1;
    let max = 0;
    while (front < back) {
        max = Math.max(max, Math.min(height[front], height[back]) * (back - front));
        if(height[front] > height[back]) back--;
        else front++;
    }
    return max;
};
// @lc code=end

