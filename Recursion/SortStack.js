// Problem: https://www.codingninjas.com/studio/problems/sort-stack_1229505?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf&leftPanelTabValue=PROBLEM

// Recursive Approach

function insertTop(s, topElement) {
    if (s.length === 0 || s[s.length - 1] > topElement) {
        s.push(topElement);
        return;
    }
    let temp = s.pop();
    insertTop(s, topElement);
    s.push(temp);
}

function sortStack(s) {
    if (s.length > 0) {
        let topElement = s.pop();
        sortStack(s);
        insertTop(s, topElement);
    }
}

// Time: O(n^2) Space: O(n)

// let s = [3, 1, 4, 5, 2];
// sortStack(s);
// console.log(s);

// Iteretive approach

function sort_stack(s) {
    let tempStack = [];
    while (s.length > 0) {
        let topElement = s.pop();
        while (
            tempStack.length > 0 &&
            tempStack[tempStack.length - 1] > topElement
        ) {
            s.push(tempStack.pop());
        }
        tempStack.push(topElement);
    }
    while (tempStack.length > 0) {
        s.push(tempStack.pop());
    }
    return s;
}

// Time: O(n^2) Space:O(n)

console.log(sort_stack([3, 1, 4, 5, 2]));
