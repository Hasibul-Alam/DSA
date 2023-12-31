function shape(n) {
    let s = '';
    for (let i = 0; i < 2 * n - 1; i++) {
        for (let j = 0; j < 2 * n - 1; j++) {
            let top = i;
            let left = j;
            let right = 2 * n - 2 - j;
            let down = 2 * n - 2 - i;
            s += n - Math.min(Math.min(top, down), Math.min(left, right));
        }
        s += '\n';
    }
    return s;
}

console.log(shape(4));
