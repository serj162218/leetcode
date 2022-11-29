/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = "";
    s = s.toLowerCase();
    for (let i of s) {
        if ((i.charCodeAt(0) >= 'a'.charCodeAt(0) && i.charCodeAt(0) <= 'z'.charCodeAt(0)) || (0 <= parseInt(i) && parseInt(i) <= 9)) {
            str += i;
        }
    }
    let L = 0;
    let R = str.length - 1;
    while (L < R) {
        if (str[L] === str[R]) {
            L++;
            R--;
        } else {
            return false;
        }
    }
    return true;
};
// @lc code=end

