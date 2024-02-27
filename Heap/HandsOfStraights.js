// Problem: https://leetcode.com/problems/hand-of-straights/description/

// Brute Force Approach - Time: O(n^2) Space: O(n)

function handsOfStraights(hand, groupSize) {
    let set = new Set();
    hand = hand.sort((a, b) => a - b);
    while (set.size < hand.length) {
        let temp = [];
        for (let i = 0; i < hand.length; i++) {
            if (!set.has(i)) {
                if (
                    temp.length === 0 ||
                    (temp.length > 0 && hand[i] === temp[temp.length - 1] + 1)
                ) {
                    temp.push(hand[i]);
                    set.add(i);
                }
            }
            if (temp.length === groupSize) break;
        }
        if (groupSize > temp.length) return false;
    }
    return true;
}

console.log(
    handsOfStraights((hand = [1, 2, 3, 6, 2, 3, 4, 7, 8]), (groupSize = 3)),
);

console.log(handsOfStraights((hand = [1, 2, 3, 4, 5]), (groupSize = 4)));

// Better Approach - Time: O(nlogn) Space: O(k)

var isNStraightHand = function (hand, groupSize) {
    hand.sort((a, b) => a - b);
    let map = new Map();
    for (let i = 0; i < hand.length; i++) {
        map.set(hand[i], map.get(hand[i]) + 1 || 1);
    }
    for (let i = 0; i < hand.length; i++) {
        if (map.get(hand[i]) == 0) continue;
        for (let j = hand[i]; j < groupSize + hand[i]; j++) {
            if (map.has(j) && map.get(j) > 0) {
                map.set(j, map.get(j) - 1);
            } else return false;
        }
    }
    return true;
};

// Optimal Approach - Time: O(nlogk) Space: O(k)

function priorityQueue() {
    const heap = [];

    function enqueue(val, frequency) {
        heap.push({ val, frequency });
        bubbleUp(heap.length - 1);
    }

    function dequeue() {
        if (isEmpty()) return null;
        const removeItem = heap[0];
        const lastItem = heap.pop();
        if (!isEmpty()) {
            heap[0] = lastItem;
            bubbleDown(0);
        }
        return removeItem;
    }

    function isEmpty() {
        return heap.length === 0;
    }

    function bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (heap[index].val < heap[parentIndex].val) {
                [heap[index], heap[parentIndex]] = [
                    heap[parentIndex],
                    heap[index],
                ];
                index = parentIndex;
            } else break;
        }
    }

    function bubbleDown(index) {
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallestIndex = index;
            if (
                leftChild < heap.length &&
                heap[leftChild].val < heap[smallestIndex].val
            ) {
                smallestIndex = leftChild;
            }
            if (
                rightChild < heap.length &&
                heap[rightChild].val < heap[smallestIndex].val
            ) {
                smallestIndex = rightChild;
            }
            if (smallestIndex !== index) {
                [heap[index], heap[smallestIndex]] = [
                    heap[smallestIndex],
                    heap[index],
                ];
                index = smallestIndex;
            } else break;
        }
    }
    return {
        enqueue,
        dequeue,
        isEmpty,
    };
}

function handsOfStraights(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false; // Hand cannot be evenly divided into groups
    const minPQ = new priorityQueue();
    const map = new Map();
    for (let i = 0; i < hand.length; i++) {
        map.set(hand[i], (map.get(hand[i]) || 0) + 1);
    }
    for (let [val, frequency] of map.entries()) {
        minPQ.enqueue(val, frequency);
    }
    while (!minPQ.isEmpty()) {
        const temp = [];
        let prevVal = null;
        for (let i = 0; i < groupSize; i++) {
            const item = minPQ.dequeue();
            if (!item) return false; // If priority queue is empty, not enough cards to form a group
            if (prevVal !== null && item.val !== prevVal + 1) return false; // Cards are not consecutive
            temp.push(item);
            prevVal = item.val;
        }
        for (let item of temp) {
            if (item.frequency > 1) minPQ.enqueue(item.val, item.frequency - 1); // Re-enqueue remaining cards
        }
    }
    return true;
}

console.log(handsOfStraights([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)); // Output: true

console.log(handsOfStraights((hand = [1, 2, 3, 4, 5]), (groupSize = 4)));
