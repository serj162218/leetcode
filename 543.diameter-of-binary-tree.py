#
# @lc app=leetcode id=543 lang=python3
#
# [543] Diameter of Binary Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.maxLen = 0

    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.helper(root)
        return self.maxLen

    def helper(self, root) -> int:
        if root == None:
            return -1
        left = self.helper(root.left) + 1
        right = self.helper(root.right) + 1
        self.maxLen = max(self.maxLen, left + right)
        return max(left, right)

# @lc code=end
