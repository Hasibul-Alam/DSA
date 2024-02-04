// Problem: https://leetcode.com/problems/sum-of-subarray-minimums/

// Brute force approach

var sumSubarrayMins = function (arr) {
    let res = 0;
    let mod = Math.pow(10, 9) + 7;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let min = Infinity;
            for (let k = i; k <= j; k++) {
                if (arr[k] < min) min = arr[k];
            }
            res = (res + min) % mod;
        }
    }
    return res;
};

// Time: O(n^3) Space: O(1)

// Better Approach

var sumSubarrayMins1 = function (arr) {
    let res = 0;
    let mod = Math.pow(10, 9) + 7;
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        for (let j = i; j < arr.length; j++) {
            min = Math.min(min, arr[j]);
            res = (res + min) % mod;
        }
    }
    return res;
};

// Time: O(n^2) Space: O(1)

// Optimal Approach

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

var sumSubarrayMins = function (arr) {
    let mod = 1000000007;
    let NSL = getNSL(arr);
    let NSR = getNSR(arr);
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumInTotalways = (i - NSL[i]) * (NSR[i] - i) * arr[i];
        res = (res + sumInTotalways) % mod;
    }

    return res;
};

// Time: O(n) Space: O(n)
