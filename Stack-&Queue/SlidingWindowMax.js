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

// Optimal Approach

// Time: O(n) Space: O(n)

function getNGL(arr, k) {
    let stack = [];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0 && i - stack[stack.length - 1] < k) {
            result.push(stack[stack.length - 1]);
        } else result.push(i);
        stack.push(i);
    }
    return result;
}

function maxSlidingWindowOA(nums, k) {
    let res = [];
    let NGL = getNGL(nums, k);
    let max = -Infinity;
    for (let p = 0; p < k; p++) {
        max = Math.max(max, nums[NGL[p]]);
    }
    res.push(max);
    let i = 1,
        j = k;
    while (i <= nums.length - k && j <= nums.length - 1) {
        if (k === 1) {
            max = nums[NGL[j]];
        } else max = Math.max(max, nums[NGL[j]]);
        res.push(max);
        i++;
        j++;
    }
    return res;
}

console.log(maxSlidingWindowOA([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindowOA([1, -1], 1));

// console.log(getNGL([1, 3, -1, -3, 5, 3, 6, 7], 3));
