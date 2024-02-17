// Problem: https://leetcode.com/problems/minimum-window-substring/description/

// Brute force Approach: O(n^3) Space: O(n+m)

function minWindowSubstring(s, t) {
    let minWin = '';
    let minLength = Infinity;

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const substr = s.slice(i, j);
            if (containsAllChars(substr, t) && substr.length < minLength) {
                minWin = substr;
                minLength = substr.length;
            }
        }
    }

    return minWin;
}

function containsAllChars(str, target) {
    const targetChars = {};
    for (const char of target) {
        if (!targetChars[char]) targetChars[char] = 0;
        targetChars[char]++;
    }
    for (const char of str) {
        if (targetChars[char]) {
            targetChars[char]--;
        }
    }
    return Object.values(targetChars).every((val) => val <= 0);
}

console.log(minWindowSubstring('ADOBECODEBANC', 'ABC')); // Output: 'BANC'

// Optimal Approach - Time: O(n) Space: O(m)

function minWindowSubstring(s, t) {
    let minWin = '';
    let map = {};

    // Initialize the frequency map for characters in t
    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]]) map[t[i]] = 0;
        map[t[i]]++;
    }

    let len = 0,
        temp = { ...map },
        left = 0; // Initialize the left pointer

    for (let i = 0; i < s.length; i++) {
        // Check if the character at i is in t
        if (Object.hasOwnProperty.call(temp, s[i])) {
            // Update the frequency and count
            if (temp[s[i]] > 0) {
                len++;
            }
            temp[s[i]]--;
        }

        // Check if all characters in t are covered
        while (len === t.length) {
            // Update the minimum window
            if (minWin === '' || minWin.length > i - left + 1) {
                minWin = s.slice(left, i + 1);
            }

            // Check if the left character is in t
            if (Object.hasOwnProperty.call(temp, s[left])) {
                // Restore the frequency and count
                temp[s[left]]++;
                if (temp[s[left]] > 0) {
                    len--;
                }
            }
            // Move the left pointer to the next character
            left++;
        }
    }

    return minWin;
}

console.log(minWindowSubstring('ADOBECODEBANC', 'ABC'));
