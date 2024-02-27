// Problem: https://leetcode.com/problems/binary-tree-level-order-traversal/

// Iterative approach - Time: O(n) Space: O(n)

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

// Recursive approach - Time: O(n) Space: O(n)

var levelOrder = function (root) {
    const res = [];

    // Define a recursive helper function to traverse the tree level by level
    const traverse = function (node, level) {
        if (!node) return;

        // If the current level is equal to the length of the result array, it means we're visiting this level for the first time
        // So, we create a new array for this level in the result array
        if (level === res.length) {
            res.push([]);
        }

        // Add the node's value to the array corresponding to its level
        res[level].push(node.val);

        // Recur for the left and right children with the incremented level
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    };

    // Start the traversal from the root node at level 0
    traverse(root, 0);

    return res;
};
