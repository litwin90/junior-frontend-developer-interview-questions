// Куча
class Heap {
    constructor() {
        this.items = [];
        this.last = 0;
    }
    // left = 2*n
    // right = 2*n+1
    // parrent = Math.floor(n/2);
    swap(first, second) {
        const save = this.items[first];
        this.items[first] = this.items[second];
        this.items[second] = save;
    }
    add(value) {
        // this.last++;
        // this.items[this.last] = value;
        // let currentIndex = this.last;
        // let parrentIndex;
        // let parrentValue;
        // while(currentIndex > 1) {
        //     parrentIndex = Math.floor(currentIndex/2);
        //     parrentValue = this.items[parrentIndex];
        //     if (parrentValue < value) {
        //         return;
        //     }
        //     this.swap(parrentIndex, currentIndex);
        //     currentIndex = parrentIndex;
        // }
    }

    getFirst() {
        // return this.items[1];
    }

    removeFirst() {
        // if (this.last === 0 ) { return; }
        // let value = this.items[this.last];
        // this.items[1] = value;
        // this.items.length = this.last
        // this.last--;
        // let currentIndex = 1;
        // let leftIndex;
        // let rightIndex;
        // while (currentIndex <= this.last) {
        //     leftIndex = 2 * currentIndex;
        //     rightIndex = 2 * currentIndex + 1;
        //     if(leftIndex > this.last && rightIndex > this.last) { return; }
        //     if (leftIndex <= this.last && this.items[leftIndex] < value) {
        //         this.swap(currentIndex, leftIndex);
        //         currentIndex = leftIndex;
        //     }
        //     if(rightIndex <= this.last && this.items[rightIndex] > value) {
        //         this.swap(currentIndex, rightIndex);
        //         currentIndex = rightIndex;
        //     }
        //     return
        // }
    }
};

module.exports = Heap;
