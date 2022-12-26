/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, plus = 0) {
    if (l1 && l2) {
        return new ListNode((l1.val + l2.val + plus) % 10, addTwoNumbers(l1.next, l2.next, ~~((l1.val + l2.val + plus) / 10)))
    } else if (l1 || l2) {
        return new ListNode(((l1 ? l1.val : l2.val) + plus) % 10, addTwoNumbers(l1 ? l1.next : l2.next, null, ~~(((l1 ? l1.val : l2.val) + plus) / 10)));
    } else {
        if (plus)
            return new ListNode(1);
        else
            return null;
    }
};
// @lc code=end

