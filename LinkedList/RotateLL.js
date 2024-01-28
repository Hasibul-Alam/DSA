// Problem: https://leetcode.com/problems/rotate-list/

// Approach 1:

// Steps to the algorithm:-

// 1. Calculate the length of the list.
// 2. Connect the last node to the first node, converting it to a circular linked list.
// 3. Iterate to cut the link of the last node and start a node of k%length of the list rotated list.

function rotateRight(head, k) {
    if (head === null || head.next === null || k === 0) {
        return head;
    }

    // Calculate length
    let temp = head;
    let length = 1;
    while (temp.next !== null) {
        length++;
        temp = temp.next;
    }

    // Link the last node to the first node
    temp.next = head;

    // Adjust k if it is more than the length of the list
    k = k % length;

    // Find the new head position
    let end = length - k;
    while (end > 0) {
        temp = temp.next;
        end--;
    }

    // Break the last node link and point to NULL
    head = temp.next;
    temp.next = null;

    return head;
}

// Time: O(n) Space: O(1);

// Approach 2:

function reverse(node) {
    let prev = null;
    while (node) {
        let next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return prev;
}

function findSize(head) {
    let size = 0;
    let current = head;

    while (current !== null) {
        size++;
        current = current.next;
    }

    return size;
}

var rotateRight = function (head, k) {
    if (!head || !head.next) return head;
    let n = findSize(head);
    k = k % n; // Corrected computation of k
    if (k === 0) return head; // No need to rotate if k is 0

    let reverseHead = reverse(head);
    let curr = reverseHead;
    let nextHead;

    let count = 0;
    while (curr) {
        count++;
        if (count === k) {
            nextHead = curr.next;
            curr.next = null;
        } else {
            curr = curr.next;
        }
    }

    let newHead = reverse(reverseHead);
    let temp = newHead;
    while (temp.next) {
        temp = temp.next;
    }

    nextHead = reverse(nextHead);
    temp.next = nextHead;

    return newHead;
};

// Time: O(n) Space: O(1);
