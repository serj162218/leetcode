/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let L = 0;
    let R = height.length - 1;
    let maxL = height[L];
    let maxR = height[R];
    let area = 0;
    while (L < R) {
        if (maxL <= maxR) {
            L++;
            maxL = Math.max(maxL, height[L]);
            area += maxL - height[L];
        } else {
            R--;
            maxR = Math.max(maxR, height[R]);
            area += maxR - height[R];
        }
    }
    return area;
}
// @lc code=end