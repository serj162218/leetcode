import * as ts from "./LinkedList module.js";
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
var reverseList = function (head) {
    let prev, next, curr;
    prev = null;
    curr = head;
    while (curr) {
        //save curr.next
        next = curr.next;
        //curr.next point to prev
        curr.next = prev;

        prev = curr;
        curr = next;
    }
    return prev;
};
let list = ts.makeLinkedList([1, 2, 3, 4, 5]);
let ans = reverseList(list);
ts.printLinkedList(ans);