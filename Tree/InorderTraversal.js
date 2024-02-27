// Problem: https://leetcode.com/problems/binary-tree-inorder-traversal/description/

// Recursive Approach - Time: O(n) Space: O(height of the tree)

var inorderTraversal = function (root) {
    const res = [];
    function inorder(root) {
        if (root == null) return;
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};

// Iterative Approach - Time: O(n) Space: O(n)

var inorderTraversal = function (root) {
    const res = [];
    const stack = [];

    while (true) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        if (stack.length === 0) return res;
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
};

// Morris Traversal - Time: O(n) Space:O(1);

var inorderTraversal = function (root) {
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
                curr = curr.left;
            } else {
                next.right = null;
                res.push(curr.val);
                curr = curr.right;
            }
        }
    }
    return res;
};
