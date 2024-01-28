// Problem: https://leetcode.com/problems/palindrome-linked-list/

function reverseLinkedList(head) {
    let temp = head;
    let prev = null;
    while (temp !== null) {
        let front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
}

function isPalindrome(head) {
    if (head === null || head.next === null) {
        return true;
    }

    // Initialize two pointers, slow and fast,
    // to find the middle of the linked list
    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    const newHead = reverseLinkedList(slow.next);

    let first = head;

    let second = newHead;

    while (second !== null) {
        if (first.val !== second.val) {
            // reverseLinkedList(newHead);
            return false;
        }
        first = first.next;
        second = second.next;
    }

    // reverseLinkedList(newHead);
    return true;
}

// Time: O(n) Space: O(1)
