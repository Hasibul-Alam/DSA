// Problem: https://leetcode.com/problems/intersection-of-two-linked-lists/description/

function getDifference(head1, head2) {
    let len1 = 0,
        len2 = 0;
    while (head1 || head2) {
        if (head1) {
            len1 += 1;
            head1 = head1.next;
        }
        if (head2) {
            len2 += 1;
            head2 = head2.next;
        }
    }
    return len1 - len2;
}

function getIntersection(headA, headB) {
    let diff = getDifference(headA, headB);
    if (diff < 0) {
        while (diff++ !== 0) {
            headB = headB.next;
        }
    } else {
        while (diff-- !== 0) {
            headA = headA.next;
        }
    }
    while (headA) {
        if ((headA = headB)) return headA;
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
}

// Time: O(max(n,m)) Space:O(1)
