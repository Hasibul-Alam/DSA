// Problem: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

// Recursive Approach - Time: O(n) Space: O(h)

var flatten = function (root) {
    const dummyRoot = new TreeNode(0);
    let curr = dummyRoot;
    function preorder(root) {
        if (!root) return;
        curr.right = root;
        curr.left = null;
        curr = root;
        let rightSubtree = root.right;
        preorder(root.left);
        preorder(rightSubtree);
    }
    preorder(root, curr);
    return dummyRoot.right;
};

// Iterative Approach - Time: O(n) Space:O(n)

var flatten = function (root) {
    if (!root) return [];
    const stack = [];
    stack.push(root);
    while (stack.length) {
        const current = stack.pop();
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
        if (stack.length > 0) current.right = stack.at(-1);
        current.left = null;
    }
    return root;
};

// Morris Traversal approach - Time:O(n) Space:O(1);

var flatten = function (root) {
    let curr = root;
    while (curr) {
        if (!curr.left) {
            curr = curr.right;
        } else {
            let next = curr.left;
            while (next.right && next.right !== curr) {
                next = next.right;
            }
            if (!next.right) {
                next.right = curr.right;
                curr.right = curr.left;
                curr.left = null;
                curr = curr.right;
            } else {
                next.right = null;
                curr = curr.right;
            }
        }
    }
    return root;
};
