// Problem: https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/

function minWeightCapacity(weights, days) {
    let sum = 0;
    let max = -Infinity;
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
        if (max < weights[i]) max = weights[i];
    }
    let start = max;
    let end = sum;
    let minWC = -1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        let d = 0;
        let wc = weights[0];
        for (let i = 1; i < weights.length; i++) {
            if (wc + weights[i] > mid) {
                d += 1;
                wc = 0;
            }
            wc += weights[i];
        }
        d += 1;
        if (d <= days) {
            minWC = mid;
            end = mid - 1;
        } else start = mid + 1;
    }
    return minWC;
}

// Time: O(log(1~sum(weights))*n) Space: O(1)

console.log(minWeightCapacity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (days = 5))); // 15
console.log(minWeightCapacity([3, 2, 2, 4, 1, 4], (days = 3))); // 6
console.log(minWeightCapacity([1, 2, 3, 1, 1], (days = 4))); // 3
