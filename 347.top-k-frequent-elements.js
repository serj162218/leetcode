/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = {};
    for (let i of nums) {
        map[i] = ~~map[i] + 1;
    }
    map = Object.keys(map).sort((a,b)=>map[b] - map[a]);
    let ans = [];
    for (let i of map) {
        if (ans.length < k) ans.push(i);
    }
    return ans;
};
// topKFrequent([-1,-1,0,0,0,1], 2);
// @lc code=end

