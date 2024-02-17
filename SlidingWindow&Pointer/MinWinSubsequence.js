// Problem: https://leetcode.com/problems/minimum-window-subsequence/description/

// Optimal Approach - Time: O(n) Space: O(1)

function minWindowSubsequence(s, t) {
    let minWindow = '';
    let minLength = Infinity;
    let sIndex = 0; // Start index of the current window in s

    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[sIndex]) {
            // If current character matches with current character of t
            sIndex++;
            if (sIndex === t.length) {
                // If entire t is found in s
                let end = i + 1; // End index of the current window in s
                sIndex--; // Move sIndex back to the last character of t
                while (sIndex >= 0) {
                    // Backtrack to find the starting index of the window
                    if (s[i] === t[sIndex]) {
                        sIndex--;
                    }
                    i--;
                }
                sIndex++; // Move sIndex to the first character of t
                i++; // Move i back to the last character of t
                const currentLength = end - i; // Calculate the length of the current window
                if (currentLength < minLength) {
                    // Update minWindow and minLength if the current window is smaller
                    minWindow = s.substring(i, end);
                    minLength = currentLength;
                }
            }
        }
    }

    return minWindow;
}

console.log(minWindowSubsequence('abcdebdde', 'bde')); // Output: 'bcde'
console.log(minWindowSubsequence('dynamicprogramming', 'mm')); // Output: 'mm'
