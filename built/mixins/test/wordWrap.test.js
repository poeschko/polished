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
var wordWrap_1 = require("../wordWrap");
describe('wordWrap', function () {
    it('should accept other values', function () {
        expect(__assign({}, (0, wordWrap_1.default)('break-all'))).toEqual({
            overflowWrap: 'break-all',
            wordBreak: 'break-all',
            wordWrap: 'break-all',
        });
    });
    it('should default wrap to break-word', function () {
        expect(__assign({}, (0, wordWrap_1.default)())).toEqual({
            overflowWrap: 'break-word',
            wordBreak: 'break-all',
            wordWrap: 'break-word',
        });
    });
});
