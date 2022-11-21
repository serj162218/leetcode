/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let ans = [[]];
    let t = [];
    let tmp;
    for(let i = 0;i<nums.length;i++){
        t = [];
        ans.forEach((v)=>{
            tmp = [...v].push(nums[i]);
            tmp.push(nums[i]);
            t.push(tmp);
        });
        ans = [...t, ...ans];
    }
    return ans;
};

console.log(subsets([1,2,3]));