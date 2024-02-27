// Problem: https://leetcode.com/problems/binary-tree-right-side-view/description/

// Iterative approach - Time: O(n) Space: O(n)

var rightSideView = function (root) {
    if (!root) return [];
    const deque = [root];
    const res = [];
    while (deque.length) {
        let lastNode = null;
        let n = deque.length;
        for (let i = 0; i < n; i++) {
            let node = deque.shift();
            lastNode = node.val;
            if (node.left) deque.push(node.left);
            if (node.right) deque.push(node.right);
        }
        res.push(lastNode);
    }
    return res;
};

// Recursive approach - Time: O(n) Space: O(n)

var rightSideView = function (root) {
    const res = [];

    // Define a recursive helper function to traverse the tree
    const traverse = function (node, level) {
        if (!node) return;

        // If the current level is equal to the length of the result array, it means we're visiting this level for the first time
        // So, we add the node's value to the result array
        if (level === res.length) {
            res.push(node.val);
        }

        // Recur for the right child first, so that the rightmost node at each level is visited first
        traverse(node.right, level + 1);
        traverse(node.left, level + 1);
    };

    // Start the traversal from the root node at level 0
    traverse(root, 0);

    return res;
};
