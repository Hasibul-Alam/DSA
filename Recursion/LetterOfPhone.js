// Problem: https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

// Recursive Approach - Time: O(4^n * n) Space: (4^n);

var letterCombinations = function (digits) {
    function findLetterCombinations(idx, digits, str) {
        if (idx === digits.length) {
            res.push(str);
            return;
        }
        const s = map.get(digits[idx]);
        for (let i = 0; i < s.length; i++) {
            let newstr = str + s[i];
            findLetterCombinations(idx + 1, digits, newstr);
        }
    }
    if (digits.length === 0) return [];
    const map = new Map();
    map.set('2', 'abc');
    map.set('3', 'def');
    map.set('4', 'ghi');
    map.set('5', 'jkl');
    map.set('6', 'mno');
    map.set('7', 'pqrs');
    map.set('8', 'tuv');
    map.set('9', 'wxyz');
    const res = [];
    findLetterCombinations(0, digits, '');
    return res;
};
