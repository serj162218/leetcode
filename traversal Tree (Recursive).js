/**
 * Three order method in tree
 * the key is "arr.push(node.val)"
 * preorder = do the things first.
 * inorder = do it in the middle.
 * postorder = do it last.
 * 
 * This example is postorder
 */
var OrderTraversal = function (root) {
    let arr = [];
    let helper = function (node) {
        if (!node) { return false; }
        helper(node.left);
        helper(node.right);
        arr.push(node.val);
    }
    helper(root);
    return arr;

};