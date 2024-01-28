// Problem: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

function rmNthNode(head, n) {
    let curr = head,
        count = 0;
    while (curr) {
        count += 1;
        curr = curr.next;
    }
    let d = count - n;
    if (d == 0) {
        head = head.next;
        return head;
    }
    let temp = head;
    count = 0;
    while (temp) {
        count += 1;
        if (d == count) {
            temp.next = temp.next.next;
            return head;
        }
        temp = temp.next;
    }
}

// Time: O(n) Space:O(1)

function DeleteNthNodefromEnd(head, N) {
    // Create two pointers, fastp and slowp
    let fastp = head;
    let slowp = head;

    // Move the fastp pointer N nodes ahead
    for (let i = 0; i < N; i++) fastp = fastp.next;

    // If fastp becomes null, the Nth node from the end is the head
    if (fastp === null) return head.next;

    // Move both pointers until fastp reaches the end
    while (fastp.next !== null) {
        fastp = fastp.next;
        slowp = slowp.next;
    }

    // Delete the Nth node from the end
    let delNode = slowp.next;
    slowp.next = slowp.next.next;
    delNode = null;
    return head;
}

// Time: O(n) Space:O(1)
