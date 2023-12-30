class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        const plate = new Node(value);
        if (this.length === 0) {
            this.first = plate;
            this.last = plate;
        } else {
            const temp = this.last;
            temp.next = plate;
            this.last = plate;
        }
        this.length++;
    }

    dequeue() {
        if (!this.first) return null;
        if (this.last === this.first) {
            this.last = null;
        }
        const temp = this.first;
        this.first = temp.next;
        this.length--;
        return temp.value;
    }

    peek() {
        return this.first.value;
    }
}

const myQueue = new Queue();
myQueue.enqueue(5);
myQueue.enqueue(2);
myQueue.enqueue(10);
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
