// Problem: https://www.codingninjas.com/studio/problems/implement-upper-bound_8165383?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

function upperBound(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let ans = nums.length;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] > target) {
            ans = mid;
            end = mid - 1;
        } else start = mid + 1;
    }
    return ans;
}

// Time: O(logN) Space: O(1)

console.log(upperBound([1, 2, 3, 3, 4, 5, 8], 7)); // 6

// target not in the array
console.log(upperBound([1, 5, 7, 13, 17, 21], 6)); //2
