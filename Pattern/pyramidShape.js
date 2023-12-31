function shape(n) {
    let m = n * 2 - 1;
    let low = n;
    let high = n;
    let s = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (j >= low && j <= high) {
                s += '*';
            } else s += ' ';
        }
        s += '\n';
        low -= 1;
        high += 1;
    }
    return s;
}

function alternative(n) {
    let s = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            s += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            s += '*';
        }
        for (let j = 1; j <= n - i; j++) {
            s += ' ';
        }
        s += '\n';
    }
    return s;
}

function flip_pyramid(n) {
    let s = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i - 1; j++) {
            s += ' ';
        }
        for (let j = 1; j <= 2 * (n - i) + 1; j++) {
            s += '*';
        }
        for (let j = 1; j <= i - 1; j++) {
            s += ' ';
        }
        s += '\n';
    }
    return s;
}

console.log(shape(5));
console.log(alternative(5));
console.log(flip_pyramid(5));
