// Problem: https://leetcode.com/problems/longest-palindromic-substring/description/
// Manacher's algorithm: https://leetcode.com/problems/longest-palindromic-substring/solutions/4480473/beats-98-82-optimal-linear-solution-video-walkthrough/

// Brute force approach

function palindromicSubstring(s) {
    if (s.length <= 1) return s;
    let lg = 1,
        res = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (j - i + 1 <= lg) continue;
            let l = i,
                h = j,
                ispal = true;
            while (l <= h) {
                if (s[l] !== s[h]) {
                    ispal = false;
                    break;
                }
                l++;
                h--;
            }
            if (ispal) {
                res = s.substring(i, j) + s[j];
                lg = j - i + 1;
            }
        }
    }
    if (res === '') return s[0];
    return res;
}

// Time: O(n^3) Space:O(1);

// DP approach

function palSubstring(s) {
    if (s.length <= 1) return s;
    let maxLn = 1;
    let maxStr = s[0];

    let dp = Array(s.length).fill(Array(s.length).fill(false));

    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        for (let j = 0; j < i; j++) {
            if (s[i] === s[j] && (i - j <= 2 || dp[(j + 1, i - 1)])) {
                dp[j][i] = true;
                if (i - j + 1 > maxLn) {
                    maxLn = i - j + 1;
                    maxStr = s.substring(j, i + 1);
                }
            }
        }
    }
    return maxStr;
}

// Time: O(n^2) Space: O(n^2);

// Optimal Approach: Time: O(n^2) Space:O(1)

function lgPalSubstring(s) {
    if (s.length <= 1) return s;

    let maxStr = s[0];

    function findPal(l, h) {
        while (l >= 0 && h <= s.length && s[l] === s[h]) {
            l -= 1;
            h += 1;
        }
        return s.substring(l + 1, h);
    }

    for (let i = 0; i < s.length - 1; i++) {
        let odd = findPal(i, i);
        let even = findPal(i, i + 1);

        if (odd.length > maxStr.length) maxStr = odd;
        if (even.length > maxStr.length) maxStr = even;
    }
    return maxStr;
}

// console.log(palindromicSubstring('babad'));
// console.log(palindromicSubstring('cbbd'));

console.log(lgPalSubstring('babad'));
console.log(lgPalSubstring('baccaa'));
