// Problem: https://leetcode.com/problems/copy-list-with-random-pointer/description/?envType=study-plan-v2&envId=top-interview-150

// Approach I: Time:O(n) Space: O(n)
class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
        this.random = null;
    }
}

function copyRandomList(head) {
    const hashMap = new Map();

    // First iteration for inserting deep nodes of every node in the hashmap.
    let temp = head;
    while (temp !== null) {
        const newNode = new Node(temp.val);
        hashMap.set(temp, newNode);
        temp = temp.next;
    }

    // Second iteration for linking next and random pointer as given in the question.
    let t = head;
    while (t !== null) {
        const node = hashMap.get(t);
        node.next = t.next !== null ? hashMap.get(t.next) : null;
        node.random = t.random !== null ? hashMap.get(t.random) : null;
        t = t.next;
    }

    return hashMap.get(head);
}

function printList(head) {
    while (head !== null) {
        console.log(
            `${head.val}: ${head.next ? head.next.val : 'NULL'}, ${
                head.random ? head.random.val : 'NULL'
            }`,
        );
        head = head.next;
    }
}

// Main function
function main() {
    let head = null;

    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);

    head = node1;
    head.next = node2;
    head.next.next = node3;
    head.next.next.next = node4;

    head.random = node4;
    head.next.random = node1;
    head.next.next.random = null;
    head.next.next.next.random = node2;

    console.log(
        'Original list: (current node: node pointed by next pointer, node pointed by random pointer)',
    );
    printList(head);

    console.log(
        'Copy list: (current node: node pointed by next pointer, node pointed by random pointer)',
    );
    const newHead = copyRandomList(head);
    printList(newHead);
}

// Run the main function
main();

// Approach II: Time: O(n) Space:O(1)

function copyRandomList(head) {
    let temp = head;

    // Step 1
    while (temp !== null) {
        let newNode = new Node(temp.val);
        newNode.next = temp.next;
        temp.next = newNode;
        temp = temp.next.next;
    }

    // Step 2
    let itr = head;
    while (itr !== null) {
        if (itr.random !== null) itr.next.random = itr.random.next;
        itr = itr.next.next;
    }

    // Step 3
    let dummy = new Node(0);
    itr = head;
    temp = dummy;
    let fast;
    while (itr !== null) {
        fast = itr.next.next;
        temp.next = itr.next;
        itr.next = fast;
        temp = temp.next;
        itr = fast;
    }

    return dummy.next;
}
