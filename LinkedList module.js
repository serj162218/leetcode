function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
class LinkedList {
    constructor() {
        this.node = new ListNode(-1);
    }
    append(val) {
        let head = this.node;
        while (head.next) {
            head = head.next;
        }
        head.next = new ListNode(val);
    }
}
export let printLinkedList = function(list){
    let head = list;
    let arr = [];
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr);
}
export let makeLinkedList = function(a){
    let list = new LinkedList();
    for(let i = 0;i<a.length;i++){
        list.append(a[i]);
    }
    return list.node.next;
}