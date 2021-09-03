"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var transitions_1 = require("../transitions");
describe('transitions', function () {
    it('should generate a single transition from a parameter', function () {
        expect(__assign({}, (0, transitions_1.default)('opacity 1.0s ease-in 0s'))).toEqual({
            transition: 'opacity 1.0s ease-in 0s',
        });
    });
    it('should generate a multiple transitions from multiple parameters', function () {
        expect(__assign({}, (0, transitions_1.default)('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s'))).toEqual({
            transition: 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s',
        });
    });
    it('should apply the same transition to an array of properties', function () {
        expect(__assign({}, (0, transitions_1.default)(['color', 'background-color'], '2.0s ease-in 2s'))).toEqual({
            transition: 'color 2.0s ease-in 2s, background-color 2.0s ease-in 2s',
        });
    });
    it('should throw an error when passed a non-string value', function () {
        expect(function () { return (__assign({}, (0, transitions_1.default)(['color', 'background-color'], 1))); }).toThrow('Property must be a string value.');
    });
});
