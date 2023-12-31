function pyramid(n) {
    let s = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            s += ' ';
        }
        let alphabet = 65;
        let totalSymble = 2 * i - 1;
        for (let j = 1; j <= Math.floor(totalSymble / 2) + 1; j++) {
            s += String.fromCharCode(alphabet);
            alphabet++;
        }
        alphabet -= 2;
        for (let j = 1; j <= Math.floor(totalSymble / 2); j++) {
            s += String.fromCharCode(alphabet);
            alphabet--;
        }
        for (let j = 1; j <= n - i; j++) {
            s += ' ';
        }
        s += '\n';
    }
    return s;
}

function rightTriangle(n) {
    let s = '';
    let alpha = 64 + n;
    for (let i = 0; i < n; i++) {
        let c = alpha - i;
        for (let j = 1; j <= i + 1; j++) {
            s += String.fromCharCode(c);
            c++;
        }
        s += '\n';
    }
    return s;
}

console.log(pyramid(5));
console.log(rightTriangle(5));
