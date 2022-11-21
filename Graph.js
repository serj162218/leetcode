class Node {
    constructor(val, next) {
        this.val = val ? val : null;
        this.next = next ? next : null;
    }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');

a.next = b;
b.next = c;
c.next = d;
d.next = a;

console.log(a.next.next.next.next);