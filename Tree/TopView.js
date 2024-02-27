// Problem: https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1

// Iterative approach - Time: O(n) Space: O(n)

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function topView(root) {
    if (!root) return [];

    // Create a map to store nodes at each vertical position
    const map = new Map();

    // Queue to perform level order traversal along with the horizontal distance of each node
    const queue = [{ node: root, col: 0 }];

    // Perform level order traversal
    while (queue.length) {
        const { node, col } = queue.shift();

        // If the horizontal distance is not already in the map, add the node to the map
        if (!map.has(col)) {
            map.set(col, node.val);
        }

        // Enqueue left and right child nodes with their respective horizontal distances
        if (node.left) {
            queue.push({ node: node.left, col: col - 1 });
        }
        if (node.right) {
            queue.push({ node: node.right, col: col + 1 });
        }
    }

    // Extract nodes from the map in ascending order of their horizontal distances
    const result = [];
    for (const [, val] of [...map.entries()].sort((a, b) => a[0] - b[0])) {
        result.push(val);
    }

    return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(topView(root)); // Output: [4, 2, 1, 3, 7]
