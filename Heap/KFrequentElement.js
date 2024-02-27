// Problem: https://leetcode.com/problems/top-k-frequent-elements/

// Brute force approach - Time: O(nlogn) Space: O(n)

function kElements(nums, k) {
    let map = new Map();
    let res = [];
    nums.forEach((element) => {
        map.set(element, map.has(element) ? map.get(element) + 1 : 1); // Update the count of each element
    });

    map = Array.from(map).sort((a, b) => b[1] - a[1]);

    let i = 0;
    for (let [key, _] of map) {
        // Use destructuring to get key and ignore value
        res.push(key);
        i++;
        if (i === k) break;
    }
    return res;
}

console.log(kElements([1, 1, 1, 2, 2, 3], 2));

// Brute force approach 2 - Time: O(nlogn) Space: O(n)

var topKFrequent = function (nums, k) {
    let maxPQ = new MaxPriorityQueue({ priority: (x) => x[1] });
    let map = new Map();
    let res = [];
    nums.forEach((element) => {
        map.set(element, map.has(element) ? map.get(element) + 1 : 1); // Update the count of each element
    });

    for (const [key, value] of map.entries()) {
        maxPQ.enqueue([key, value]);
    }

    for (let i = 0; i < k; i++) {
        res.push(maxPQ.dequeue().element[0]);
    }
    return res;
};

// Optimal Approach - Time: O(n) Space:O(n)

var topKFrequent = function (nums, k) {
    const map = new Map();
    const buckets = new Array(nums.length + 1).fill(null).map(() => []); // Create new arrays for each bucket
    const res = [];

    nums.forEach((element) => {
        map.set(element, map.has(element) ? map.get(element) + 1 : 1); // Update the count of each element
    });

    for (const [key, value] of map.entries()) {
        buckets[value].push(key);
    }

    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i].length > 0) res.push(...buckets[i]);
        if (res.length === k) break;
    }

    return res;
};
