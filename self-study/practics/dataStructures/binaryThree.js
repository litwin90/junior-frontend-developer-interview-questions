// Бинарное дерево
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryThree {
    constructor() {
        // this.root = null;
    }

    add(value) {
        // function search(node, value) {
        //     if(!node) { return new Node(value)}
        //     if(node.value === value) { return node}
        //     if (value > node.value) {
        //         node.right = search(node.right, value);
        //     } else {
        //         node.left = search(node.left, value);
        //     }
        //     return node;
        // };
        // this.root = search(this.root, value);
        // return this.root;
    }

    has(value) {
    //   function search(node, value) {
    //     if (!node) { return false}
    //     if (node.value === value) { return true};
    //     if (!node.right &&  !node.left ) { return false}
    //     return search(value > node.value ? node.right : node.left, value)
    //   }
    //   return search(this.root, value);
    }

    remove(value) {
        // function search(node, value) {
        //     if (!node) {return null} 
        //     if (node.value === value) {
        //         if (!node.right && !node.left) { return null }
        //         if (!node.right) { return node.left}
        //         if (!node.left) { return node.right}

        //         let current = node.right;
        //         while(current.left){ 
        //             current = current.left
        //         }

        //         node.value = current.value;
        //         node.right = search(node.right, current.value);
        //         return node;
        //     }
        //     if (value > node.value) {
        //         node.right = search(node.right, value);
        //     } else {
        //         node.left = search(node.left, value);
        //     }
        //     return node;
        // }
        // this.root = search(this.root, value);
        // return this.root;
    }

    min() {
        // let current = this.root;
        // while(current.left) {
        //     current = current.left;
        // }
        // return current.value;
    }

    max() {
        // let current = this.root;
        // while(current.right) {
        //     current = current.right;
        // }
        // return current.value;
    }
}


module.exports = BinaryThree;
