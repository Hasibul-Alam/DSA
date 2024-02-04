// Problem: https://leetcode.com/problems/sum-of-subarray-ranges/description/

function getNGL(nums) {
    let stack = [];
    let res = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
            stack.pop();
        }
        res[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(i);
    }
    return res;
}

function getNGR(nums) {
    let stack = [];
    let res = new Array(nums.length).fill(0);
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
            stack.pop();
        }
        res[i] = stack.length === 0 ? nums.length : stack[stack.length - 1];
        stack.push(i);
    }
    return res;
}

function getNSL(arr) {
    const result = new Array(arr.length).fill(0);
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }

        result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(i);
    }

    return result;
}

function getNSR(arr) {
    const result = new Array(arr.length).fill(0);
    const stack = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }

        result[i] = stack.length === 0 ? arr.length : stack[stack.length - 1];
        stack.push(i);
    }

    return result;
}

var subArrayRanges = function (nums) {
    let NGL = getNGL(nums);
    let NGR = getNGR(nums);
    let NSL = getNSL(nums);
    let NSR = getNSR(nums);
    let max = 0;
    let min = 0;
    for (let i = 0; i < nums.length; i++) {
        max += (i - NGL[i]) * (NGR[i] - i) * nums[i];
        min += (i - NSL[i]) * (NSR[i] - i) * nums[i];
    }
    return max - min;
};

// Time: O(n) Space: O(n)

console.log(subArrayRanges([5, 2, -3, 7, 6]));
console.log(subArrayRanges([1, 2, 3]));
console.log(subArrayRanges([1, 3, 3]));
console.log(subArrayRanges([4, -2, -3, 4, 1]));
