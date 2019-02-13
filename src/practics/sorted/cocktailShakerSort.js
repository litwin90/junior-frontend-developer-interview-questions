// Шейкер сортировка
const swap = (first, second, array) => {
    const save = array[first];
    array[first] = array[second];
    array[second] = save;
    return array;
};

const cocktailShakerSort = (array) => {
    // let left = 0;
    // let right = array.length -1;
    // while (left - right !== 1) {
    //     let minIndex = 0;
    //     let maxIndex = 0;
    //     for(let index = left; index < right; index++) {
    //         if(array[index] > array[index + 1]) {
    //             swap(index, index + 1, array);
    //             maxIndex = index;
    //         }
    //     }
    //     right = maxIndex;
    //     if( left > right) { break; }
    //     for(let index = right; index > left; index--) {
    //         if(array[index] < array[index - 1]) {
    //             swap(index, index - 1, array);
    //             minIndex = index;
    //         }
    //     }
    //     left = minIndex;
    // }
    // return array;
};

module.exports = cocktailShakerSort;
