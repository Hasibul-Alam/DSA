class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value) {
        const plate = new Node(value);
        if (this.length === 0) {
            this.top = plate;
            this.bottom = plate;
        } else {
            plate.next = this.top;
            this.top = plate;
        }
        this.length++;
    }

    pop() {
        if (!this.top) return null;
        if (this.top === this.bottom) this.bottom = null;
        const temp = this.top;
        this.top = temp.next;
        this.length--;
        return temp.value;
    }

    peek() {
        return this.top.value;
    }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(2);
myStack.push(10);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
