// Problem: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

// Time: O(n) Space:O(n)

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Codec {
    serialize(root) {
        if (root === null) return '';
        const q = [];
        let res = '';
        q.push(root);
        while (q.length > 0) {
            const node = q.shift();
            if (node === null) {
                res += 'n ';
                continue;
            }
            res += node.val + ' ';
            q.push(node.left);
            q.push(node.right);
        }
        return res.trim(); // Remove trailing whitespace
    }

    deserialize(data) {
        if (data === '') return null;
        const q = [];
        const values = data.split(' ');
        const root = new TreeNode(parseInt(values[0]));
        q.push(root);
        for (let i = 1; i < values.length; i++) {
            const parent = q.shift();
            if (values[i] !== 'n') {
                const left = new TreeNode(parseInt(values[i]));
                parent.left = left;
                q.push(left);
            }
            if (values[++i] !== 'n') {
                const right = new TreeNode(parseInt(values[i]));
                parent.right = right;
                q.push(right);
            }
        }
        return root;
    }
}

// Example usage:
const codec = new Codec();
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

const serializedTree = codec.serialize(root);
console.log('Serialized tree:', serializedTree);

const deserializedTree = codec.deserialize(serializedTree);
console.log('Deserialized tree:', deserializedTree);
