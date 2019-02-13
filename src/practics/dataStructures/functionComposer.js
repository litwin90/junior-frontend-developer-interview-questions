const functionComposer = (...func) => {
    // const funcs = [].slice.apply(func);
    // return (...values) => {
    //     return funcs.reduceRight((acum, func) => {
    //         return func(acum);
    //     }, ...values)
    // }
};

module.exports = functionComposer;
