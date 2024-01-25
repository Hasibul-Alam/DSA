// Problem: https://leetcode.com/problems/remove-outermost-parentheses/description/

// Better Solution
function rmOutermostParentheses(s) {
    let res = '';
    let p = 0;
    let stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
        if (stack.length) {
            if (stack[stack.length - 1] !== s[i]) {
                stack.pop();
                if (!stack.length) {
                    if (i - p > 1) res += s.substring(p + 1, i);
                    p = i + 1;
                }
            } else stack.push(s[i]);
        } else stack.push(s[i]);
    }
    return res;
}

// Time: O(n); Space:O(n)

// Optimal Solution

function removeOutermostParentheses(s) {
    let res = '';
    let count = 0;
    for (const l of s) {
        if (l === '(') {
            if (count) res += l;
            count += 1;
        } else {
            count -= 1;
            if (count) res += l;
        }
    }
    return res;
}

// Time: O(n); Space: O(1)

console.log(rmOutermostParentheses('(()())(())')); // ()()()
console.log(rmOutermostParentheses('(()())(())(()(()))')); // ()()()()()(())
console.log(rmOutermostParentheses('()()')); // ''
console.log(rmOutermostParentheses('()')); // ''

console.log(removeOutermostParentheses('(()())(())')); // ()()()
console.log(removeOutermostParentheses('(()())(())(()(()))')); // ()()()()()(())
console.log(removeOutermostParentheses('()()')); // ''
console.log(removeOutermostParentheses('()')); // ''
