// Problem: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

// Time: O(n) Space: O(n)

var zigzagLevelOrder = function (root) {
    if (!root) return [];
    const res = [];
    const queue = [root];
    let level = 1;
    while (queue.length) {
        const levelNodes = [];
        let n = queue.length;
        for (let i = 0; i < n; i++) {
            root = queue.shift();
            if (level % 2 === 0) {
                levelNodes.unshift(root.val); // Push the nodes in reverse order for even levels
            } else {
                levelNodes.push(root.val);
            }
            if (root.left) queue.push(root.left);
            if (root.right) queue.push(root.right);
        }
        level++;
        res.push(levelNodes);
    }
    return res;
};
