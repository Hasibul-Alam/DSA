// Problem: https://leetcode.com/problems/single-element-in-a-sorted-array/description/

function findSingleElement(nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        let halvesAreEven = (end - mid) % 2 === 0;
        if (start === mid && nums[mid] !== nums[mid + 1]) return nums[mid];
        if (end === mid && nums[end] !== nums[mid - 1]) return nums[mid];
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1])
            return nums[mid];
        if (mid < end && nums[mid] === nums[mid + 1]) {
            if (halvesAreEven) start = mid + 2;
            else end = mid - 1;
        } else if (start < mid && nums[mid] === nums[mid - 1]) {
            if (halvesAreEven) end = mid - 2;
            else start = mid + 1;
        }
    }
}

// Time: O(logN) Space: O(1)

console.log(findSingleElement([1, 1, 2, 3, 3, 4, 4, 8, 8])); // 2
console.log(findSingleElement([3, 3, 7, 7, 10, 11, 11])); // 10
// console.log(findSingleElement())
