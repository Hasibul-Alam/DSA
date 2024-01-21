const selection_sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
};

let arr = [45, 1, 34, 16, 6, 2, 20];
// let arr = [1, 2, 6, 16, 20, 34, 45];
console.log(selection_sort(arr));

// Time Complexity: Worst (O(n^2)) Average(O(n^2)) Best(O(n^2)) Unstable
// Space Complexity: O(1)
