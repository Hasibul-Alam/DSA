class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            prev: null,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    _findDesiredNode(index) {
        let counter = 0;
        let curr = this.head;
        while (counter !== index) {
            curr = curr.next;
            counter++;
        }
        return curr;
    }

    insert(index, value) {
        const newNode = new Node(value);
        if (index >= this.length) return this.append(value);
        const desiredNode = this._findDesiredNode(index);
        let prevNode = desiredNode.prev;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = desiredNode;
        desiredNode.prev = newNode;
        this.length++;
    }

    remove(index) {
        if (index === 0) {
            let curr = this.head;
            this.head = curr.next;
            this.head.prev = null;
            return;
        }
        const unwantedNode = this._findDesiredNode(index);
        const prevNode = unwantedNode.prev;
        if (index === this.length - 1) {
            prevNode.next = unwantedNode.next;
            this.tail = prevNode;
            return;
        }
        const nextNode = unwantedNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    printList() {
        let curr = this.head;
        let list = '';
        while (curr) {
            list += `${curr.value}-->`;
            curr = curr.next;
        }
        list += 'null';
        console.log(list);
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3, 7);
myLinkedList.insert(5, 99);
myLinkedList.remove(5);
console.log(myLinkedList);
myLinkedList.printList();
