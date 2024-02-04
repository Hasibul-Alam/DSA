// Problem: https://leetcode.com/problems/maximal-rectangle/description/

function lgRectangle(heights) {
    let stack = [];
    let maxArea = 0;
    let n = heights.length;
    for (let i = 0; i <= n; i++) {
        while (
            (stack.length > 0 && i === n) ||
            heights[stack[stack.length - 1]] >= heights[i]
        ) {
            let h = heights[stack[stack.length - 1]];
            stack.pop();
            let left = stack.length === 0 ? -1 : stack[stack.length - 1];
            let right = i;
            maxArea = Math.max(maxArea, (right - left - 1) * h);
        }
        stack.push(i);
    }
    return maxArea;
}

var maximalRectangle = function (matrix) {
    let maxRec = 0;
    let stack = new Array(matrix[0].length).fill(0);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            stack[j] =
                matrix[i][j] === '0' ? 0 : stack[j] + Number(matrix[i][j]);
        }
        let rec = lgRectangle(stack);
        maxRec = Math.max(maxRec, rec);
    }
    return maxRec;
};

// Time: O(n*m) Space: O(m) where m is the number of columns
