class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    _findPrevNode(index) {
        let counter = 0;
        let curr = this.head;
        while (counter < index - 1) {
            curr = curr.next;
            counter++;
        }
        return curr;
    }

    insert(index, value) {
        const newNode = new Node(value);
        if (index >= this.length) return this.append(value);
        const prevNode = this._findPrevNode(index);
        let temp = prevNode.next;
        newNode.next = temp;
        prevNode.next = newNode;
        this.length++;
    }

    remove(index) {
        if (index === 0) {
            let curr = this.head;
            this.head = curr.next;
            return;
        }
        const prevNode = this._findPrevNode(index);
        const unwantedNode = prevNode.next;

        prevNode.next = unwantedNode.next;
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

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3, 7);
myLinkedList.insert(5, 99);
myLinkedList.remove(4);

myLinkedList.printList();
