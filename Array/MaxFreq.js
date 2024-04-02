// Problem: https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/

// Binary Search Approach - Time: O(nlogn) Space: O(n)

var maxFrequency = function (nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const prefixSum = new Array(n).fill(0);
    prefixSum[0] = nums[0];

    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
    }

    let result = 0;

    for (let i = 0; i < n; i++) {
        result = Math.max(result, binarySearch(i, nums, k, prefixSum));
    }
    return result;

    function binarySearch(targetIdx, nums, k, prefixSum) {
        const target = nums[targetIdx];
        let i = 0;
        let j = targetIdx;
        let result = targetIdx;

        while (i <= j) {
            const mid = i + Math.floor((j - i) / 2);
            const count = targetIdx - mid + 1;
            const windowSum = count * target;
            const currSum = prefixSum[targetIdx] - prefixSum[mid] + nums[mid];
            const ops = windowSum - currSum;

            if (ops > k) {
                i = mid + 1;
            } else {
                result = mid;
                j = mid - 1;
            }
        }

        return targetIdx - result + 1;
    }
};

// Sliding Window approach - Time: O(nlogn) Space:O(1)

var maxFrequency = function (nums, k) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let maxFreq = 0;
    let left = 0;
    let sum = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        // Shrink the window if the condition is violated
        while ((right - left + 1) * nums[right] - sum > k) {
            sum -= nums[left];
            left++;
        }
        maxFreq = Math.max(maxFreq, right - left + 1);
    }

    return maxFreq;
};
