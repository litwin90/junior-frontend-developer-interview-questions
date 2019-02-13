/* eslint-disable no-extend-native */
/* eslint-disable prefer-rest-params */

// Version #1
function bind(fn, context) {
    return function() {
        return fn.apply(context, arguments);
    };
}

// Version #2
if (!Function.prototype.bind) {
    (function() {
        const ArrayPrototypeSlice = Array.prototype.slice;
        Function.prototype.bind = function() {
            const fn = this;
            const context = arguments[0];
            const args = ArrayPrototypeSlice.call(arguments, 1);
            if (typeof fn !== 'function') {
                throw new TypeError('message');
            }
            return function() {
                args.push(arguments);
                return fn.apply(context, args);
            };
        };
    })();
}
