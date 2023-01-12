#
# @lc app=leetcode id=287 lang=python3
#
# [287] Find the Duplicate Number
#

# @lc code=start
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow, fast = nums[0], nums[0]
        while True:
            fast = nums[nums[fast]]
            slow = nums[slow]
            if nums[slow] == nums[fast]:
                break

        p = nums[0]
        while p != slow:
            p = nums[p]
            slow = nums[slow]

        return p
# @lc code=end

