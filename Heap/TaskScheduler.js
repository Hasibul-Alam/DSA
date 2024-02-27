// Problem: https://leetcode.com/problems/task-scheduler/description/

// Brute Force Approach - Time: O(n*m) Space: O(m)

function leastInterval(tasks, n) {
    const taskCount = tasks.length;
    const taskMap = new Map();

    // Count the frequency of each task
    for (const task of tasks) {
        taskMap.set(task, (taskMap.get(task) || 0) + 1);
    }

    let totalTime = 0;

    while (taskCount > 0) {
        const executedTasks = new Set();

        // Execute tasks within the cool-down period
        for (const task of taskMap.keys()) {
            if (taskMap.get(task) > 0 && !executedTasks.has(task)) {
                taskMap.set(task, taskMap.get(task) - 1);
                executedTasks.add(task);
                taskCount--;
            }
            if (executedTasks.size === n + 1 || taskCount === 0) break; // Cool-down period reached or all tasks executed
        }

        // Increment the total time by the length of the cool-down period or the remaining tasks
        totalTime += Math.min(n + 1, taskCount);

        // If there are remaining tasks, add idle time
        if (taskCount > 0) totalTime += n + 1 - executedTasks.size;
    }

    return totalTime;
}

// Example usage:
const tasks = ['A', 'A', 'A', 'B', 'B', 'B'];
const n = 2;
console.log(leastInterval(tasks, n)); // Output: 8

// Optimal Approach 01 - (Sliding Window) Time: O(klogk) Space: O(k)

function leastInterval(tasks, n) {
    const frequencyMap = new Map();

    // Count the frequency of each task
    for (const task of tasks) {
        frequencyMap.set(task, (frequencyMap.get(task) || 0) + 1);
    }

    // Sort tasks by frequency
    const sortedTasks = Array.from(frequencyMap.values()).sort((a, b) => b - a);

    let maxFrequency = sortedTasks[0];
    let idleSlots = (maxFrequency - 1) * n;

    // Calculate idle slots between tasks
    for (let i = 1; i < sortedTasks.length; i++) {
        idleSlots -= Math.min(maxFrequency - 1, sortedTasks[i]);
    }

    idleSlots = Math.max(0, idleSlots); // Ensure idle slots are non-negative

    // Total time units required
    return tasks.length + idleSlots;
}

// Example usage:
// const tasks = ['A', 'A', 'A', 'B', 'B', 'B'];
// const n = 2;
// console.log(leastInterval(tasks, n)); // Output: 8

// Optimal Approach 2 - (Sliding Window) Time: O(nlogk) Space: O(k)

class MaxPriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(task, frequency) {
        this.heap.push({ task, frequency });
        this.bubbleUp(this.heap.length - 1);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const maxTask = this.heap[0];
        const lastTask = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = lastTask;
            this.bubbleDown(0);
        }
        return maxTask;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].frequency < this.heap[index].frequency) {
                [this.heap[parentIndex], this.heap[index]] = [
                    this.heap[index],
                    this.heap[parentIndex],
                ];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown(index) {
        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let largestIndex = index;
            if (
                leftIndex < this.heap.length &&
                this.heap[leftIndex].frequency >
                    this.heap[largestIndex].frequency
            ) {
                largestIndex = leftIndex;
            }
            if (
                rightIndex < this.heap.length &&
                this.heap[rightIndex].frequency >
                    this.heap[largestIndex].frequency
            ) {
                largestIndex = rightIndex;
            }
            if (largestIndex !== index) {
                [this.heap[index], this.heap[largestIndex]] = [
                    this.heap[largestIndex],
                    this.heap[index],
                ];
                index = largestIndex;
            } else {
                break;
            }
        }
    }
}

function leastInterval(tasks, n) {
    const frequencyMap = new Map();

    // Count the frequency of each task
    for (const task of tasks) {
        frequencyMap.set(task, (frequencyMap.get(task) || 0) + 1);
    }

    const maxPQ = new MaxPriorityQueue();

    // Enqueue tasks and their frequencies into the max heap
    for (const [task, frequency] of frequencyMap.entries()) {
        maxPQ.enqueue(task, frequency);
    }

    let totalTime = 0;

    while (!maxPQ.isEmpty()) {
        const tempTasks = [];
        let cooldown = n + 1;

        // Execute tasks within the cooldown period
        while (cooldown > 0 && !maxPQ.isEmpty()) {
            const task = maxPQ.dequeue();
            if (task) {
                tempTasks.push(task);
            }
            cooldown--;
            totalTime++;
        }

        // Re-enqueue tasks back into the max heap if their frequency is not exhausted
        for (const task of tempTasks) {
            if (task.frequency > 1) {
                maxPQ.enqueue(task.task, task.frequency - 1);
            }
        }

        // If there are no tasks to execute but cooldown remains, add idle time
        if (!maxPQ.isEmpty() && cooldown > 0) {
            totalTime += cooldown;
        }
    }

    return totalTime;
}

// Example usage:
// const tasks = ['A', 'A', 'A', 'B', 'B', 'B'];
// const n = 2;
// console.log(leastInterval(tasks, n)); // Output: 8
