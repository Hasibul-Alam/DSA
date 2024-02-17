class MinPriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Insert an element with a given priority
    insert(element, priority) {
        const newNode = { element, priority };
        this.heap.push(newNode);
        this.heapifyUp();
    }

    // Extract the element with the minimum priority
    extractMin() {
        if (this.isEmpty()) {
            return null; // Queue is empty
        }

        const min = this.heap[0].element;

        // Replace the root with the last element and heapify down
        const lastNode = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.heapifyDown();
        }

        return min;
    }

    // Increase the priority of an element
    increasePriority(element, newPriority) {
        const index = this.findIndex(element);

        if (index !== -1 && newPriority < this.heap[index].priority) {
            this.heap[index].priority = newPriority;
            this.heapifyUp(index);
        }
    }

    // Decrease the priority of an element
    decreasePriority(element, newPriority) {
        const index = this.findIndex(element);

        if (index !== -1 && newPriority > this.heap[index].priority) {
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

    // Heapify up to maintain the min-heap property
    heapifyUp(index = null) {
        let currentIndex = index !== null ? index : this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (
                this.heap[currentIndex].priority <
                this.heap[parentIndex].priority
            ) {
                // Swap with the parent if the current node has lower priority
                [this.heap[currentIndex], this.heap[parentIndex]] = [
                    this.heap[parentIndex],
                    this.heap[currentIndex],
                ];
                currentIndex = parentIndex;
            } else {
                break; // Min-heap property is satisfied
            }
        }
    }

    // Heapify down to maintain the min-heap property
    heapifyDown(index = 0) {
        let currentIndex = index;

        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let minChildIndex = currentIndex;

            if (
                leftChildIndex < this.heap.length &&
                this.heap[leftChildIndex].priority <
                    this.heap[minChildIndex].priority
            ) {
                minChildIndex = leftChildIndex;
            }

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex].priority <
                    this.heap[minChildIndex].priority
            ) {
                minChildIndex = rightChildIndex;
            }

            if (minChildIndex !== currentIndex) {
                // Swap with the child having lower priority
                [this.heap[currentIndex], this.heap[minChildIndex]] = [
                    this.heap[minChildIndex],
                    this.heap[currentIndex],
                ];
                currentIndex = minChildIndex;
            } else {
                break; // Min-heap property is satisfied
            }
        }
    }
}

// Example usage:

const minPriorityQueue = new MinPriorityQueue();

minPriorityQueue.insert('Task 1', 3);
minPriorityQueue.insert('Task 2', 1);
minPriorityQueue.insert('Task 3', 5);

console.log(minPriorityQueue.extractMin()); // Output: "Task 2"

minPriorityQueue.increasePriority('Task 1', 8);
minPriorityQueue.decreasePriority('Task 3', 2);

console.log(minPriorityQueue.extractMin()); // Output: "Task 3"
console.log(minPriorityQueue.extractMin()); // Output: "Task 1"
console.log(minPriorityQueue.extractMin()); // Output: null (empty queue)
