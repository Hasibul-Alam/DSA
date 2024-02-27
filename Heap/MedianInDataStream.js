// Problem: https://leetcode.com/problems/find-median-from-data-stream/

// Better Approach - Time: O(n+logn) Space: O(n)

var MedianFinder = function () {
    this.arr = [];
};

MedianFinder.prototype.addNum = function (num) {
    let start = 0;
    let end = this.arr.length;
    while (start < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (this.arr[mid] > num) end = mid;
        else start = mid + 1;
    }
    this.arr.splice(start, 0, num);
};

MedianFinder.prototype.findMedian = function () {
    let mid = Math.floor(this.arr.length / 2);
    if (this.arr.length % 2 == 0) {
        return (this.arr[mid - 1] + this.arr[mid]) / 2;
    } else return this.arr[mid];
};

// Optimal solution - Time: O(logn) Space: O(n);

var MedianFinder = function () {
    this.maxHeap = new MaxPriorityQueue();
    this.minHeap = new MinPriorityQueue();
};

MedianFinder.prototype.addNum = function (num) {
    if (this.maxHeap.size() == 0 || this.maxHeap.front().element > num) {
        this.maxHeap.enqueue(num);
    } else this.minHeap.enqueue(num);
    if (this.minHeap.size() > this.maxHeap.size()) {
        this.maxHeap.enqueue(this.minHeap.dequeue().element);
    } else if (Math.abs(this.maxHeap.size() - this.minHeap.size()) > 1) {
        this.minHeap.enqueue(this.maxHeap.dequeue().element);
    }
};

MedianFinder.prototype.findMedian = function () {
    if (this.maxHeap.size() > this.minHeap.size())
        return this.maxHeap.front().element;
    else
        return (
            (this.maxHeap.front().element + this.minHeap.front().element) / 2
        );
};

// Follow up: If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?

// Time: O(1) Space: O(1)

class MedianFinder {
    constructor() {
        this.frequencyTable = new Array(101).fill(0);
        this.totalCount = 0;
        this.median = null;
    }

    addNum(num) {
        this.frequencyTable[num]++;
        this.totalCount++;
        this.median = null; // Reset median cache
    }

    findMedian() {
        if (this.median !== null) {
            // If median is already calculated, return it
            return this.median;
        }

        let countSoFar = 0;
        let medianIndex = null;
        let prevMedianIndex = null;

        for (let i = 0; i <= 100; i++) {
            countSoFar += this.frequencyTable[i];
            if (
                medianIndex === null &&
                countSoFar >= Math.ceil(this.totalCount / 2)
            ) {
                medianIndex = i;
            }
            if (
                prevMedianIndex === null &&
                countSoFar >= Math.floor(this.totalCount / 2) + 1
            ) {
                prevMedianIndex = i;
            }
            if (medianIndex !== null && prevMedianIndex !== null) {
                break; // Found both median indices
            }
        }

        // if (this.totalCount % 2 === 0) {
        //     // If total count is even, return average of medians
        //     this.median = (medianIndex + prevMedianIndex) / 2;
        // } else {
        //     // If total count is odd, return median
        //     this.median = medianIndex;
        // }

        this.median = (medianIndex + prevMedianIndex) / 2;

        return this.median;
    }
}

// Example usage:
const medianFinder = new MedianFinder();
medianFinder.addNum(2);
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // Output: 2.5
medianFinder.addNum(4);
console.log(medianFinder.findMedian()); // Output: 3
console.log(medianFinder.findMedian()); // Output: 3
