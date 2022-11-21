var getConcatenation = function(nums) {
    return [...nums,...nums];
};
let nums = [1,2,1];
console.log(getConcatenation(nums));