"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
function numberToHex(value) {
    var hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
exports.default = numberToHex;
