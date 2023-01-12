#
# @lc app=leetcode id=110 lang=python3
#
# [110] Balanced Binary Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        return self.helper(root) >= 0
        
    def helper(self, root) -> int:
        if root == None:
            return 0

        left, right = self.helper(root.left), self.helper(root.right)

        if left < 0 or right < 0 or abs(left - right) > 1:
            return -1
        return max(left, right)+1

# @lc code=end
