// Problem: https://leetcode.com/problems/find-bottom-left-tree-value/description/

// Recursive Approach - Time: O(n) Space: O(h)

var findBottomLeftValue = function (root) {
    let maxDepth = -1;
    let bottomLeft;
    function dfs(root, depth) {
        if (depth > maxDepth) {
            maxDepth = depth;
            bottomLeft = root.val;
        }
        if (root.left) dfs(root.left, depth + 1);
        if (root.right) dfs(root.right, depth + 1);
    }
    dfs(root, 0);
    return bottomLeft;
};

// Level order traversal approach - Time: O(n) Space: O(n)

var findBottomLeftValue = function (root) {
    const queue = [];
    queue.push(root);
    let bottomLeft;
    while (queue.length) {
        let node = queue.shift();
        bottomLeft = node.val;
        if (node.right) queue.push(node.right);
        if (node.left) queue.push(node.left);
    }
    return bottomLeft;
};
