/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = (matrix, target) => {
    let L = 0, R = matrix.length - 1;
    let M;
    while (L < R) {
        M = ~~((L + R) / 2);
        if (M > 0 && matrix[M][0] > target && matrix[M - 1][0] < target) return searchValue(matrix[M - 1], target);
        else if (M < matrix.length - 1 && matrix[M][0] < target && matrix[M + 1][0] > target) return searchValue(matrix[M], target);

        if (matrix[M][0] > target) R = M;
        else if (matrix[M][0] < target) L = M + 1;
        else return searchValue(matrix[M], target);
    }
    return searchValue(matrix[R], target);
};

let searchValue = (arr, target) => {
    if (arr.length < 2) return arr[0] == target ? true : false;
    let L = 0, R = arr.length - 1;
    let M;
    while (L < R) {
        M = ~~((L + R) / 2);
        if (arr[M] > target) R = M - 1;
        else if (arr[M] < target) L = M + 1;
        else return true;
    }
    return arr[R] == target ? true : false;
}
// @lc code=end

