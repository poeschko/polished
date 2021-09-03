"use strict";
// @flow
Object.defineProperty(exports, "__esModule", { value: true });
// @private
function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
exports.default = capitalizeString;
