// Problem: https://leetcode.com/problems/subarray-sum-equals-k/description/

/* 
Brute force approach:

Run nested for loops.
Loop 1 runs the whole array, while Loop 2 runs from i+1;
Continuously sum up the subarrays and check if it is equal to k.
If so, increase the counter.

Time: O(n^2) Space: O(1)

Approach 2 (Kadane Algorithm):

Use a data structure - hashmap
Calculate the prefix sum x at every index, then subtract k from it and check if the result exists in the hashmap.
If so, increase the counter by the # of occurrences of the result in the hashmap.
Initially, set hashmap(0,1), because x-k=0 means found a subarray.

If X - k in hashmap; count += hashmap[x-k]
If X in hashmap; hashmap[x] += 1
Else hashmap[x] = 1

*/
function NoOfSubarrays(nums, k) {
    let hashmap = new Map();
    let prefixSum = 0;
    let count = 0;
    hashmap.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        let diff = prefixSum - k;
        if (hashmap.has(diff)) count += hashmap.get(diff);
        if (hashmap.has(prefixSum))
            hashmap.set(prefixSum, hashmap.get(prefixSum) + 1);
        else hashmap.set(prefixSum, 1);
    }
    return count;
}

// Time: O(n) Space:O(n)

console.log(NoOfSubarrays([1, 1, 1], 2));
console.log(NoOfSubarrays([1, 2, 3], 3));
console.log(NoOfSubarrays([-2, 5, 10, -5, 5, -7, 19], 15));
