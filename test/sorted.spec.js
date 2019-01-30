const mocha = require('mocha');
const assets = require('chai').assert;
const sorted = require('./../self-study/practics/sorted');

describe('Sorted' , () => {
    describe('Buble', () => {
        it('1', () => {
            const array = [1, 3, 2, 4, 7, 6, 5];
            assets.deepEqual(sorted.bubbleSort.bubbleSort1(array), [1,2,3,4,5,6,7])
        })
        it('2', () => {
            const array = [1, 3, 2, 4, 7, 6, 5];
            assets.deepEqual(sorted.bubbleSort.bubbleSort2(array), [1,2,3,4,5,6,7])
        })
        it('3', () => {
            const array = [1, 3, 2, 4, 7, 6, 5];
            assets.deepEqual(sorted.bubbleSort.bubbleSort3(array), [1,2,3,4,5,6,7])
        })
    })

    describe('Selection', () => {
        it('1', () => {
            const array = [1, 3, 2, 4, 7, 6, 5];
            assets.deepEqual(sorted.selectionSort(array), [1,2,3,4,5,6,7])
        })
    })

    describe('Insertion', () => {
        it('1', () => {
            const array = [1, 3, 2, 4, 7, 6, 5];
            assets.deepEqual(sorted.insertionSort(array), [1,2,3,4,5,6,7])
        })
    })

    describe('Quick', () => {
        it('1', () => {
            const array = [1, 3, 2, 4, 7, 6, 5];
            assets.deepEqual(sorted.quickSort(array), [1,2,3,4,5,6,7])
        })
    })

    describe('Cocktail Shaker Sort', () => {
        it('1', () => {
            const array = [1, 3, 2, 4, 7, 6, 5];
            assets.deepEqual(sorted.coctailShakerSort(array), [1,2,3,4,5,6,7])
        })
    })
})
