// Problem: https://leetcode.com/problems/binary-tree-postorder-traversal/description/

// Recursive Approach - Time:O(n) Space: O(height of the tree)
var postorderTraversal = function (root) {
    const res = [];
    function postOrder(root) {
        if (root === null) return;
        postOrder(root.left);
        postOrder(root.right);
        res.push(root.val);
    }
    postOrder(root);
    return res;
};

// Iterative Approach 1 - Time: O(n) Space: O(n) - UnBalanced Binary Tree;

var postorderTraversal = function (root) {
    const res = [];
    const stack = [root];

    while (stack.length > 0) {
        root = stack.at(-1);
        if (root.left) {
            stack.push(root.left);
            root.left = null;
        } else if (root.right) {
            stack.push(root.right);
            root.right = null;
        } else res.push(stack.pop().val);
    }
    return res;
};

// Iterative Approach 2 - Time: O(n) Space: O(n)
var postorderTraversal = function (root) {
    const res = [];
    const stack = [root];

    while (stack.length > 0) {
        root = stack.pop();
        if (root) {
            res.push(root.val);
            stack.push(root.left);
            stack.push(root.right);
        }
    }
    return res.reverse();
};
