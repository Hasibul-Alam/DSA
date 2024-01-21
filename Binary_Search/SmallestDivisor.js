// Problem: https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/description/

function minDivisor(nums, threshold) {
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
    }

    let start = 1;
    let end = max;
    let ans = -1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += Math.ceil(nums[i] / mid);
        }
        if (sum <= threshold) {
            ans = mid;
            end = mid - 1;
        } else start = mid + 1;
    }
    return ans;
}

// Time: O(log(1~max(nums))*n); Space: O(1);

console.log(minDivisor([1, 2, 5, 9], (threshold = 6)));
console.log(minDivisor([44, 22, 33, 11, 1], (threshold = 5)));
