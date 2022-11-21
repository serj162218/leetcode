function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let order = function (root) {
    if (!root) return [];
    let h = root;
    let ans = [];
    let stack = [];
    let map = new Map();
    do {
        if (h && map.get(h)) {
            map.set(h, map.get(h) + 1);
        } else if (h) {
            map.set(h, 1);
        }

        if (map.get(h) === 2) {
            ans.push(h);
        }

        if (!h) {
            h = stack.pop();
        }
        else if (h.left !== -1) {
            stack.push(h);
            let b = h.left;
            h.left = -1;
            h = b;
        } else if (h.right !== -1) {
            stack.push(h);
            let b = h.right;
            h.right = -1;
            h = b;
        } else if (h.left === -1 && h.right === -1) {
            h = stack.pop();
        }
    } while (stack.length || h === root);
    ans = ans.map(v => v.val);
    return ans;
};

let makeTree = function (list) {
}

let list = [1,2,3,4,5,6,7];
makeTree(list);