const minApply = (array) => {
    // return Math.min.apply(null, array);
}

const minLoop = (array) => {
    // let min = +Infinity;
    // array.forEach((item) => {
    //     if(min > item) {
    //         min = item;
    //     }
    // });
    // return min;
}

const maxApply = (array) => {
    // return Math.max.apply(null, array);
}

const maxLoop = (array) => {
    // let max = -Infinity;
    // array.forEach((item) => {
    //     if(max < item) {
    //         max = item;
    //     }
    // });
    // return max;
}

const differenceMaxAndMin = (array) => {
    // let min = +Infinity;
    // let max = -Infinity;
    // array.forEach((item) => {
    //     if(min > item) {
    //         min = item;
    //     }
    //     if(max < item) {
    //         max = item;
    //     }
    // });
    // return max - min;
}

module.exports =  {
    minApply,
    minLoop,
    maxApply,
    maxLoop,
    differenceMaxAndMin,
}

