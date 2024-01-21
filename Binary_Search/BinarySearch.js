// Problem: https://leetcode.com/problems/binary-search/description/

function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return -1;
}

// Time: O(logN) Space: O(1);

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 1));
