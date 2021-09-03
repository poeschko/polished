"use strict";
// @flow
Object.defineProperty(exports, "__esModule", { value: true });
function guard(lowerBoundary, upperBoundary, value) {
    return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
exports.default = guard;
