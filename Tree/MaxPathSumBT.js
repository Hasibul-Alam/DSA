// Problem: https://leetcode.com/problems/binary-tree-maximum-path-sum/description/

// Optimal approach - Time: O(n), Space: O(n).

var maxPathSum = function (root) {
    function helper(root) {
        if (!root) return { maxPath: -Infinity, pathSum: -Infinity }; // Initialize both maxPath and pathSum as negative infinity
        const left = helper(root.left);
        const right = helper(root.right);
        const currMaxPath = Math.max(
            left.maxPath + root.val,
            right.maxPath + root.val,
            root.val,
        );
        const currPathSum = Math.max(
            currMaxPath,
            left.pathSum,
            right.pathSum,
            left.maxPath + root.val + right.maxPath,
        );
        return { maxPath: currMaxPath, pathSum: currPathSum };
    }
    const { pathSum } = helper(root);
    return pathSum === -Infinity ? 0 : pathSum; // If pathSum is still negative infinity, return 0
};
