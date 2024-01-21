// Problem: https://www.codingninjas.com/studio/problems/square-root-integral_893351?leftPanelTab=0?utm_source=striver&utm_medium=website&utm_campaign=codestudio_a_zcourse

function squareRoot(n) {
    let start = 1;
    let end = n;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        let sq = mid * mid;
        if (sq > n) end = mid - 1;
        else if (sq < n) start = mid + 1;
        else return mid;
    }
    return end;
}

// Time: O(logN) Space: O(1)

console.log(squareRoot(8)); // 2
console.log(squareRoot(25)); // 5
console.log(squareRoot(78734597)); // 8873
