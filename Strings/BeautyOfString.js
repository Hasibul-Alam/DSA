// Problem: https://leetcode.com/problems/sum-of-beauty-of-all-substrings/description/

function beautyOfString(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        let freqMap = new Map();
        for (let j = i; j < s.length; j++) {
            freqMap.set(s[j], (freqMap.get(s[j]) || 0) + 1);
            let max = -Infinity;
            let min = Infinity;
            for (let value of freqMap.values()) {
                if (value > max) max = value;
                if (value < min) min = value;
            }
            sum += max - min;
        }
    }
    return sum;
}

// Time: O(n^2) Space:O(1)

console.log(beautyOfString('aabcb'));
console.log(beautyOfString('aabcbaa'));
