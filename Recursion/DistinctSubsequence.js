// Problem: https://www.codingninjas.com/studio/problems/more-subsequence_8842355?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

// Recursive Approach - Time: O(2^n) Space: O(2^n)
function countDistinctSubsequence(str, i, count, cadStr) {
    if (i === str.length) {
        count[0]++;
        return;
    }
    if (str[i] !== cadStr[cadStr.length - 1]) {
        countDistinctSubsequence(str, i + 1, count, cadStr + str[i]);
    }
    countDistinctSubsequence(str, i + 1, count, cadStr);
}

function distinctSubsequence(strA, strB) {
    const countA = [-1];
    const countB = [-1];
    countDistinctSubsequence(strA, 0, countA, '');
    countDistinctSubsequence(strB, 0, countB, '');
    // console.log(countA, countB);
    if (countA >= countB) return strA;
    return strB;
}

console.log(distinctSubsequence('dd', 'ab'));
