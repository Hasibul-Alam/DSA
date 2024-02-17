class MaxHeap {
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
        this.heapifyUp(idx);
    }

    decreaseKey(idx, key) {
        if (idx > this.heap.length - 1) return null;
        this.heap[idx] = key;
        this.heapifyDown(idx);
    }

    heapifyUp(i) {
        let idx = i;
        while (idx > 0) {
            if (
                this.hasParent(idx) &&
                this.heap[idx] > this.heap[this.getParentIndex(idx)]
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
            let largerElementIdx = this.getLeftChildIndex(idx);
            if (
                this.hasRightChild(idx) &&
                this.heap[this.getRightChildIndex(idx)] >
                    this.heap[largerElementIdx]
            ) {
                largerElementIdx = this.getRightChildIndex(idx);
            }
            if (this.heap[idx] < this.heap[largerElementIdx]) {
                [this.heap[idx], this.heap[largerElementIdx]] = [
                    this.heap[largerElementIdx],
                    this.heap[idx],
                ];
            } else break;
            idx = largerElementIdx;
        }
    }
}

export default MaxHeap;

// Example usage:
// const maxHeap = new MaxHeap();
// maxHeap.push(10);
// maxHeap.push(5);
// maxHeap.push(15);
// maxHeap.push(8);
// console.log(maxHeap.peek()); // Output: 15
// console.log(maxHeap.pop()); // Output: 15
// console.log(maxHeap.peek()); // Output: 10
// maxHeap.increaseKey(1, 20);
// console.log(maxHeap.peek()); // Output: 20
