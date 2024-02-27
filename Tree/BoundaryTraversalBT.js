// Problem: https://www.codingninjas.com/studio/problems/boundary-traversal-of-binary-tree_790725?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

// Time: O(n) Space: O(logn) to O(n);

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var boundaryOfBinaryTree = function (root) {
    if (!root) return [];

    // Preorder traversal to collect left boundary nodes (excluding leaf nodes)
    let leftBoundary = [];
    collectLeftBoundary(root.left, leftBoundary);

    // Inorder traversal to collect leaf nodes
    let leaves = [];
    collectLeaves(root, leaves);

    // Postorder traversal to collect right boundary nodes (excluding leaf nodes)
    let rightBoundary = [];
    collectRightBoundary(root.right, rightBoundary);

    // Combine the results of the traversals
    return [root.val, ...leftBoundary, ...leaves, ...rightBoundary];
};

function collectLeftBoundary(node, boundary) {
    if (!node || (!node.left && !node.right)) return; // Exclude leaf nodes

    boundary.push(node.val);

    if (node.left) {
        collectLeftBoundary(node.left, boundary);
    } else {
        collectLeftBoundary(node.right, boundary);
    }
}

function collectLeaves(node, leaves) {
    if (!node) return;

    if (!node.left && !node.right) {
        leaves.push(node.val);
        return;
    }

    collectLeaves(node.left, leaves);
    collectLeaves(node.right, leaves);
}

function collectRightBoundary(node, boundary) {
    if (!node || (!node.left && !node.right)) return; // Exclude leaf nodes

    if (node.right) {
        collectRightBoundary(node.right, boundary);
    } else {
        collectRightBoundary(node.left, boundary);
    }

    boundary.push(node.val);
}

// Example usage:
// Create a binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);

console.log(boundaryOfBinaryTree(root)); // Output: [1, 2, 4, 7, 8, 6, 3]
