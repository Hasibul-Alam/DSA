// Problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Optimal Approach: Hashmap

// Time: O(n) Space:O(k) k- the # of unique chars or O(1) as the # of unique chars of a string is fixed regardless of input

var lengthOfLongestSubstring = function (s) {
    let longest = 0;
    let begin = 0;
    let count = 0;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) count++;
        else {
            begin = map.get(s[i]) < begin ? begin : map.get(s[i]);
            count = i - begin;
        }
        map.set(s[i], i);
        longest = Math.max(longest, count);
    }
    return longest;
};

// Optimal Approach: Two pointer

// Time: O(n) Space:O(k) k- the # of unique chars or O(1) as the # of unique chars of a string is fixed regardless of input

function lengthOfLongestSubstring(str) {
    if (str.length === 0) {
        return 0;
    }
    let maxans = -Infinity;
    let setx = new Set();
    let l = 0;
    for (let r = 0; r < str.length; r++) {
        // outer loop for traversing the string
        if (setx.has(str[r])) {
            // if duplicate element is found
            while (l < r && setx.has(str[r])) {
                setx.delete(str[l]);
                l += 1;
            }
        }
        setx.add(str[r]);
        maxans = Math.max(maxans, r - l + 1);
    }
    return maxans;
}
