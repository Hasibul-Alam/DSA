// Problem: https://leetcode.com/problems/same-tree/

// Time: O(n) Space: O(n)

var isSameTree = function (p, q) {
    let list1 = [];
    let list2 = [];

    function preorderTraversal(root, list) {
        if (!root) {
            list.push(null);
            return;
        }
        list.push(root.val);
        preorderTraversal(root.left, list);
        preorderTraversal(root.right, list);
    }

    preorderTraversal(p, list1);
    preorderTraversal(q, list2);

    if (list1.length !== list2.length) return false;
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] !== list2[i]) return false;
    }
    return true;
};
