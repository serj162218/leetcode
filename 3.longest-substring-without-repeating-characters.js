/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let L = 0;
    let set = new Set();
    let maxLen = 0;
    for (let R = 0; R < s.length; R++) {
        while (set.has(s[R])) {
            set.delete(s[L]);
            L++;
        }
        set.add(s[R]);
        maxLen = Math.max(maxLen, set.size);
    }
    return maxLen;
};
// @lc code=end

