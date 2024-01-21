// Problem: https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/

function numOfBouquets(bloomDay, mid, k) {
    let count = 0;
    let bouquets = 0;
    for (let i = 0; i < bloomDay.length; i++) {
        if (bloomDay[i] <= mid) {
            count += 1;
        } else {
            bouquets += Math.floor(count / k);
            count = 0;
        }
    }
    return (bouquets += Math.floor(count / k));
}

function findRange(arr) {
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    return [min, max];
}

function minDays(bloomDay, m, k) {
    let days = -1;
    if (bloomDay.length < m * k) return days;

    // Find the range of bloomDays
    let range = findRange(bloomDay);

    let start = range[0];
    let end = range[1];
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        let bouquets = numOfBouquets(bloomDay, mid, k);

        if (bouquets >= m) {
            days = mid;
            end = mid - 1;
        } else start = mid + 1;
    }
    return days;
}

// Time: O(log(range of bloomDays)*n) Space: O(1)

console.log(minDays([1, 10, 3, 10, 2], (m = 3), (k = 1))); // 3
console.log(minDays([1, 10, 3, 10, 2], (m = 3), (k = 2))); // -1
console.log(minDays([7, 7, 7, 7, 12, 7, 7], (m = 2), (k = 3))); // 12
