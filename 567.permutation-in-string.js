/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;
    let s1Map = Array(26).fill(0);
    let s2Map = Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1Map[s1[i].charCodeAt('a') - 'a'.charCodeAt('a')]++;
        s2Map[s2[i].charCodeAt('a') - 'a'.charCodeAt('a')]++;
    }

    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (s1Map[i] === s2Map[i]) matches++;
    }

    let L = 0;
    for (let R = s1.length; R < s2.length; R++) {
        if (matches === 26) return true;

        let index = s2[R].charCodeAt('a') - 'a'.charCodeAt('a');
        s2Map[index]++;
        if (s2Map[index] === s1Map[index]) matches++;
        else if (s2Map[index] === s1Map[index] + 1) matches--;


        index = s2[L].charCodeAt('a') - 'a'.charCodeAt('a');
        s2Map[index]--;
        if (s2Map[index] === s1Map[index]) matches++;
        else if (s2Map[index] === s1Map[index] - 1) matches--;
        L++;
    }

    return matches === 26 ? true : false;
};
// console.log(checkInclusion("adc", "dcda"));
// console.log(checkInclusion("c", "a"));
// console.log(checkInclusion("c", "c"));
// console.log(checkInclusion("ab", "eidbaooo"));
// console.log(checkInclusion("ab", "eidboaooo"));
// console.log(checkInclusion("hello", "ooolleoooleh"));
// @lc code=end

