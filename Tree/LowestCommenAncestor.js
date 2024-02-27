// Problem: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

// Recursive approach - Time: O(n) Space: O(n)

function lowestCommonAncestor(root, p, q) {
    if (!root || root == p || root == q) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    else return left || right;
}
