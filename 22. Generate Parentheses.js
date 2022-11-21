/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let dfs = function (ans, str, open, close, n) {
        if (str.length == n * 2) {
            ans.push(str);
            return;
        }
        if (open < n)
            dfs(ans, str + "(", open + 1, close, n);
        if (close < open)
            dfs(ans, str + ")", open, close + 1, n);
    };
    let ans = [];
    dfs(ans, "", 0, 0, n);
    return ans;
};
console.log(generateParenthesis(3));