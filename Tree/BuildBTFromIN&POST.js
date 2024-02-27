// Problem: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/

// Time: O(n) Space: O(n)

var buildTree = function (inorder, postorder) {
    const inMap = new Map();
    inorder.forEach((e, i) => inMap.set(e, i));
    const root = buildBinaryTree(
        postorder,
        0,
        postorder.length - 1,
        inorder,
        0,
        inorder.length - 1,
        inMap,
    );
    return root;
    function buildBinaryTree(
        postorder,
        postStart,
        postEnd,
        inorder,
        inStart,
        inEnd,
        inMap,
    ) {
        if (postStart > postEnd || inStart > inEnd) return null;
        const root = new TreeNode(postorder[postEnd]);
        const inRoot = inMap.get(postorder[postEnd]);
        const numLeft = inRoot - inStart;
        root.left = buildBinaryTree(
            postorder,
            postStart,
            postStart + numLeft - 1,
            inorder,
            inStart,
            inRoot - 1,
            inMap,
        );
        root.right = buildBinaryTree(
            postorder,
            postStart + numLeft,
            postEnd - 1,
            inorder,
            inRoot + 1,
            inEnd,
            inMap,
        );
        return root;
    }
};
