/*
 * @lc app=leetcode id=384 lang=javascript
 *
 * [384] Shuffle an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    if (this.nums == null) return null;
    let arr = this.nums.slice();
    for (let i = 0; i < arr.length; i++) {
        let j = this.getRandomInt(arr.length);
        this.swap(arr, i, j);
    }
    return arr;
};

Solution.prototype.swap = function (nums, a, b) {
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
}
Solution.prototype.getRandomInt = function (max) {
    return Math.floor(Math.random() * max);
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

