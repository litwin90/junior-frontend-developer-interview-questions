// Сортировка выбором
const swap = (first, second, array) => {
    const save = array[first];
    array[first] = array[second]
    array[second] = save;
    return array;
}

const selectionSort = (array) => {
    // for(let i = 0; i < array.length; i++) {
    //     let minIndex = i;
    //     for(let index = minIndex; index < array.length; index++) {
    //         if (array[index] < array[minIndex]) {
    //             minIndex = index;
    //         }
    //     }
    //     swap(i, minIndex, array);
    // }
    // return array;
}

module.exports = selectionSort;