// Problem: https://leetcode.com/problems/next-greater-element-ii/description/

// Approach I: Time: O(n) Space: O(n) (myself)
var nextGreaterElements = function (nums) {
    let n = nums.length;
    let nge = Array(n).fill(-1);
    let st = [];
    for (let i = n - 1; i >= 0; i--) {
        if (st.length > 0 && st.at(-1) > nums[i]) {
            nge[i] = st.at(-1);
            st.push(nums[i]);
        } else {
            while (st.length > 0 && st.at(-1) <= nums[i]) {
                st.pop();
            }
            if (st.length > 0) {
                nge[i] = st.at(-1);
                st.push(nums[i]);
            }
        }
        if (st.length === 0 && nge[i] === -1) {
            let j = i + 1;
            while (j <= i + n - 1 && nums[j % n] <= nums[i]) {
                j++;
            }
            if (j > i + n - 1) st.push(nums[i]);
            else {
                nge[i] = nums[j % n];
                st.push(nums[j % n]);
                st.push(nums[i]);
            }
        }
    }
    return nge;
};

console.log(nextGreaterElements([1, 2, 1]));
console.log(nextGreaterElements([1, 2, 3, 4, 3]));

// Second Approach: Time: O(n) Space: O(n)

function nextGreaterElements(nums) {
    let n = nums.length;
    let nge = Array(n).fill(-1);
    let st = [];

    for (let i = 2 * n - 1; i >= 0; i--) {
        while (st.length > 0 && st[st.length - 1] <= nums[i % n]) {
            st.pop();
        }

        if (i < n) {
            if (st.length > 0) {
                nge[i] = st[st.length - 1];
            }
        }
        st.push(nums[i % n]);
    }
    return nge;
}
