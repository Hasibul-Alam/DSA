// Problem: https://www.codingninjas.com/studio/problems/subarrays-with-sum-%E2%80%98k'_6922076?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

function subsetOfSumK() {
    let arr = [1, 3, 6, 2, 8, 5, -2, -4];
    // let arr = [1, 3, 2, 6, 5];
    let k = 15;
    let count = 0;
    const res = [];
    function numberOfSubset(i, sum, path) {
        if (i === arr.length) {
            if (sum === k && path.length > 0) {
                res.push([...path]);
                count++;
            }
            return;
        }
        numberOfSubset(i + 1, sum + arr[i], [...path, arr[i]]);
        numberOfSubset(i + 1, sum, path);
    }
    numberOfSubset(0, 0, []);
    return res;
}
console.log(subsetOfSumDivisibleByK());
