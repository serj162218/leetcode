#
# @lc app=leetcode id=143 lang=python3
#
# [143] Reorder List
#

# @lc code=start
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reorderList(self, head: ListNode) -> None:
        # find Middle
        fast, slow = head, head
        while fast.next and fast.next.next:
            fast = fast.next.next
            slow = slow.next

        # reverse middle
        curr, prev, next = slow.next, None, None
        while curr != None:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next

        
        #break the linkedlist into two piece to prevent cycle in reorder
        slow.next = None

        # reorder
        L, R = head, prev
        while L and R:
            tmpL = L.next
            tmpR = R.next

            L.next = R
            L = tmpL

            R.next = L
            R = tmpR
        # @lc code=end
