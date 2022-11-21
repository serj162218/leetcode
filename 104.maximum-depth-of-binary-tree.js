/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let maxHeight = 0;
    if (root === null) return maxHeight;
    let helper = (node) => {
        if (!node) return 0;
        let left = helper(node.left) + 1;
        let right = helper(node.right) + 1;
        return Math.max(left, right);
    }
    return helper(root);
};
// @lc code=end

