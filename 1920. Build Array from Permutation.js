var buildArray = function(nums) {
    return nums.map(v => nums[v]);
};
let nums = [0,2,1,5,3,4];
console.log(buildArray(nums));