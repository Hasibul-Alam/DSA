// Problem: https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1

// Iterative approach - Time: O(n) Space: O(n);

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function bottomView(root) {
    if (!root) return [];
    const queue = [[root, 0]];
    const map = new Map();
    const res = [];
    while (queue.length) {
        const [node, col] = queue.shift();
        map.set(col, node.val);
        if (node.left) queue.push([node.left, col - 1]);
        if (node.right) queue.push([node.right, col + 1]);
    }
    for (let [_, val] of [...map.entries()].sort((a, b) => a[0] - b[0])) {
        res.push(val);
    }
    return res;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(bottomView(root));
