/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let L = 0;
    let map = {};
    let mostFrequency = 0;
    let maxLength = 0;
    for (let R = 0; R < s.length; R++) {
        map[s[R]] = ~~map[s[R]] + 1;
        if (map[s[R]] > mostFrequency) {
            mostFrequency = map[s[R]];
        }
        if (R - L + 1 - mostFrequency > k) {
            map[s[L]]--;
            L++;
        }else{
            maxLength = Math.max(R - L + 1, maxLength);
        }
    }
    return maxLength;
};
// @lc code=end

