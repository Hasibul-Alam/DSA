// Problem: https://www.codingninjas.com/studio/problems/reverse-stack-using-recursion_631875?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

// Recursive approach - Time: O(n^2) Space: O(n)

function reverseStack(s) {
    if (s.length <= 1) return s;
    let topElement = s.pop();
    reverseStack(s);
    helper(s, topElement);
    return s;
}

function helper(s, element) {
    if (s.length === 0) {
        s.push(element);
        return;
    }
    let top = s.pop();
    helper(s, element);
    s.push(top);
}

console.log(reverseStack([1, 3, 2, 4, 5, 7]));

// Approach 2 - Time:O(n) Space:O(n)

function reverseStack(s) {
    function helper(s, i, j, n) {
        if (i == Math.floor(n / 2)) return s;
        [s[i], s[j]] = [s[j], s[i]];
        return helper(s, i + 1, j - 1, n);
    }
    return helper(s, 0, s.length - 1, s.length);
}
console.log(reverseStack([1, 3, 2, 4, 5]));
