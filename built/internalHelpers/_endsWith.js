"use strict";
// @flow
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if a string ends with something
 * @private
 */
function endsWith(string, suffix) {
    return string.substr(-suffix.length) === suffix;
}
exports.default = endsWith;
