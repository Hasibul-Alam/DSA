// Problem: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

// Time: O(n) Space: O(n)

var buildTree = function (preorder, inorder) {
    const inMap = new Map();
    inorder.forEach((e, i) => inMap.set(e, i));
    const root = buildBinaryTree(
        preorder,
        0,
        preorder.length - 1,
        inorder,
        0,
        inorder.length - 1,
        inMap,
    );
    return root;
    function buildBinaryTree(
        preorder,
        preStart,
        preEnd,
        inorder,
        inStart,
        inEnd,
        inMap,
    ) {
        if (preStart > preEnd && inStart > inEnd) return null;
        const root = new TreeNode(preorder[preStart]);
        const inRoot = inMap.get(preorder[preStart]);
        const numLeft = inRoot - inStart;
        root.left = buildBinaryTree(
            preorder,
            preStart + 1,
            preStart + numLeft,
            inorder,
            inStart,
            inRoot - 1,
            inMap,
        );
        root.right = buildBinaryTree(
            preorder,
            preStart + numLeft + 1,
            preEnd,
            inorder,
            inRoot + 1,
            inEnd,
            inMap,
        );
        return root;
    }
};
