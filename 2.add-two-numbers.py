#
# @lc app=leetcode id=2 lang=python3
#
# [2] Add Two Numbers
#

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        head = ListNode(0)
        cur = head
        plus = 0
        while l1 or l2 or plus == 1:
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0
            total = v1 + v2 + plus
            plus = total // 10

            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

            cur.next = ListNode(total % 10)
            cur = cur.next

        return head.next
# @lc code=end
