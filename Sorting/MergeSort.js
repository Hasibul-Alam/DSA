function merge_sort(arr) {
    if (arr.length <= 1) return arr;
    let mid = arr.length >> 1;
    let left = merge_sort(arr.slice(0, mid));
    let right = merge_sort(arr.slice(mid));
    return merger(left, right);
}

function merger(left, right) {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
}

let arr = [45, 1, 34, 16, 6, 2, 20];
// let arr = [1, 2, 6, 16, 20, 34, 45];
console.log(merge_sort(arr));

// Time Complexity: Worst (O(nlogn)) Average(O(nlogn)) Best(O(nlogn))
// Space Complexity: O(n)
