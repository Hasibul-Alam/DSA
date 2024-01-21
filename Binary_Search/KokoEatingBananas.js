// Problem: https://leetcode.com/problems/koko-eating-bananas/description/

function minBananaPerHour(piles, h) {
    // Find max
    let max = -1;
    for (let i = 0; i < piles.length; i++) {
        if (piles[i] > max) max = piles[i];
    }

    // find banana eating speed where hours can be smaller or equal
    // to h, but when small, it should be the greatest among the smalls.
    let start = 1;
    let end = max;
    let ans = -1;
    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);
        let hours = 0;
        for (let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / mid);
        }
        if (hours <= h) {
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return ans;
}

// Time: O(nlog(max(piles))); Space:O(1);

console.log(minBananaPerHour([3, 6, 7, 11], 8)); // 4
console.log(minBananaPerHour([30, 11, 23, 4, 20], (h = 5))); // 30
console.log(minBananaPerHour([30, 11, 23, 4, 20], (h = 6))); // 23
console.log(minBananaPerHour([312884470], 312884469)); // 2 (Example hours is less then h)
