class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChildIndex(idx) {
        return 2 * idx + 1;
    }

    getRightChildIndex(idx) {
        return 2 * idx + 2;
    }

    hasParent(idx) {
        return this.getParentIndex(idx) >= 0;
    }

    hasLeftChild(idx) {
        return this.getLeftChildIndex(idx) < this.heap.length;
    }

    hasRightChild(idx) {
        return this.getRightChildIndex(idx) < this.heap.length;
    }

    push(e) {
        this.heap.push(e);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        let popped = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return popped;
    }

    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    increaseKey(idx, key) {
        if (idx > this.heap.length - 1) return null;
        this.heap[idx] = key;
        this.heapifyDown(idx);
    }

    decreaseKey(idx, key) {
        if (idx > this.heap.length - 1) return null;
        this.heap[idx] = key;
        this.heapifyUp(idx);
    }

    heapifyUp(i) {
        let idx = i;
        while (idx > 0) {
            if (
                this.hasParent(idx) &&
                this.heap[idx] < this.heap[this.getParentIndex(idx)]
            ) {
                [this.heap[idx], this.heap[this.getParentIndex(idx)]] = [
                    this.heap[this.getParentIndex(idx)],
                    this.heap[idx],
                ];
            } else break;
            idx = this.getParentIndex(idx);
        }
    }

    heapifyDown(i) {
        let idx = i;
        while (this.hasLeftChild(idx)) {
            let smallerElementIdx = this.getLeftChildIndex(idx);
            if (
                this.hasRightChild(idx) &&
                this.heap[this.getRightChildIndex(idx)] <
                    this.heap[smallerElementIdx]
            ) {
                smallerElementIdx = this.getRightChildIndex(idx);
            }
            if (this.heap[idx] > this.heap[smallerElementIdx]) {
                [this.heap[idx], this.heap[smallerElementIdx]] = [
                    this.heap[smallerElementIdx],
                    this.heap[idx],
                ];
            } else break;
            idx = smallerElementIdx;
        }
    }
}

export default MinHeap;

// Example usage:
// const minHeap = new MinHeap();
// minHeap.push(10);
// minHeap.push(5);
// minHeap.push(15);
// minHeap.push(8);
// console.log(minHeap.peek()); // Output: 5
// console.log(minHeap.pop()); // Output: 5
// console.log(minHeap.peek()); // Output: 8
// minHeap.decreaseKey(0, 3);
// console.log(minHeap.peek()); // Output: 3
// minHeap.increaseKey(0, 5);
// console.log(minHeap.peek()); // Output: 5
