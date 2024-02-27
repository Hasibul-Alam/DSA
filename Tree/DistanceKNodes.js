// Problem: https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/
// In leetcode, target node is provided.

// Time: O(n) Space: O(n)

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var distanceK = function (root, target, k) {
    function createParentMap(root, parentMap) {
        const queue = [root];
        parentMap.set(root, null);
        while (queue.length) {
            const node = queue.shift();
            if (node.left) {
                parentMap.set(node.left, node);
                queue.push(node.left);
            }
            if (node.right) {
                parentMap.set(node.right, node);
                queue.push(node.right);
            }
        }
        return parentMap;
    }
    function findTargetNode(root, target) {
        if (!root || root.val === target) return root;
        let left = findTargetNode(root.left, target);
        let right = findTargetNode(root.right, target);
        return left || right;
    }
    function findDistanceKnodes(root, target, k) {
        const parentMap = new Map();
        createParentMap(root, parentMap);
        const targetNode = findTargetNode(root, target); // Pass root along with target
        if (!targetNode) return [];
        const queue = [targetNode];
        const visited = new Set();
        visited.add(targetNode);
        let distance = 0;
        while (queue.length) {
            if (distance === k) break;
            let n = queue.length;
            for (let i = 0; i < n; i++) {
                const node = queue.shift();
                if (node.left && !visited.has(node.left)) {
                    queue.push(node.left);
                    visited.add(node.left);
                }
                if (node.right && !visited.has(node.right)) {
                    queue.push(node.right);
                    visited.add(node.right);
                }
                if (parentMap.get(node) && !visited.has(parentMap.get(node))) {
                    queue.push(parentMap.get(node));
                    visited.add(parentMap.get(node));
                }
            }
            distance++;
        }
        const res = [];
        if (queue.length) {
            for (let node of queue) {
                res.push(node.val);
            }
        }
        return res;
    }
    return findDistanceKnodes(root, target, k);
};

const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

console.log(distanceK(root, 5, 2));
