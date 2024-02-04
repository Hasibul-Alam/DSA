// Problem:

// Brute force approach: Time: O(n^2) Space: O(1)

function largestArea(arr) {
    let maxArea = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let minHeight = Number.MAX_SAFE_INTEGER;

        for (let j = i; j < n; j++) {
            minHeight = Math.min(minHeight, arr[j]);
            maxArea = Math.max(maxArea, minHeight * (j - i + 1));
        }
    }

    return maxArea;
}

// Better Approach: Time: O(nlogn) Space: O(logn)

var largestRectangleArea = function (heights) {
    function calculateArea(heights, start, end) {
        if (start > end) {
            return 0;
        }
        let minIndex = start;
        for (let i = start; i <= end; i++) {
            if (heights[minIndex] > heights[i]) {
                minIndex = i;
            }
        }
        return Math.max(
            heights[minIndex] * (end - start + 1),
            calculateArea(heights, start, minIndex - 1),
            calculateArea(heights, minIndex + 1, end),
        );
    }

    return calculateArea(heights, 0, heights.length - 1);
};

// Optimal Appraoch: Time: O(n) Space: O(n)

function largestRectangleArea(heights) {
    const n = heights.length;
    const st = [];
    const leftSmall = new Array(n);
    const rightSmall = new Array(n);

    for (let i = 0; i < n; i++) {
        while (st.length > 0 && heights[st[st.length - 1]] >= heights[i]) {
            st.pop();
        }

        leftSmall[i] = st.length === 0 ? 0 : st[st.length - 1] + 1;
        st.push(i);
    }

    // clear the stack to be re-used
    st.length = 0;

    for (let i = n - 1; i >= 0; i--) {
        while (st.length > 0 && heights[st[st.length - 1]] >= heights[i]) {
            st.pop();
        }

        rightSmall[i] = st.length === 0 ? n - 1 : st[st.length - 1] - 1;
        st.push(i);
    }

    let maxA = 0;
    for (let i = 0; i < n; i++) {
        maxA = Math.max(maxA, heights[i] * (rightSmall[i] - leftSmall[i] + 1));
    }
    return maxA;
}

// Example usage
// const arr = [2, 1, 5, 6, 2, 3, 1];
// console.log(
//     'The largest area in the histogram is ' + largestRectangleArea(arr),
// );

// Optimal Approach (On one go): Time: O(n) Space: O(n)

function lgRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;
    let n = heights.length;
    for (let i = 0; i <= n; i++) {
        while (
            (stack.length > 0 && i === n) ||
            heights[stack[stack.length - 1]] >= heights[i]
        ) {
            h = heights[stack[stack.length - 1]];
            stack.pop();
            let left = stack.length === 0 ? -1 : stack[stack.length - 1];
            let right = i;
            maxArea = Math.max(maxArea, (right - left - 1) * h);
        }
        stack.push(i);
    }
    return maxArea;
}

console.log(lgRectangleArea([2, 1, 5, 6, 2, 3]));
