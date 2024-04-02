// Problem: https://leetcode.com/problems/maximum-subarray/description/

// Brute Force Approach - Time: O(n^2) Space: O(1)

var maxSubArray = function (nums) {
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
};

// Better approach: Time:O(nlogn) Space:O(h)

var maxSubArray = function (nums) {
    return maxSubArrayHelper(nums, 0, nums.length - 1);
};

function maxSubArrayHelper(nums, left, right) {
    if (left === right) {
        return nums[left];
    }

    const mid = Math.floor((left + right) / 2);
    const leftMax = maxSubArrayHelper(nums, left, mid);
    const rightMax = maxSubArrayHelper(nums, mid + 1, right);
    const crossMax = maxCrossingSubarray(nums, left, mid, right);

    return Math.max(leftMax, rightMax, crossMax);
}

function maxCrossingSubarray(nums, left, mid, right) {
    let leftSum = -Infinity;
    let sum = 0;
    for (let i = mid; i >= left; i--) {
        sum += nums[i];
        leftSum = Math.max(leftSum, sum);
    }

    let rightSum = -Infinity;
    sum = 0;
    for (let i = mid + 1; i <= right; i++) {
        sum += nums[i];
        rightSum = Math.max(rightSum, sum);
    }

    return leftSum + rightSum;
}

// Optimal Approach (Kadane's Algorithm) - Time: O(n) Space: O(1);

var maxSubArray = function (nums) {
    let sum = 0;
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i]);
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};
