/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let level = 0;
    let maxLevel = Math.floor(matrix.length / 2);
    let last = matrix.length - 1;
    while (level < maxLevel) {
        for (let i = level; i < last; i++) {
            [matrix[level][i], matrix[i][last]] = [matrix[i][last], matrix[level][i]];
            [matrix[level][i], matrix[last][last - i + level]] = [matrix[last][last - i + level], matrix[level][i]];
            [matrix[level][i], matrix[last - i + level][level]] = [matrix[last - i + level][level], matrix[level][i]];
        }
        level++;
        last--;
    }
};

// @lc code=end

