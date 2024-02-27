// Problem: https://leetcode.com/problems/count-complete-tree-nodes/description/

// Brute force approach - Time: O(n) Space: O(logn)

var countNodes = function (root) {
    let count = 0;
    function traverse(root) {
        if (!root) return;
        count++;
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    return count;
};

// Optimal Approach - Time: O((logn)^2) Space: O(logn)

var countNodes = function (root) {
    function findLeftHeight(root) {
        if (!root) return 0;
        return findLeftHeight(root.left) + 1;
    }
    function findRightHeight(root) {
        if (!root) return 0;
        return findRightHeight(root.right) + 1;
    }
    function countNoOfNodes(root) {
        if (!root) return 0;
        let lh = findLeftHeight(root);
        let rh = findRightHeight(root);
        if (lh == rh) return (1 << lh) - 1;
        let left = countNoOfNodes(root.left);
        let right = countNoOfNodes(root.right);
        return left + right + 1;
    }
    return countNoOfNodes(root);
};
