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
var backgrounds_1 = require("../backgrounds");
describe('backgrounds', function () {
    it('should generate a single background from a parameter', function () {
        expect(__assign({}, (0, backgrounds_1.default)('url("/image/background.jpg")'))).toEqual({
            background: 'url("/image/background.jpg")',
        });
    });
    it('should generate a multiple backgrounds from multiple parameters', function () {
        expect(__assign({}, (0, backgrounds_1.default)('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat'))).toEqual({
            background: 'url("/image/background.jpg"), linear-gradient(red, green), center no-repeat',
        });
    });
});
