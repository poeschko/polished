"use strict";
// @flow
Object.defineProperty(exports, "__esModule", { value: true });
function curried(f, length, acc) {
    return function fn() {
        // eslint-disable-next-line prefer-rest-params
        var combined = acc.concat(Array.prototype.slice.call(arguments));
        return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
    };
}
// eslint-disable-next-line no-redeclare
function curry(f) {
    // eslint-disable-line no-redeclare
    return curried(f, f.length, []);
}
exports.default = curry;
