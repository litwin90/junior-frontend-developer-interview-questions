class Node {
    constructor(value, next = null, prev = null){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoubleLinkedList{
    constructor() {
        // this.head = null;
        // this.tail = null;
        // this.length = 0;
    }

    add(value) {
        // const node = new Node(value);
        // if (this.length === 0) {
        //     this.head = this.tail = node;
        //     node.next = node.prev = node;
            
        // } else {
        //     node.next = this.head;
        //     node.prev = this.tail;
        //     this.tail.next = node;
        //     this.head.prev = node;
        //     this.tail = node;
        // }

        // this.length++;
        // return true;
    }

    insert(position, value) {
        // if(position < 0 || position > this.length) { return false};
        // const node = new Node(value);

        // if (this.length === 0) {
        //     this.head = this.tail = node;
        //     node.next = node.prev = node;
        // } {
        //     let index = 0;
        //     let current = this.head;
        //     while(index !== position) {
        //         current = current.next;
        //         index++;
        //     }
    
        //     node.next = current;
        //     node.prev = current.prev;
        //     current.prev.next = node;
        //     current.prev = node;
        // }
        
        // this.length++;
        // return true;
    }

    remove(position) {
        // if(position < 0 || position > this.length || this.length === 0) { return false};
    
        // let index = 0;
        // let current = this.head;

        // while(index !== position) {
        //     current = current.next;
        //     index++;
        // }

        // current.prev.next = current.next;
        // current.next.prev = current.prev;

        // this.length--;
        // return true;
    }
}

module.exports = DoubleLinkedList;