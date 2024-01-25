// Problem: https://leetcode.com/problems/sort-characters-by-frequency/description/

// Brute force approach

function sortChars(s) {
    const hashMap = s.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
    const sortedArr = Object.keys(hashMap).sort(
        (a, b) => hashMap[b] - hashMap[a],
    );
    return sortedArr.reduce((acc, char) => {
        acc += char.repeat(hashMap[char]);
        return acc;
    }, '');
}

// Time: O(nlogn) Space: O(n)

// Optimal approach

function sortCharacters(s) {
    const charMap = new Map();

    for (let i = 0; i < s.length; i++) {
        charMap.set(s[i], (charMap.get(s[i]) || '') + s[i]);
    }

    const arr = [];
    charMap.forEach((value) => {
        const n = value.length;
        if (arr[n]) arr[n] += value;
        else arr[n] = value;
    });

    let res = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i]) res += arr[i];
    }
    return res;
}

// Time: O(n) Space: O(n);

console.log(sortCharacters('tree'));
console.log(sortCharacters('cccbbb'));
console.log(sortCharacters('ccbbbtttaa'));

// console.log(sortChars('tree')); // 'eetr'||'eert'
// console.log(sortChars('cccaaa')); // 'cccaaa' || 'aaaccc'
