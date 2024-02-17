// Problem: https://leetcode.com/problems/reverse-linked-list-ii/description/?envType=study-plan-v2&envId=top-interview-150

function reverseList(node) {
    let prev = null;
    let tail;
    let next;
    while (node) {
        next = node.next;
        node.next = prev;
        if (!node.next) tail = node;
        prev = node;
        node = next;
    }
    return [prev, tail];
}

var reverseBetween = function (head, left, right) {
    let start = 1;
    let curr = head;
    let end = 0;
    while (curr) {
        end++;
        curr = curr.next;
    }
    // case 1: List length is one.
    if (left == right && start == end) return head;

    // case 2: Considering the whole list.
    if (left == start && right == end) {
        let [newHead, tail] = reverseList(head);
        return newHead;
    }

    // case 3: When left==start and right < end.
    if (left == start && right < end) {
        let temp = head;
        let head2;
        let count = 0;
        while (temp) {
            count++;
            if (count == right) {
                head2 = temp.next;
                temp.next = null;
            }
            temp = temp.next;
        }
        let [head1, tail] = reverseList(head);
        tail.next = head2;
        return head1;
    }

    // case 4: when left>start and right==end.
    if (left > start && right == end) {
        let temp = head;
        let count = 0;
        let head2;
        let tail;
        while (temp) {
            count++;
            if (count == left - 1) {
                head2 = temp.next;
                temp.next = null;
                tail = temp;
            }
            temp = temp.next;
        }
        let [newHead, t] = reverseList(head2);
        tail.next = newHead;
        return head;
    }

    // case 5: when left > start and right < end.
    if (left > start && right < end) {
        let curr = head;
        let head1;
        let head2;
        let tail;
        let count = 0;
        while (curr) {
            count++;
            if (count == right) {
                head2 = curr.next;
                curr.next = null;
            }
            curr = curr.next;
        }
        count = 0;
        curr = head;
        while (curr) {
            count++;
            if (count == left - 1) {
                head1 = curr.next;
                curr.next = null;
                tail = curr;
            }
            curr = curr.next;
        }
        let [newHead, t] = reverseList(head1);
        tail.next = newHead;
        t.next = head2;
        return head;
    }
};

// Time: O(n) Space: O(1);
