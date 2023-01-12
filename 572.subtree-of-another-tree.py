#
# @lc app=leetcode id=572 lang=python3
#
# [572] Subtree of Another Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root, subRoot) -> bool:
        rootStr = self.traverse(root)
        subStr = self.traverse(subRoot)
        return subStr in rootStr

    def traverse(self, node) -> str:
        if node:
            return f"^{node.val} {self.traverse(node.left)} {self.traverse(node.right)}"
        return None
"""
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if not root:
            return False
            
        elif self.isSameTree(root, subRoot):
             return True
        else:
            return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)

    def isSameTree(self, p, q):
        if p == None or q == None:
            return p == q
        
        if p.val == q.val:
            return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
        else:
            return False
"""
        
# @lc code=end

