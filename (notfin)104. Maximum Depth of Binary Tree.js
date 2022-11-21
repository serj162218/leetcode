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
var maxDepth = function(root) {
    return getDepth(root);
};

var getDepth = function(node){
    if(!node) return -1;
    console.log(getDepth(node.left)+1);
    console.log(getDepth(node.right)+1);
}