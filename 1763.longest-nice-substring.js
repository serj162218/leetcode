/*
 * @lc app=leetcode id=1763 lang=javascript
 *
 * [1763] Longest Nice Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    if (s.length < 2) return "";
    let set = new Set([...s]);
    for (let i = 0; i < s.length; i++) {
        if (!(set.has(s[i].toLowerCase()) && set.has(s[i].toUpperCase()))) {
            let substringL = longestNiceSubstring(s.substring(0, i));
            let substringR = longestNiceSubstring(s.slice(i + 1));
            return substringL.length >= substringR.length ? substringL : substringR;
        }
    }
    return s;
};
// console.log(longestNiceSubstring("YazaAay"));

// @lc code=end

