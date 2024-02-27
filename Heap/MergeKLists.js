// Problem: https://leetcode.com/problems/merge-k-sorted-lists/

// Optimal Approach - Time: O(nlogk) Space:O(k)

function createListNode(val = 0, next = null) {
    return {
        val: val,
        next: next,
    };
}

function createMinPriorityQueue() {
    const heap = [];

    function enqueue(node) {
        heap.push(node);
        bubbleUp(heap.length - 1);
    }

    function dequeue() {
        if (isEmpty()) return null;
        const minNode = heap[0];
        const lastNode = heap.pop();
        if (!isEmpty()) {
            heap[0] = lastNode;
            bubbleDown(0);
        }
        return minNode;
    }

    function isEmpty() {
        return heap.length === 0;
    }

    function bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (heap[parentIndex].val > heap[index].val) {
                [heap[parentIndex], heap[index]] = [
                    heap[index],
                    heap[parentIndex],
                ];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    function bubbleDown(index) {
        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let smallestIndex = index;
            if (
                leftIndex < heap.length &&
                heap[leftIndex].val < heap[smallestIndex].val
            ) {
                smallestIndex = leftIndex;
            }
            if (
                rightIndex < heap.length &&
                heap[rightIndex].val < heap[smallestIndex].val
            ) {
                smallestIndex = rightIndex;
            }
            if (smallestIndex !== index) {
                [heap[index], heap[smallestIndex]] = [
                    heap[smallestIndex],
                    heap[index],
                ];
                index = smallestIndex;
            } else {
                break;
            }
        }
    }

    return {
        enqueue,
        dequeue,
        isEmpty,
    };
}

function mergeKLists(lists) {
    const minHeap = createMinPriorityQueue();

    // Add the heads of all lists to the min heap
    for (const list of lists) {
        if (list) minHeap.enqueue(list);
    }

    const dummy = createListNode();
    let tail = dummy;

    // Keep dequeueing the smallest node from the min heap
    // and add its next node to the min heap until the heap is empty
    while (!minHeap.isEmpty()) {
        const smallest = minHeap.dequeue();
        tail.next = smallest;
        tail = tail.next;
        if (smallest.next) {
            minHeap.enqueue(smallest.next);
        }
    }

    return dummy.next;
}

// Example usage:
const list1 = createListNode(1, createListNode(4, createListNode(5)));
const list2 = createListNode(1, createListNode(3, createListNode(4)));
const list3 = createListNode(2, createListNode(6));
const mergedList = mergeKLists([list1, list2, list3]);
console.log(mergedList); // Output: { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 4, next: { val: 5, next: { val: 6, next: null } } } } } } }
