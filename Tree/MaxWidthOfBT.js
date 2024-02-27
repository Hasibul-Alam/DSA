// Problem: https://leetcode.com/problems/maximum-width-of-binary-tree/description/

// Iterative approach - Time: O(n) Space: O(n)

var widthOfBinaryTree = function (root) {
    if (!root) return 0;
    let width = 0;
    const queue = [];
    queue.push([root, 0]);
    while (queue.length > 0) {
        const size = queue.length;
        const min = queue[0][1]; // to make the id starting from zero
        let first = 0,
            last = 0;
        for (let i = 0; i < size; i++) {
            let [node, index] = queue.shift();
            index = index - min;
            if (i === 0) first = index;
            if (i === size - 1) last = index;
            if (node.left !== null) queue.push([node.left, index * 2 + 1]);
            if (node.right !== null) queue.push([node.right, index * 2 + 2]);
        }
        width = Math.max(width, last - first + 1);
    }
    return width;
};
