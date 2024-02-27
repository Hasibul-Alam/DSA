// Problem: https://leetcode.com/problems/binary-tree-preorder-traversal/description/

// Recursive Approach - Time: O(n) Space: O(height of the tree)

var preorderTraversal = function (root) {
    const res = [];
    function preorder(root) {
        if (root) {
            res.push(root.val);
            preorder(root.left);
            preorder(root.right);
        }
    }
    preorder(root);
    return res;
};

// Iterative Approach - Time: O(n) Space: O(n) - UnBalanced Binary Tree

var preorderTraversal = function (root) {
    const res = [];
    const stack = [root];

    while (stack.length > 0) {
        root = stack.pop();
        if (root) {
            res.push(root.val);
            stack.push(root.right);
            stack.push(root.left);
        }
    }
    return res;
};

// Morris Traversal - Time:O(n) Space:O(1)

var preorderTraversal = function (root) {
    let curr = root;
    const res = [];
    while (curr) {
        if (!curr.left) {
            res.push(curr.val);
            curr = curr.right;
        } else {
            let next = curr.left;
            while (next.right && next.right !== curr) {
                next = next.right;
            }
            if (!next.right) {
                next.right = curr;
                res.push(curr.val);
                curr = curr.left;
            } else {
                next.right = null;
                curr = curr.right;
            }
        }
    }
    return res;
};
