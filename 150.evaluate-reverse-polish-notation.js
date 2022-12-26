/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let numArr = [];
    for (let i of tokens) {
        switch (i) {
            case "+":
                numArr.push(parseInt(numArr.pop() + numArr.pop()));
                break;
            case "-":
                numArr.push(parseInt(-numArr.pop() + numArr.pop()));
                break;
            case "*":
                numArr.push(parseInt(numArr.pop() * numArr.pop()));
                break;
            case "/":
                let numB = numArr.pop();
                let numA = numArr.pop();
                numArr.push(parseInt(numA / numB));
                break;
            default:
                numArr.push(parseInt(i));
                break;
        }
    }
    return numArr[0];
};
// console.log(evalRPN(["2", "1", "+", "3", "*"]));
// console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
// @lc code=end

