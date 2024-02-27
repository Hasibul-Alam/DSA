// Problem: https://leetcode.com/problems/symmetric-tree/description/

// Iterative approach - Time: O(n) Space: O(n)

var isSymmetric = function (root) {
    const deque = [[root.left, root.right]];
    while (deque.length) {
        let [left, right] = deque.shift();
        if (!left || !right) {
            if (!left && !right) continue; // Both are null, continue checking
            return false; // One of them is null, not symmetric
        }
        if (left.val !== right.val) return false; // Values are different, not symmetric
        deque.push([left.left, right.right]);
        deque.push([left.right, right.left]);
    }
    return true; // Both subtrees are symmetric
};

// Recusive approach - Time: O(n) Space: O(Height of the tree);

var isSymmetric = function (root) {
    function helper(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        let p = helper(left.left, right.right);
        let q = helper(left.right, right.left);
        return p && q;
    }
    return helper(root.left, root.right);
};
