/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @param {ListNode} head
 * @return {ListNode}
 */

// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }
// let a = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
var reverseList = function (head) {
    let tmp, p;
    while (head) {
        tmp = head.next;
        head.next = p;
        p = head;
        head = tmp;
    }
    return p;
};
// reverseList(a);
// @lc code=end

