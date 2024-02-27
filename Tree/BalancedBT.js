// Problem: https://leetcode.com/problems/balanced-binary-tree/description/

// Brute force approach - Time: O(n^2) Space: O(n)

function isBalanced(root) {
    function findHeight(root) {
        if (!root) return 0;
        let left = findHeight(root.left);
        let right = findHeight(root.right);
        return Math.max(left, right) + 1;
    }

    function checkBalance(root) {
        if (!root) return true;
        let leftHeight = findHeight(root.left);
        let rightHeight = findHeight(root.right);
        if (Math.abs(leftHeight - rightHeight) > 1) return false;
        return checkBalance(root.left) && checkBalance(root.right);
    }
    return checkBalance(root);
}

// Optimal approach - Time: O(n) Space- O(n)

function isBalanced(root) {
    if (!root) return true;
    function checkBalance(root) {
        if (!root) return 0;
        let leftHeight = checkBalance(root.left);
        if (leftHeight === false) return false;
        let rightHeight = checkBalance(root.right);
        if (rightHeight === false) return false;
        if (Math.abs(leftHeight - rightHeight) > 1) return false;
        return Math.max(leftHeight, rightHeight) + 1;
    }
    return checkBalance(root) !== false;
}
