// Сортировка пузырьком
const swap = (first, second, array) => {
    const save = array[first];
    array[first] = array[second];
    array[second] = save;
    return array;
};

const bubbleSort1 = (array) => {
    // for(let j = 0; j < array.length; j++) {
    //     for(let i = 0; i < array.length; i++) {
    //         if(array[i] > array[i + 1]) {
    //             swap(i, i + 1, array)
    //         }
    //     }
    // }
    // return array;
};

// Сортировка пузырьком
const bubbleSort2 = (array) => {
    // let isSorted = false;
    // while(!isSorted) {
    //     let isChanged = false;

    //     for(let index = 0; index < array.length; index++) {
    //         if (array[index] > array[index +1]) {
    //             swap(index, index +1, array);
    //             isChanged = true;
    //         }
    //     }
    //     isSorted = !isChanged;
    // }
    // return array;
};

// Сортировка пузырьком
const bubbleSort3 = (array) => {
    // let isSorted = false;
    // while(!isSorted) {
    //     let isChanged = false;

    //     array.reduce((first, second, index, array) => {
    //         if (first > second) {
    //             swap(index - 1, index, array);
    //             isChanged = true;
    //         }
    //         return second;
    //     }, array[0])
    //     isSorted = !isChanged;
    // }
    // return array;
};

module.exports = {
    bubbleSort1,
    bubbleSort2,
    bubbleSort3,
};
