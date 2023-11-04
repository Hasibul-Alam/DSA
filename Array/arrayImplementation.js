class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    getElement(index) {
        // index = '' + index;
        return this.data[index];
    }

    push(element) {
        this.data[this.length] = element;
        this.length += 1;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shiftElements(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
    }

    delete(index) {
        const item = this.data[index];
        this.shiftElements(index);
        delete this.data[this.length - 1];
        return item;
    }
}

const newArray = new MyArray();
newArray.push(4);
newArray.push(5);
newArray.push(6);
newArray.push(7);
// newArray.pop();
newArray.delete(2);
console.log(newArray.getElement(1));
console.log(newArray);
