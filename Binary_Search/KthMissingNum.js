// Problem: https://leetcode.com/problems/kth-missing-positive-number/

function findKthMissingNum(arr, k) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        let missing = arr[mid] - (mid + 1);
        if (missing < k) {
            if (mid === arr.length - 1) return arr[mid] + (k - missing);
            start = mid + 1;
        } else if (missing > k) {
            let prevMissing = arr[mid - 1] - (mid - 1 + 1);
            if (prevMissing > k) end = mid - 1;
            else if (prevMissing === k) return arr[mid - 1] - 1;
            else return arr[mid] - (missing - k) - 1;
        } else {
            while (arr[mid] - arr[mid - 1] === 1) {
                mid -= 1;
            }
            return arr[mid] - 1;
        }
    }
}

// Time: O(logN); Space: O(1);

console.log(findKthMissingNum([2, 3, 4, 7, 11], (k = 5)));
console.log(findKthMissingNum([1, 2, 3, 4], (k = 2)));
console.log(
    findKthMissingNum(
        [3, 7, 11, 12, 21, 29, 34, 35, 36, 37, 40, 45, 50, 59, 77, 78],
        (k = 2),
    ),
);
