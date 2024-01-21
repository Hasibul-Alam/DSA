// Problem: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

function findMin(nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (start < mid && nums[mid] < nums[mid - 1]) return nums[mid];
        if (mid < end && nums[mid] > nums[mid + 1]) return nums[mid + 1];
        if (nums[start] <= nums[mid]) start = mid + 1;
        else end = mid - 1;
    }
    return nums[0];
}

// Time: O(logN) Space:O(1)

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([1, 2, 3, 3, 5, 6, 0])); // 0
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17])); // 11
