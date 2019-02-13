// Односвязанные список
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // this.head = null;
        // this.length = 0;
    }

    add(value) {
        // const node = new Node(value);
        // if (this.length === 0) {
        //   this.head = node;
        // } else {
        //     let current = this.head;
        //     while(current.next) {
        //         current = current.next;
        //     }

        //     current.next = node;
        // }
        // this.length++;
        // return true;
    }

    insert(position, value) {
        //     if (position < 0 || position > this.length) { return false; }
        //     const node = new Node(value);

        //    let index = 0;
        //    let parrent = null;
        //    let current = this.head;

        //    while(index !== position) {
        //     parrent = current;
        //     current = current.next;
        //     index++;
        //    }

        //    if(position === 0) { this.head = node}
        //    node.next = current;
        //    if(parrent) { parrent.next = node}
        //    this.length++;
        //    return true;
    }

    remove(position) {
        // if (position < 0 || position > this.length) { return false; }
        // let index = 0;
        // let parrent = null;
        // let current = this.head;

        // while(index !== position ) {
        //     parrent = current;
        //     current = current.next;
        //     index++;
        // }

        // if (parrent) {
        //     parrent.next = current.next;
        // }
        // if (position === 0) {
        //     this.head = current.next;
        // }
        // this.length--;
        // return true;
    }
};

module.exports = LinkedList;
