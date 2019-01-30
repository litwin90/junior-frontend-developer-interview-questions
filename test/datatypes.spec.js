const mocha = require('mocha');
const assets = require('chai').assert;
const dataTypes = require('../self-study/practics/dataStructures');

const { Stack, Queue, MyDoubleLinkedList, Heap, MyArray, LinkedList, MySet, MyMap, BinaryThree, FunctionComposer } = dataTypes;

describe('Data types', () => {
    describe('Binart Three Search', () => {
        it('add', () => {
            const binaryThree = new BinaryThree();
            binaryThree.add(2);
            binaryThree.add(4);
            binaryThree.add(3);
            assets.equal(binaryThree.root.right.left.value, 3);
        });

        it('has', () => {
            const binaryThree = new BinaryThree();
            binaryThree.add(1);
            binaryThree.add(5);
            binaryThree.add(4);
            binaryThree.add(2);
            binaryThree.add(3);
            assets.equal(binaryThree.has(1), true);
        })

        it('remove', () => {
            const binaryThree = new BinaryThree();
            binaryThree.add(1);
            binaryThree.add(5);
            binaryThree.add(4);
            binaryThree.add(6);
            binaryThree.add(3);
            assets.equal(binaryThree.has(4), true);
            binaryThree.remove(4);
            assets.equal(binaryThree.has(4), false);
        })

        it('min', () => {
            const binaryThree = new BinaryThree();
            binaryThree.add(1);
            binaryThree.add(5);
            binaryThree.add(4);
            binaryThree.add(6);
            binaryThree.add(3);
            assets.equal(binaryThree.min(), 1);
        })

        it('max', () => {
            const binaryThree = new BinaryThree();
            binaryThree.add(1);
            binaryThree.add(5);
            binaryThree.add(4);
            binaryThree.add(6);
            binaryThree.add(3);
            assets.equal(binaryThree.max(), 6);
        })
    })
    describe('Set', () => {
        it('set', () => {
            const set = new MySet();
            set.set('1');
            assets.equal(set.length(), 1);
        });

        it('get', () => {
            const set = new MySet();
            set.set('1')
            assets.equal(set.get('1'), '1');
        })
        it('delete', () => {
            const set = new MySet();
            set.set('1');
            assets.equal(set.get('1'), '1');
            set.remove('1');
            assets.equal(set.length(), 0);
        })
        it('has', () => {
            const set = new MySet();
            set.set('2');
            assets.equal(set.has('2'), true);
        })
    })
    describe('Map', () => {
        it('has', () => {
            const map = new MyMap();
            map.set('2', 'sss');
            assets.equal(map.has('2'), true);
        })
        it('set', () => {
            const map = new MyMap();
            map.set('2', 'sss');
            assets.equal(map.has('2'), true);
        })
        it('get', () => {
            const map = new MyMap();
            map.set('2', 'sss');
            assets.equal(map.get('2'), 'sss');
        })
        
        it('delete', () => {
            const map = new MyMap();
            map.set('2', 'sss');
            assets.equal(map.has('2'), true);
            map.delete('2');
            assets.equal(map.has('2'), false);
        })     
        it('Values', () => {
            const map = new MyMap();
            map.set('2', 'sss');
            assets.deepEqual(map.values(), [['sss']]);
        })  
        it('Keys', () => {
            const map = new MyMap();
            map.set('2', 'sss');
            assets.deepEqual(map.keys(), ['2']);
        }) 
    })
    describe('Double linked list',() => {
        describe('add', () => {
            const doubleLinked = new MyDoubleLinkedList();
            it('Empty', () => {
                doubleLinked.add(1);
                assets.equal(doubleLinked.length, 1);
            })
            it('No empty', () => {
                doubleLinked.add(2);
                assets.equal(doubleLinked.length, 2);
            })
        })

        // describe('insert', () => {
        //     const linked = new DoubleLinkedList();
        //     it('First elem', () => {
        //         linked.insert(0, 1);
        //         assets.equal(linked.length, 1);
        //     })
        //     it('Last elem', () => {
        //         linked.add(2);
        //         linked.insert(1, 3);
        //         assets.equal(linked.length, 3);
        //     })
        //     it('Elem to midle', () => {
        //         linked.insert(2, 4);
        //         assets.equal(linked.length, 4);
        //     });
        //     it('Out of range', () => {
        //         assets.equal(linked.insert(20, 3), false);
        //     })
        // });
        // describe('remove', () => {
        //     const linked = new DoubleLinkedList();
        //     it('Empty', () => {
        //         assets.equal(linked.remove(0), false)
        //     })
        //     it('First element', () => {
        //         linked.add(1);
        //         linked.add(2);
        //         linked.remove(0);
        //         assets.equal(linked.length, 1);
        //     })
        //     it('Last element', () => {
        //         linked.add(3);
        //         linked.remove(1);
        //         assets.equal(linked.length, 1);
        //     })
        //     it('Element in midle', () => {
        //         linked.add(4);
        //         linked.add(5);
        //         linked.remove(1);
        //         assets.equal(linked.length, 2);
        //     })
        //     it('Remove nonexistent positive element', () => {
        //         assets.equal(linked.remove(20), false);
        //     })
        //     it('Remove nonexistent negative element', () => {
        //         assets.equal(linked.remove(-20), false);
        //     })
        // })
    })
    describe('Linked List', () => {
      
        describe('Add', () => {
            it('Empty', () => {
                const linked = new LinkedList();
                linked.add(1);
                assets.equal(linked.length, 1);
            })
            it('No empty', () => {
                const linked = new LinkedList();
                linked.add(1);
                linked.add(2);
                assets.equal(linked.length, 2);
            })
        })

        describe('Remove', () => {
          
            it('First elem', () => {
                const linked = new LinkedList();
                linked.add(1);
                linked.add(2);
                linked.remove(0);
                assets.equal(linked.length, 1);
            });

            it('Last elem', () => {
                const linked = new LinkedList();
                linked.add(1);
                linked.add(2);
                linked.remove(1);
                assets.equal(linked.length, 1);
            });
            it('Elem in midle', () => {
                const linked = new LinkedList();
                linked.add(1);
                linked.add(2);
                linked.add(3);
                linked.remove(1);
                assets.equal(linked.length, 2);
            });
            it('Out of range', () => {
                const linked = new LinkedList();
                assets.equal(linked.remove(20), false);
            });
        })

        describe('Insert', () => {
            it('In head', () => {
                const linked = new LinkedList();
                linked.add(1);
                linked.add(2);
                linked.insert(0, 3);
                assets.equal(linked.length, 3);
            })
            it('In tail', () => {
                const linked = new LinkedList();
                linked.add(1);
                linked.add(2);
                linked.insert(1, 3);
                assets.equal(linked.length, 3);
            })
            it('In middle', () => {
                const linked = new LinkedList();
                linked.add(1);
                linked.add(2);
                linked.add(3);
                assets.equal(linked.length, 3);
                linked.insert(1, 4);
                assets.equal(linked.length, 4);
                assets.equal(linked.head.next.value, 4);
            })
            it('Out of range', () => {
                const linked = new LinkedList();
                linked.add(1);
                assets.equal(linked.insert(20), false)
            })
        });
    });
    describe('Stack', () => {  
    
        it('Empty', () => {
            const stack = new Stack();
            assets.deepEqual(stack.items, []);
        });
      
        it('Add 1 .. 3', () => { 
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            assets.deepEqual(stack.items, [1,2,3])
        });
     
        it('Remove', () => {
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            stack.pop();
            assets.deepEqual(stack.items, [1, 2])
        });
    })

    describe('Heap', () => {
        it('empty', () => { 
            const queue = new Heap();
            assets.deepEqual(queue.items, [])
        });
       
        it('add 1 .. 3', () => {
            const queue = new Heap();
            queue.add(1)
            queue.add(2)
            queue.add(3);
            assets.deepEqual(queue.items, [,1,2,3])
        })
        it('removeFirst', () => {
            const queue = new Heap();
            queue.add(1)
            queue.add(2)
            queue.add(3);
            queue.removeFirst();
            assets.deepEqual(queue.items, [,2,3])
        })
    })
    describe('Queue', () => {
        it('empty', () => { 
            const queue = new Queue();
            assets.deepEqual(queue.items, [])
        });
       
        it('add 1 .. 3', () => {
            const queue = new Queue();
            queue.add(1)
            queue.add(2)
            queue.add(3);
            assets.deepEqual(queue.items, [1,2,3])
        })
        it('remove', () => {
            const queue = new Queue();
            queue.add(1)
            queue.add(2)
            queue.add(3);
            queue.remove();
            assets.deepEqual(queue.items, [2,3])
        })
    })

    describe('Function composer', () => {
        it('check', () => {
            const greet = function(name){ return "hi: " + name; };
            const exclaim = function(statement){ return statement.toUpperCase() + "!"; };
            const welcome = FunctionComposer(greet, exclaim);
            assets.equal(welcome('moe'), 'hi: MOE!');
        })
    })
    describe('Array', () => {
        const arr =  [-1, 1, 3, 5, 8, 9];
        describe('apply', ()=> {
            it('max', () => {
                assets.equal(MyArray.maxApply(arr), 9);
            })
            it('min', () => {
                assets.equal(MyArray.minApply(arr), -1);
            });
        });
        describe('loop', () => {
           
            it('max', () => {
                assets.equal(MyArray.maxLoop(arr), 9);
            })
            it('min', () => {
                assets.equal(MyArray.minLoop(arr), -1);
            });
        });
        it('difference', () => {
            assets.equal(MyArray.differenceMaxAndMin(arr), 10)
        })
    });
})