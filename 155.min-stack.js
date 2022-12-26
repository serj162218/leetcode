/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start
class Node {
    constructor(val, min, next) {
        this.val = val;
        this.min = min;
        this.next = next;
    }
}
class MinStack {
    constructor() {
        this.head = new Node(null, null, null);
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.head = new Node(val, Math.min(val, this.head.min), this.head);
    }
    /**
     * @return {void}
     */
    pop() {
        this.head = this.head.next;
    }
    /**
     * @return {number}
     */
    top() {
        return this.head.val;
    }
    /**
     * @return {number}
     */
    getMin() {
        return this.head.min;
    }
}


/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

