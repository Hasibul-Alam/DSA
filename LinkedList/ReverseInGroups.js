// Problem: https://leetcode.com/problems/reverse-nodes-in-k-group/description/

function findSize(node) {
    let size = 0;
    while (node) {
        size++;
        node = node.next;
    }
    return size;
}

var reverseKGroup = function (head, k) {
    if (k <= 1 || !head) {
        return head;
    }

    let newHead = null;
    let linker = null;
    let count = 0;
    let prev = null;
    let curr = head;
    let s = findSize(head);

    for (let i = 1; i <= Math.floor(s / k); i++) {
        let groupStart = curr;
        while (curr && count < k) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            count++;
        }

        if (count === k) {
            if (!newHead) {
                newHead = prev;
            }

            if (linker) {
                linker.next = prev;
            }

            groupStart.next = curr;
            linker = groupStart;
            prev = null;
            count = 0;
        }
    }

    return newHead;
};

// Time: O(n) Space: O(1);
