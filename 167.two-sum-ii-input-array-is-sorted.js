/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    //two-pointer time:O(n) space:O(1)
    let L = 0;
    let R = numbers.length - 1;
    while (L < R) {
        if (numbers[L] + numbers[R] === target) return [L + 1, R + 1];
        else if (numbers[L] + numbers[R] > target) R--;
        else L++;
    }
};

/*
// binary search time: O(nlogn) space: O(1)
let isSearched = [];
for (let i = 0; i < numbers.length; i++) {
    if (!isSearched.includes(numbers[i])) {
        isSearched.push(numbers[i]);
        let L = i + 1;
        let R = numbers.length - 1;
        while (L <= R) {
            let M = ~~((L + R) / 2);
            if (numbers[M] + numbers[i] > target) R = M - 1;
            else if (numbers[M] + numbers[i] < target) L = M + 1;
            else return [i + 1, M + 1];
        }
    }
}
*/
// console.log(twoSum([-1, 1], 0));
// @lc code=end

