// Problem: https://leetcode.com/problems/count-number-of-nice-subarrays/description/

// Optimal approach (convert this problem to BinarrySubarraySum.js)

var numberOfSubarrays = function (nums, k) {
    let res = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        nums[i] % 2 == 0 ? (nums[i] = 0) : (nums[i] = 1);
        sum += nums[i];
        nums[i] = sum;
        if (nums[i] >= k && map.has(nums[i] - k)) {
            res += map.get(nums[i] - k);
        }
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
    }
    return res;
};

console.log(numberOfSubarray([1, 1, 2, 1, 1], 3));
console.log(numberOfSubarray([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
