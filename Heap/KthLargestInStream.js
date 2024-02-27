// Problem: https://leetcode.com/problems/kth-largest-element-in-a-stream/description/

// Brute force - Time: O(n*logn) Space: O(n)

var KthLargest = function (k, nums) {
    this.maxPQ = new MaxPriorityQueue();
    this.k = k;
    for (let i = 0; i < nums.length; i++) {
        this.maxPQ.enqueue(nums[i]);
    }
};

KthLargest.prototype.add = function (val) {
    this.maxPQ.enqueue(val);
    let temp = [];
    for (let i = 0; i < this.k; i++) {
        temp.push(this.maxPQ.dequeue().element);
    }
    let res = temp.at(-1);
    for (let i = 0; i < this.k; i++) {
        this.maxPQ.enqueue(temp[i]);
    }
    return res;
};

// Optimal approach - Time: initialization - O(n*logn), O(logk) Space: O(k)

var KthLargest = function (k, nums) {
    this.minPQ = new MinPriorityQueue();
    this.k = k;
    for (let i = 0; i < nums.length; i++) {
        this.minPQ.enqueue(nums[i]);
        if (this.minPQ.size() > this.k) {
            this.minPQ.dequeue().element;
        }
    }
};

KthLargest.prototype.add = function (val) {
    this.minPQ.enqueue(val);
    if (this.minPQ.size() > this.k) {
        this.minPQ.dequeue().element;
    }
    return this.minPQ.front().element;
};
