var MinStack = function () {
    this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (
        this.minStack.length > 0 &&
        this.minStack[this.minStack.length - 1][1] < val
    ) {
        this.minStack.push([val, this.minStack[this.minStack.length - 1][1]]);
    } else this.minStack.push([val, val]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let poped = this.minStack.pop();
    return poped[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.minStack[this.minStack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1][1];
};

// Your MinStack object will be instantiated and called as such:
var obj = new MinStack();
obj.push(3);
obj.push(1);
obj.push(4);
console.log(obj.getMin());
obj.pop();
obj.push(5);
console.log(obj.getMin());
obj.push(2);
console.log(obj.top());
console.log(obj.getMin());
