const mergeToSortedArray = (arr1, arr2) => {
    const newArr = [];
    let i = 0,
        j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }
    return newArr;
};

const array1 = [3, 7, 10, 31];
const array2 = [5, 9, 15, 23];

console.log(mergeToSortedArray(array1, array2));
