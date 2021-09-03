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
var hideText_1 = require("../hideText");
describe('hideText', function () {
    it('should return the CSS in JS', function () {
        expect(__assign({}, (0, hideText_1.default)())).toEqual({
            overflow: 'hidden',
            textIndent: '101%',
            whiteSpace: 'nowrap',
        });
    });
    it('should add rules when block has existing rules', function () {
        expect(__assign(__assign({}, (0, hideText_1.default)()), { 'background-image': 'url(logo.png)' })).toEqual({
            'background-image': 'url(logo.png)',
            overflow: 'hidden',
            textIndent: '101%',
            whiteSpace: 'nowrap',
        });
    });
});
