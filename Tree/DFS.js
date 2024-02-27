// Problem: https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

// Iterative approach - Time: O(n) Space: O(n)- Unbalanced Binary tree; O(logn) - Balanced Binary tree;

var maxDepth = function (root) {
    let depthCount = 1;
    let stack = [[root, depthCount]];
    let depth = 0;
    while (stack.length) {
        let [root, depthCount] = stack.pop();
        depth = Math.max(depth, depthCount);
        if (root.left) stack.push([root.left, depthCount + 1]);
        if (root.right) stack.push([root.right, depthCount + 1]);
    }
    return depth;
};

// Recursive approach - Time: O(n) Space:O(Height of the tree)

var maxDepth = function (root) {
    if (!root) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};
