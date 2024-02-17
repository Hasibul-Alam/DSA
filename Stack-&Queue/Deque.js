class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedListDeque {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    insertFront(value) {
        const newNode = new Node(value);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            newNode.next = this.front;
            this.front.prev = newNode;
            this.front = newNode;
        }
    }

    insertLast(value) {
        const newNode = new Node(value);
        if (!this.rear) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            newNode.prev = this.rear;
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    deleteFront() {
        if (!this.front) {
            return null; // Deque is empty
        }

        const removedValue = this.front.value;
        this.front = this.front.next;

        if (this.front) {
            this.front.prev = null;
        } else {
            this.rear = null; // Deque is now empty
        }

        return removedValue;
    }

    deleteLast() {
        if (!this.rear) {
            return null; // Deque is empty
        }

        const removedValue = this.rear.value;
        this.rear = this.rear.prev;

        if (this.rear) {
            this.rear.next = null;
        } else {
            this.front = null; // Deque is now empty
        }

        return removedValue;
    }

    getFront() {
        return this.front ? this.front.value : null;
    }

    getRear() {
        return this.rear ? this.rear.value : null;
    }

    isEmpty() {
        return !this.front;
    }

    size() {
        let count = 0;
        let current = this.front;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}

// Example usage:
const deque = new DoublyLinkedListDeque();
deque.insertFront(1);
deque.insertLast(2);
deque.insertFront(3);
console.log(deque.getFront()); // 3
console.log(deque.getRear()); // 2
console.log(deque.size()); // 3
deque.deleteFront();
console.log(deque.getFront()); // 1
console.log(deque.size()); // 2
