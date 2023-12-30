const insertion_sort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        key = arr[i];
        let j = i - 1;
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
};

// let arr = [45, 1, 34, 16, 6, 2, 20];
let arr = [1, 2, 6, 16, 20, 34, 45];
console.log(insertion_sort(arr));

// Time Complexity: Worst (O(n^2)) Average(O(n^2)) Best(O(n))
// Space Complexity: O(1)
