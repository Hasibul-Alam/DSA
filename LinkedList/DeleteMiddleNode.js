// Problem: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/

function deleteMiddleNode(head) {
    if (!head.next) return null;

    let prev = null;
    let slow = head,
        fast = head;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = slow.next;
    return head;
}

// Time: O(n) Space: O(1)
