// Problem: https://leetcode.com/problems/longest-repeating-character-replacement/description/

// Optimal Approach: Time: O(n) Space: O(26) or O(1);
var characterReplacement = function (s, k) {
    // create frequency map
    let map = new Map();
    let max = 0;
    let maxCount = 0;
    let l = 0;

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        maxCount = Math.max(maxCount, map.get(s[i]));

        // If the number of characters to change (i - l + 1 - maxCount) is greater than k, move left pointer
        while (i - l + 1 - maxCount > k) {
            map.set(s[l], map.get(s[l]) - 1);
            l++;
        }

        max = Math.max(max, i - l + 1);
    }

    return max;
};

console.log(characterReplacement('ABCDACD', 2));
