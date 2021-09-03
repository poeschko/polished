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
// @flow
var size_1 = require("../size");
describe('size', function () {
    it('should pass parameters to the values of height and width', function () {
        expect(__assign({}, (0, size_1.default)('300px', '250px'))).toEqual({
            height: '300px',
            width: '250px',
        });
    });
    it('should set height and width to the same value when only one parameter is passed', function () {
        expect(__assign({}, (0, size_1.default)('300px'))).toEqual({
            height: '300px',
            width: '300px',
        });
    });
    it('should pass parameters to the values of height and width when passed integers', function () {
        expect(__assign({}, (0, size_1.default)(300, 250))).toEqual({
            height: 300,
            width: 250,
        });
    });
    it('should pass parameters to the values of height and width when passed zero', function () {
        expect(__assign({}, (0, size_1.default)(0))).toEqual({
            height: 0,
            width: 0,
        });
    });
});
