function createNode(value) {
    return {
        value: value,
        prev: null,
        next: null,
    };
}

function doublyLinkedList() {
    let head = null;
    let tail = null;

    function getTail() {
        return tail;
    }
    function append(val) {
        const node = createNode(val);
        if (!head) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            node.prev = tail;
            tail = node;
        }
    }
    function reverse() {
        let curr = head;
        tail = curr;
        while (curr) {
            let prev = curr.prev;
            curr.prev = curr.next;
            curr.next = prev;
            if (!curr.prev) head = curr;
            curr = curr.prev;
        }
    }
    function print() {
        let dlist = 'null <--';
        let curr = head;
        while (curr) {
            dlist += `${curr.value} <--> `;
            curr = curr.next;
        }
        dlist += 'null';
        console.log(dlist);
    }
    return {
        getTail,
        append,
        reverse,
        print,
    };
}

const dl = doublyLinkedList();

let arr = [4, 2, 5, 1];

arr.forEach((e) => dl.append(e));

dl.print();
console.log(dl.getTail());
dl.reverse();
dl.print();
console.log(dl.getTail());
