/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let ans = {};
    for (let val of strs) {
        let sorted = [...val].sort();
        if (ans[sorted]) ans[sorted].push(val)
        else ans[sorted] = [val];
    }
    return Object.values(ans);
};
// @lc code=end

