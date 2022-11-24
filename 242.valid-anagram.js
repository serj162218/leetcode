/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = ~~map[s[i]] + 1;
    }
    for (let i = 0; i < t.length; i++) {
        map[t[i]] = ~~map[t[i]] - 1;
        if (map[t[i]] < 0) return false;
    }
    return true;
};
// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));
// console.log(isAnagram("aab", "bba"));


/*
if (s.length !== t.length) return false;
let a = [...s].sort();
let b = [...t].sort();
for (let i = 0; i < a.length; i++)
    if (a[i] !== b[i]) return false;
return true;
*/
// @lc code=end

