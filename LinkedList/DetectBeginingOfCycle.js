// Problem: https://leetcode.com/problems/linked-list-cycle-ii/description/

// Linked list hasn't been implemented. Only the function to detect begining of the cycle is provided.
function detectBegining(head) {
    let slow = head,
        fast = head,
        entry = head;
    while (fast || !fast.next) {
        slow = slow.next;
        fast = fast.next;
        if (slow === fast) {
            while (slow !== entry) {
                slow = slow.next;
                entry = entry.next;
            }
            return slow;
        }
    }
    return null;
}

// Time: O(n) Space: O(1)
