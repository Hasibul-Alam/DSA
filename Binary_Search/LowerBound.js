// Problem: https://www.codingninjas.com/studio/problems/lower-bound_8165382?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

function lowerBound(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let ans = nums.length;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) {
            ans = mid;
            end = mid - 1;
        } else start = mid + 1;
    }
    return ans;
}

// Time: O(logN) Space: O(1)

console.log(lowerBound([-1, 0, 3, 5, 9, 12], 7)); // 4

// target not in the array
console.log(lowerBound([-1, 0, 3, 5, 9, 12], 13)); // -1
