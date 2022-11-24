/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let ColumnHasZero = false;
    let RowHasZero = false;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                if (i == 0) ColumnHasZero = true;
                if (j == 0) RowHasZero = true;
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;

            }
        }
    }

    if (RowHasZero) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
    if (ColumnHasZero) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0;
        }
    }
};
// console.log(setZeroes([[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]]));
// @lc code=end

