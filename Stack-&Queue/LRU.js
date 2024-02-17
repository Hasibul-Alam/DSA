// Problem: https://leetcode.com/problems/lru-cache/description/

// Approach 1: Time: O(1) Space: O(1)

function node(k, v) {
    return {
        key: k,
        value: v,
        prev: null,
        next: null,
    };
}

function DLL() {
    const head = new node(null, null);
    const tail = new node(null, null);
    head.next = tail;
    tail.prev = head;
    return {
        head: head,
        tail: tail,
    };
}

var LRUCache = function (capacity) {
    this.map = new Map();
    this.dll = new DLL();
    this.capacity = capacity;
};

LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        let curr = this.map.get(key);
        let val = curr.value;

        // Remove the node from its current position
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;

        // Move the node to the front of the DLL
        curr.next = this.dll.head.next;
        curr.prev = this.dll.head;
        this.dll.head.next.prev = curr;
        this.dll.head.next = curr;

        return val;
    }
    return -1;
};

LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        // If the key exists, remove it first
        let curr = this.map.get(key);
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
        this.map.delete(key);
    }

    // If the cache is at capacity, remove the least recently used item
    if (this.map.size === this.capacity) {
        let last = this.dll.tail.prev;
        last.prev.next = this.dll.tail;
        this.dll.tail.prev = last.prev;
        this.map.delete(last.key);
    }

    // Add the new node to the front of the DLL
    let newNode = new node(key, value);
    newNode.next = this.dll.head.next;
    newNode.prev = this.dll.head;
    this.dll.head.next.prev = newNode;
    this.dll.head.next = newNode;

    // Add the new node to the map
    this.map.set(key, newNode);
};

// Approach 2: Time: O(c) capacity, Space: O(c)

var LRUCache = function (capacity) {
    this.map = new Map();
    this.deque = [];
    this.capacity = capacity;
};

LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        let [idx, val] = this.map.get(key);

        // Remove the entry from its current position in deque
        this.deque.splice(idx, 1);

        // Add the entry to the end of deque
        this.deque.push([key, val]);

        // Update indices in the map
        for (let i = 0; i < this.deque.length; i++) {
            this.map.set(this.deque[i][0], [i, this.deque[i][1]]);
        }

        return val;
    }
    return -1;
};

LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        let [idx, val] = this.map.get(key);

        // Remove the entry from its current position in deque
        this.deque.splice(idx, 1);

        // Add the entry to the end of deque
        this.deque.push([key, value]);

        // Update indices in the map
        for (let i = 0; i < this.deque.length; i++) {
            this.map.set(this.deque[i][0], [i, this.deque[i][1]]);
        }
    } else {
        if (this.capacity > this.deque.length) {
            // If there is space, add the entry to the end of deque
            this.deque.push([key, value]);

            // Update indices in the map
            for (let i = 0; i < this.deque.length; i++) {
                this.map.set(this.deque[i][0], [i, this.deque[i][1]]);
            }
        } else {
            // If capacity is reached, remove the least recently used entry
            let removedKey = this.deque.shift()[0];
            this.map.delete(removedKey);

            // Add the new entry to the end of deque
            this.deque.push([key, value]);

            // Update indices in the map
            for (let i = 0; i < this.deque.length; i++) {
                this.map.set(this.deque[i][0], [i, this.deque[i][1]]);
            }
        }
    }
};
