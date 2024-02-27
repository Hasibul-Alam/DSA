function subsetOfSumDivisibleByK() {
    let arr = [1, 3, 6, 2, 8, 5, -2, -4];
    // let arr = [1, 3, 2, 6, 5];
    let k = 15;
    let count = 0;
    let res = [];
    let obj = {};
    function numberOfSubset(i, sum, path) {
        if (i === arr.length) {
            if (sum % k === 0 && path.length > 0) {
                res.push([...path]);
                count++;
            }
            return;
        }
        numberOfSubset(i + 1, sum + arr[i], [...path, arr[i]]);
        numberOfSubset(i + 1, sum, path);
    }
    numberOfSubset(0, 0, []);
    obj.res = res;
    obj.count = count;
    return obj;
}
console.log(subsetOfSumDivisibleByK());
