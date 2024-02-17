class CircularDeque {
    constructor(k) {
        this.capacity = k + 1; // One extra space for distinguishing between empty and full states
        this.arr = new Array(this.capacity).fill(null);
        this.front = 0;
        this.rear = 0;
    }

    insertFront(value) {
        const nextFront = (this.front - 1 + this.capacity) % this.capacity;
        if (nextFront === this.rear) {
            // Deque is full
            return false;
        }

        this.front = nextFront;
        this.arr[this.front] = value;
        return true;
    }

    insertLast(value) {
        const nextRear = (this.rear + 1) % this.capacity;
        if (nextRear === this.front) {
            // Deque is full
            return false;
        }

        this.rear = nextRear;
        this.arr[this.rear] = value;
        return true;
    }

    deleteFront() {
        if (this.front === this.rear) {
            // Deque is empty
            return false;
        }

        this.front = (this.front + 1) % this.capacity;
        return true;
    }

    deleteLast() {
        if (this.front === this.rear) {
            // Deque is empty
            return false;
        }

        this.rear = (this.rear - 1 + this.capacity) % this.capacity;
        return true;
    }

    getFront() {
        if (this.front === this.rear) {
            // Deque is empty
            return -1;
        }

        return this.arr[this.front];
    }

    getRear() {
        if (this.front === this.rear) {
            // Deque is empty
            return -1;
        }

        return this.arr[this.rear];
    }

    isEmpty() {
        return this.front === this.rear;
    }

    isFull() {
        return (this.rear + 1) % this.capacity === this.front;
    }
}

// Example usage:
const deque = new CircularDeque(3);
console.log(deque.insertLast(1)); // true
console.log(deque.insertLast(2)); // true
console.log(deque.insertFront(3)); // true
console.log(deque.insertFront(4)); // false (deque is full)
console.log(deque.getRear()); // 2
console.log(deque.isFull()); // true
console.log(deque.deleteLast()); // true
console.log(deque.insertFront(4)); // true
console.log(deque.getFront()); // 4
