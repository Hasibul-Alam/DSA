class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(node) {
        const newNode = new Node(node);
        let curr = this.root;
        if (!curr) {
            this.root = newNode;
            return this;
        }
        while (curr) {
            if (curr.value > node) {
                if (!curr.left) {
                    curr.left = newNode;
                    return this;
                }
                curr = curr.left;
            } else {
                if (!curr.right) {
                    curr.right = newNode;
                    return this;
                }
                curr = curr.right;
            }
        }
    }

    lookup(node) {
        let curr = this.root;
        while (curr) {
            if (curr.value > node) curr = curr.left;
            else if (curr.value < node) curr = curr.right;
            else return true;
        }
        return false;
    }

    remove(node) {
        let curr = this.root;
        let parent = null;
        while (curr) {
            if (curr.value > node) {
                parent = curr;
                curr = curr.left;
            } else if (curr.value < node) {
                parent = curr;
                curr = curr.right;
            } else {
                if (!curr) return false;
                while (curr) {
                    if (curr.right) {
                        curr.value = curr.right.value;
                        const temp = curr.right;
                        if (!temp.left && !temp.right) {
                            curr.right = null;
                            return true;
                        }
                        curr = curr.right;
                    } else if (curr.left) {
                        curr.value = curr.left.value;
                        const temp = curr.left;
                        if (!temp.left && !temp.right) {
                            curr.left = null;
                            return true;
                        }
                        curr = curr.left;
                    } else {
                        parent.left.value === node
                            ? (parent.left = null)
                            : (parent.right = null);
                        curr = null;
                        return true;
                    }
                }
            }
        }
    }

    traverse(node) {
        const Tree = { value: node.value };
        Tree.left = node.left === null ? null : this.traverse(node.left);
        Tree.right = node.right === null ? null : this.traverse(node.right);
        return Tree;
    }
}

const myBST = new BST();
myBST.insert(15);
myBST.insert(9);
myBST.insert(6);
myBST.insert(21);
myBST.insert(17);
myBST.insert(12);
myBST.insert(26);
// console.log(myBST);
console.log(myBST.lookup(17));
console.log(myBST.lookup(71));
myBST.remove(21);
myBST.remove(71);
// console.log(myBST);
// console.log(myBST.root.right);
console.log(JSON.stringify(myBST.traverse(myBST.root)));
