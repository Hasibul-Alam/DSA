// Problem: https://leetcode.com/problems/sliding-window-maximum/description/

// Brute force approach:

// Time: O(n*k)  Space: O(n-k+1) or O(1) if space for holding output is not counted;

function maxSlidingWindowBFA(nums, k) {
    let i = 0;
    let j = k - 1;
    let res = [];
    while (i <= nums.length - k && j <= nums.length - 1) {
        let max = nums[i];
        for (let p = i; p <= j; p++) {
            max = Math.max(max, nums[p]);
        }
        res.push(max);
        i++;
        j++;
    }
    return res;
}

// console.log(maxSlidingWindowBFA([1, 3, -1, -3, 5, 3, 6, 7], (k = 3)));
// console.log(maxSlidingWindowBFA([1], (k = 1)));

// Better approach using priority queue: Time: O(nlogk) or O(nlogn) Space: O(n);

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.heap[parentIndex] >= this.heap[currentIndex]) {
                break;
            }

            [this.heap[parentIndex], this.heap[currentIndex]] = [
                this.heap[currentIndex],
                this.heap[parentIndex],
            ];
            currentIndex = parentIndex;
        }
    }

    heapifyDown() {
        let currentIndex = 0;

        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let swapIndex = null;

            if (
                leftChildIndex < this.heap.length &&
                this.heap[leftChildIndex] > this.heap[currentIndex]
            ) {
                swapIndex = leftChildIndex;
            }

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex] > this.heap[currentIndex]
            ) {
                if (
                    swapIndex === null ||
                    this.heap[rightChildIndex] > this.heap[swapIndex]
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) {
                break;
            }

            [this.heap[currentIndex], this.heap[swapIndex]] = [
                this.heap[swapIndex],
                this.heap[currentIndex],
            ];
            currentIndex = swapIndex;
        }
    }
}

function maxSlidingWindow(nums, k) {
    const result = [];
    const maxHeap = new MaxHeap();

    for (let i = 0; i < nums.length; i++) {
        maxHeap.push(nums[i]);

        if (i >= k - 1) {
            result.push(maxHeap.peek());

            const indexToRemove = i - k + 1;
            const elementToRemove = nums[indexToRemove];
            const heapIndex = maxHeap.heap.indexOf(elementToRemove);

            if (heapIndex !== -1) {
                maxHeap.heap[heapIndex] = -Infinity; // Replace the element with negative infinity
                maxHeap.heapifyDown();
            }
        }
    }

    return result;
}

// Example usage:
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
const result = maxSlidingWindow(nums, k);
console.log(result); // Output: [3,3,5,5,6,7]

// Optimal Approach using Deque

// Time: O(n) Space: O(n-k+1)

function maxSlidingWindowOA(nums, k) {
    let res = [];
    let deque = [];
    for (let i = 0; i < nums.length; i++) {
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }
        if (deque[0] <= i - k) deque.shift();
        deque.push(i);
        if (i >= k - 1) res.push(nums[deque[0]]);
    }
    return res;
}

console.log(maxSlidingWindowOA([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindowOA([1, -1], 1));
console.log(maxSlidingWindowOA([1], 1));
