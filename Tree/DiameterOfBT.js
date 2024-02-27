// Problem: https://leetcode.com/problems/diameter-of-binary-tree/

// Brute force approach - Time: O(n^2) Space: O(n)

var diameterOfBinaryTree = function (root) {
    let diameter = 0;
    function findHeight(root) {
        if (!root) return 0;
        let leftHeight = findHeight(root.left);
        let rightHeight = findHeight(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    function findDiameter(root) {
        if (!root) return;
        let leftHeight = findHeight(root.left);
        let rightHeight = findHeight(root.right);
        diameter = Math.max(diameter, leftHeight + rightHeight);
        findDiameter(root.left);
        findDiameter(root.right);
    }
    findDiameter(root);
    return diameter;
};

// Optimal approach - O(n) Space:O(n)

var diameterOfBinaryTree = function (root) {
    let diameter = 0;
    function Depth(root) {
        if (!root) return 0;
        let leftHeight = Depth(root.left);
        let rightHeight = Depth(root.right);
        diameter = Math.max(diameter, leftHeight + rightHeight);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    Depth(root);
    return diameter;
};

// Without declaring `diameter` globally

var diameterOfBinaryTree = function (root) {
    // Helper function to calculate the depth and diameter of a node
    function depthAndDiameter(node) {
        if (!node) return { depth: 0, diameter: 0 };
        const left = depthAndDiameter(node.left);
        const right = depthAndDiameter(node.right);
        const currentDepth = Math.max(left.depth, right.depth) + 1;
        const currentDiameter = Math.max(
            left.depth + right.depth,
            left.diameter,
            right.diameter,
        );
        return { depth: currentDepth, diameter: currentDiameter };
    }

    const { diameter } = depthAndDiameter(root);
    return diameter;
};
