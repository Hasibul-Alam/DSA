// Problem: https://leetcode.com/problems/find-peak-element/description/

function findPickElement(nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
        if (nums[mid] < nums[mid + 1]) start = mid + 1;
        else end = mid - 1;
    }
}

// Time: O(logN) Space: O(1);

console.log(findPickElement([1, 2, 3, 1])); // 2
console.log(findPickElement([1, 2, 1, 3, 5, 6, 4])); // 1 or 5
