/*
 * @lc app=leetcode id=1876 lang=javascript
 *
 * [1876] Substrings of Size Three with Distinct Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    if (s.length < 3) return 0;

    let map = {};
    let sum = 0;
    let count = 0;

    for (let i = 0; i < 3; i++) {
        map[s[i]] = ~~map[s[i]] + 1;
    }

    count = Object.values(map).length;

    for (let L = 0, R = 3; R < s.length; R++) {
        if (count === 3) sum += 1;

        // R pointer right shift by 1
        map[s[R]] = ~~map[s[R]] + 1;
        if (map[s[R]] === 1) count += 1;

        // L pointer right shift by 1
        map[s[L]] = map[s[L]] - 1;
        if (map[s[L]] === 0) count -= 1;
        L++;
    }
    return count === 3 ? sum + 1 : sum;
};
// console.log(countGoodSubstrings("zxyyyyyy"));
// console.log(countGoodSubstrings("aababcabc"));
// @lc code=end

