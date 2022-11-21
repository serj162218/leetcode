class Tree {
    constructor(val) {
        this.root = new Heap(val);
    }
    add(val, heap = this.root) {
        if (val >= heap.val) {
            if (heap.right !== null) {
                this.add(val, heap.right);
            } else {
                heap.right = new Heap(val);
            }
        } else {
            if (heap.left !== null) {
                this.add(val, heap.left);
            } else {
                heap.left = new Heap(val);
            }
        }
    }
}

class Heap {
    constructor(val, left, right) {
        this.val = val ? val : null;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }
}

let tree = new Tree(1);
tree.add(2);
tree.add(3);
console.log(tree);