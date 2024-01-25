// Problem: https://leetcode.com/problems/reverse-words-in-a-string/description/

function trim(st) {
    let s = 0;
    let e = st.length - 1;
    while (st[s] === ' ') s++;
    while (st[e] === ' ') e--;
    return [s, e];
}

function reverseString(s) {
    let range = trim(s);
    let res = '';
    let p = range[1] + 1;
    for (let i = range[1]; i >= range[0]; i--) {
        if (i === range[0]) res += s.substring(i, p);
        if (s[i] === ' ') {
            if (s[i + 1] !== ' ') {
                res += s.substring(i + 1, p) + ' ';
                p = i;
            } else p = i;
        }
    }
    return res;
    // One line code
    // return s.split(' ').filter((word)=>{if(word!=='')return word}).reverse().join(' ');
}

// Time: O(n); Space: O(1); Ignoring the returned string;

console.log(reverseString('the sky is blue'));
console.log(reverseString('  hello world  '));
console.log(reverseString('a good   example'));
