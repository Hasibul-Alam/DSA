// Problem: https://leetcode.com/problems/binary-subarrays-with-sum/description/

// Brute force approach - Time: O(n^2) Space: O(1)

function numberOfSubarray(nums, goal) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === goal) count++;
            if (sum > goal) break;
        }
    }
    return count;
}

// console.log(numberOfSubarray([1, 0, 1, 0, 1], 2));
// console.log(numberOfSubarray([0, 1, 0, 0, 1, 0, 1], 2));
// console.log(numberOfSubarray([0, 0, 0, 0, 0], 0));
// console.log(numberOfSubarray([0], 1));

// Optimal Approach - Time: O(n) Space: O(n)

var numSubarraysWithSum = function (nums, goal) {
    let map = new Map();
    let prefixSum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if (prefixSum === goal) count++;
        if (map.has(prefixSum - goal)) count += map.get(prefixSum - goal);
        map.set(prefixSum, map.has(prefixSum) ? map.get(prefixSum) + 1 : 1);
    }
    return count;
};

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
console.log(numSubarraysWithSum([0], 1));
console.log(numSubarraysWithSum([0, 1, 0, 0, 1, 0, 1], 2));
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
