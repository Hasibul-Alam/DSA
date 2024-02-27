// Problem: https://leetcode.com/problems/binary-tree-level-order-traversal/description/

// Time: O(n) Space: O(n)

var levelOrder = function (root) {
    if (root === null) return [];

    let curr = root;
    let res = [];
    let queue = [curr];

    while (queue.length > 0) {
        let levelNodeKeys = [];
        let n = queue.length;
        for (let i = 0; i < n; i++) {
            let node = queue.shift();
            levelNodeKeys.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(levelNodeKeys);
    }

    return res;
};
