/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let left = matrix[0][0];
    let right = matrix[matrix.length - 1][matrix[0].length - 1];
    let mid;
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        let count = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] <= mid) count++;
                else break;
            }
        }
        if (count >= k) right = mid;
        else left = mid + 1;
    }
    return left;
};
/*
    matrix = matrix.flat().sort((a, b) => a - b);
    return matrix[k - 1];
*/
// @lc code=end

