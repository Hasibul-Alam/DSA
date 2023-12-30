function quick_sort(arr, left, right) {
    if (right - left < 1) return;
    let pivot = right;
    let i = left;
    while (i < pivot) {
        if (arr[i] > arr[pivot]) {
            let temp = arr[pivot - 1];
            arr[pivot - 1] = arr[pivot];
            arr[pivot] = arr[i];
            if (pivot - i > 1) arr[i] = temp;
            else arr[pivot] = temp;
            pivot = pivot - 1;
        } else i++;
    }
    quick_sort(arr, left, pivot - 1);
    quick_sort(arr, pivot + 1, right);
    return arr;
}

// let arr = [45, 1, 34, 16, 6, 2, 20];
let arr = [10, 7, 8, 9, 1, 5];
// let arr = [1, 2, 6, 16, 20, 34, 45];
// let arr = [10, 2, 60, 16, 12, 34, 5];

console.log(quick_sort(arr, 0, arr.length - 1));

// Time Complexity: Worst (O(n^2)) Average(O(nlogn)) Best(O(nlogn))
// Space Complexity: O(logn)
