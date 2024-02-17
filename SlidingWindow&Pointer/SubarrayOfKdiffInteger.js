// Problem: https://leetcode.com/problems/subarrays-with-k-different-integers/description/

// Brute Force Approach - Time: O(n^2) Space: O(k);

function findNumOfSubarray(nums, k) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let set = new Set();
        let count = 0;
        for (let j = i; j < nums.length; j++) {
            set.add(nums[j]);
            if (set.size == k) count++;
        }
        res += count;
    }
    return res;
}

// console.log(findNumOfSubarray([1, 2, 1, 2, 3], 2));
// console.log(findNumOfSubarray([1, 2, 1, 3, 4], 3));

// Optimal Approach 1 - Time: O(n) Space: O(k+1);

function subarraysWithKDistinct(nums, k) {
    // Function to count the number of subarrays with at most k distinct integers
    function atMostKDistinct(nums, k) {
        const n = nums.length;
        let count = 0;
        let left = 0;
        let frequency = {};

        for (let right = 0; right < n; right++) {
            if (!frequency[nums[right]]) {
                frequency[nums[right]] = 0;
            }
            frequency[nums[right]]++;

            // Shrink the window from the left side if the number of distinct integers exceeds k
            while (Object.keys(frequency).length > k) {
                frequency[nums[left]]--;
                if (frequency[nums[left]] === 0) {
                    delete frequency[nums[left]];
                }
                left++;
            }
            // Count the number of subarrays ending at right pointer
            count += right - left + 1;
        }

        return count;
    }

    // Number of subarrays with at most k distinct integers
    // minus
    // Number of subarrays with at most (k - 1) distinct integers
    return atMostKDistinct(nums, k) - atMostKDistinct(nums, k - 1);
}

// Example usage:
const nums = [1, 2, 1, 2, 3];
const k = 2;
console.log(
    'Number of subarrays with exactly',
    k,
    'different integers:',
    subarraysWithKDistinct(nums, k),
); // Output: 7

// Optimal Approach 2 - Time: O(n) Space: O(2k-1);

var subarraysWithKDistinct = function (nums, k) {
    const n = nums.length;
    let count = 0;
    let left1 = 0;
    let left2 = 0;
    let freq1 = {};
    let freq2 = {};
    let distinct1 = 0;
    let distinct2 = 0;

    for (let right = 0; right < n; right++) {
        const num = nums[right];

        // Update frequency and distinct counts for the first window
        if (!freq1[num]) {
            freq1[num] = 0;
            distinct1++;
        }
        freq1[num]++;

        // Update frequency and distinct counts for the second window
        if (!freq2[num]) {
            freq2[num] = 0;
            distinct2++;
        }
        freq2[num]++;

        // Shrink the first window from the left side until it has exactly k distinct integers
        while (distinct1 > k) {
            freq1[nums[left1]]--;
            if (freq1[nums[left1]] === 0) {
                distinct1--;
            }
            left1++;
        }

        // Shrink the second window from the left side until it has at most k distinct integers
        while (distinct2 > k - 1) {
            freq2[nums[left2]]--;
            if (freq2[nums[left2]] === 0) {
                distinct2--;
            }
            left2++;
        }

        // Count the number of subarrays ending at right pointer with exactly k distinct integers
        count += left2 - left1;
    }

    return count;
};
