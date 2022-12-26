/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let dfs = (n, str, open, close) => {
        if (str.length === n * 2) {
            ans.push(str);
            return true;
        }

        if (open < n)
            dfs(n, str + "(", open + 1, close);

        if (open > close)
            dfs(n, str + ")", open, close + 1);

    }
    let ans = [];
    dfs(n, "", 0, 0);
    return ans;
};
// console.log(generateParenthesis(1));
// @lc code=end

