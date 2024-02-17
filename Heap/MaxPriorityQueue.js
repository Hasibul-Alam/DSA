class MaxPriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Insert an element with a given priority
    insert(element, priority) {
        const newNode = { element, priority };
        this.heap.push(newNode);
        this.heapifyUp();
    }

    // Extract the element with the maximum priority
    extractMax() {
        if (this.isEmpty()) {
            return null; // Queue is empty
        }

        const max = this.heap[0].element;

        // Replace the root with the last element and heapify down
        const lastNode = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.heapifyDown();
        }

        return max;
    }

    // Increase the priority of an element
    increasePriority(element, newPriority) {
        const index = this.findIndex(element);

        if (index !== -1 && newPriority > this.heap[index].priority) {
            this.heap[index].priority = newPriority;
            this.heapifyUp(index);
        }
    }

    // Decrease the priority of an element
    decreasePriority(element, newPriority) {
        const index = this.findIndex(element);

        if (index !== -1 && newPriority < this.heap[index].priority) {
            this.heap[index].priority = newPriority;
            this.heapifyDown(index);
        }
    }

    // Check if the priority queue is empty
    isEmpty() {
        return this.heap.length === 0;
    }

    // Find the index of an element in the heap
    findIndex(element) {
        for (let i = 0; i < this.heap.length; i++) {
            if (this.heap[i].element === element) {
                return i;
            }
        }
        return -1;
    }

    // Heapify up to maintain the max-heap property
    heapifyUp(index = null) {
        let currentIndex = index !== null ? index : this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (
                this.heap[currentIndex].priority >
                this.heap[parentIndex].priority
            ) {
                // Swap with the parent if the current node has higher priority
                [this.heap[currentIndex], this.heap[parentIndex]] = [
                    this.heap[parentIndex],
                    this.heap[currentIndex],
                ];
                currentIndex = parentIndex;
            } else {
                break; // Max-heap property is satisfied
            }
        }
    }

    // Heapify down to maintain the max-heap property
    heapifyDown(index = 0) {
        let currentIndex = index;

        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let maxChildIndex = currentIndex;

            if (
                leftChildIndex < this.heap.length &&
                this.heap[leftChildIndex].priority >
                    this.heap[maxChildIndex].priority
            ) {
                maxChildIndex = leftChildIndex;
            }

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex].priority >
                    this.heap[maxChildIndex].priority
            ) {
                maxChildIndex = rightChildIndex;
            }

            if (maxChildIndex !== currentIndex) {
                // Swap with the child having higher priority
                [this.heap[currentIndex], this.heap[maxChildIndex]] = [
                    this.heap[maxChildIndex],
                    this.heap[currentIndex],
                ];
                currentIndex = maxChildIndex;
            } else {
                break; // Max-heap property is satisfied
            }
        }
    }
}

// Example usage:

const maxPriorityQueue = new MaxPriorityQueue();

maxPriorityQueue.insert('Task 1', 3);
maxPriorityQueue.insert('Task 2', 1);
maxPriorityQueue.insert('Task 3', 5);

console.log(maxPriorityQueue.extractMax()); // Output: "Task 3"

maxPriorityQueue.increasePriority('Task 1', 8);
maxPriorityQueue.decreasePriority('Task 2', 2);

console.log(maxPriorityQueue.extractMax()); // Output: "Task 1"
console.log(maxPriorityQueue.extractMax()); // Output: "Task 2"
console.log(maxPriorityQueue.extractMax()); // Output: null (empty queue)
