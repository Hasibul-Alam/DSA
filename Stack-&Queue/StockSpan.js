// Problem: https://leetcode.com/problems/online-stock-span/

// Optimal Approach 1: (Time: Amortized-O(1) Worst-O(n) Space: O(n) )

var StockSpanner = function () {
    this.prices = [];
    this.stack = [];
};

StockSpanner.prototype.next = function (price) {
    let span = 0;
    this.prices.push(price);
    while (
        this.stack.length > 0 &&
        this.prices[this.stack[this.stack.length - 1]] <= price
    ) {
        this.stack.pop();
    }

    if (this.stack.length === 0 && this.prices.length === 0) span += 1;
    else if (this.stack.length === 0 && this.prices.length > 0)
        span = this.prices.length;
    else if (this.stack.length > 0 && this.prices.length > 0)
        span = this.prices.length - 1 - this.stack[this.stack.length - 1];

    this.stack.push(this.prices.length - 1);
    return span;
};

// Optimal Approach 2: (Time: Amortized-O(1) Worst-O(n) Space: O(n))

function createStockSpanner() {
    const prices = [];
    const indices = [];

    function next(price) {
        let span = 1;
        while (prices.length > 0 && price >= prices[prices.length - 1]) {
            prices.pop();
            span += indices.pop();
        }

        prices.push(price);
        indices.push(span);

        return span;
    }

    return next;
}

const stockSpanner = createStockSpanner();
console.log(stockSpanner(100)); // Output: 1
console.log(stockSpanner(80)); // Output: 1
console.log(stockSpanner(60)); // Output: 1
console.log(stockSpanner(70)); // Output: 2
console.log(stockSpanner(60)); // Output: 1
console.log(stockSpanner(75)); // Output: 4
console.log(stockSpanner(85)); // Output: 6
