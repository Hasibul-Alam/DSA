// Problem: https://leetcode.com/problems/sort-list/description/

// Approach 1: Time: O(nlogn) Space: O(1)

function findMiddle(node) {
    let slow = node;
    let fast = node;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function merge(left, right) {
    let dummy = new ListNode(0); // Use a dummy node
    let curr = dummy;

    while (left && right) {
        if (left.val <= right.val) {
            curr.next = left;
            left = left.next;
        } else {
            curr.next = right;
            right = right.next;
        }
        curr = curr.next;
    }

    if (left) {
        curr.next = left;
    }

    if (right) {
        curr.next = right;
    }

    return dummy.next;
}

var sortList = function (head) {
    if (!head || !head.next) return head;
    let mid = findMiddle(head);
    let rightHead = mid.next;
    mid.next = null;
    let leftHead = head;
    let left = sortList(leftHead);
    let right = sortList(rightHead);
    return merge(left, right);
};

// Optimal approach: Time: O(nlogn) Space: O(1)

function findSize(head) {
    let size = 0;
    let current = head;

    while (current !== null) {
        size++;
        current = current.next;
    }

    return size;
}

function splitList(head, step) {
    let i = 1;
    let current = head;

    while (current !== null && i < step) {
        current = current.next;
        i++;
    }

    if (current === null) {
        return null;
    }

    let nextHead = current.next;
    current.next = null;

    return nextHead;
}

function merge(left, right, tail) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (left !== null && right !== null) {
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }

    current.next = left !== null ? left : right;

    while (current.next !== null) {
        current = current.next;
    }

    tail.next = dummy.next;

    return current;
}

var sortList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    const size = findSize(head);
    let dummy = new ListNode(0);
    dummy.next = head;

    for (let step = 1; step < size; step *= 2) {
        let current = dummy.next;
        let tail = dummy;

        while (current !== null) {
            let left = current;
            let right = splitList(left, step);
            current = splitList(right, step);

            tail = merge(left, right, tail);
        }
    }

    return dummy.next;
};
