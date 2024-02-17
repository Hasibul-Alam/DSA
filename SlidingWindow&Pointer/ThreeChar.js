// Problem: https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

// Time: O(n) Space: O(1)

var numberOfSubstrings = function (s) {
    let count = 0;
    let windowStart = 0;
    let charCount = { a: 0, b: 0, c: 0 };

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let rightChar = s[windowEnd];
        charCount[rightChar]++;

        // Shrink the window from the left side if the substring contains all three characters
        while (charCount['a'] > 0 && charCount['b'] > 0 && charCount['c'] > 0) {
            let leftChar = s[windowStart];
            charCount[leftChar]--;
            windowStart++;
        }

        // All substrings ending at windowEnd have at least one occurrence of 'a', 'b', and 'c'
        count += windowStart;
    }

    return count;
};
