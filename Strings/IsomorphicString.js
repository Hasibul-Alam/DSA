// Problem: https://leetcode.com/problems/isomorphic-strings/

// Approach 1
function isIsomorphic(s, t) {
    let sMap = new Map();
    let tMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!sMap.has(s[i]) && !tMap.has(t[i])) {
            sMap.set(s[i], t[i]);
            tMap.set(t[i], s[i]);
        } else if (sMap.get(s[i]) !== t[i] || tMap.get(t[i]) !== s[i])
            return false;
    }
    return true;
}

// Time: O(n); Space: O(1) ASCII has 256 characters.

// Approach 2

function checkIsomorphic(s, t) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
    }
    return true;
}

// Time:O(n^2) Space: O(1)

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
