// Problem: https://leetcode.com/problems/palindrome-partitioning/

// Time: O( (2^n) *k*(n/2) ) Space: O(k * x)

var partition = function (s) {
    function isPalindrom(str, start, end) {
        while (start <= end) {
            if (str[start] != str[end]) return false;
            start++;
            end--;
        }
        return true;
    }

    function partitionHelper(s, idx) {
        if (idx == s.length) {
            res.push([...str]);
            return;
        }

        for (let i = idx; i < s.length; i++) {
            if (isPalindrom(s, idx, i)) {
                str.push(s.slice(idx, i + 1));
                partitionHelper(s, i + 1);
                str.pop();
            }
        }
    }
    const res = [];
    const str = [];
    partitionHelper(s, 0);
    return res;
};

console.log(partition('aab'));
