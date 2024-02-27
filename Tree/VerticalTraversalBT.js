// Problem: https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/description/

// Time: O(n) Space: O(n)

var verticalTraversal = function (root) {
    const map = new Map();
    let queue = [[root, 0]];

    while (queue.length) {
        const level = new Map(),
            next = [];

        for (let [node, col] of queue) {
            if (!level.has(col)) level.set(col, [node.val]);
            else level.get(col).push(node.val);

            if (node.left) next.push([node.left, col - 1]);
            if (node.right) next.push([node.right, col + 1]);
        }

        for (let [col, val] of level) {
            if (!map.has(col)) map.set(col, []);
            map.get(col).push(...val.sort((a, b) => a - b));
        }
        queue = next;
    }
    return [...[...map.entries()].sort((a, b) => a[0] - b[0]).map((x) => x[1])];
};
