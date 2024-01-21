function bubble_sort(arr) {
    let swaped = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swaped = true;
            }
        }
        if (!swaped) break;
    }
    return arr;
}

let arr = [45, 1, 34, 16, 6, 2, 20];
// let arr = [1, 2, 6, 16, 20, 34, 45];
console.log(bubble_sort(arr));

// Time Complexity: Worst (O(n^2)) Average(O(n^2)) Best(O(n)) Stable.
// Space Complexity: O(1)
