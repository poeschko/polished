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
var backgroundImages_1 = require("../backgroundImages");
describe('backgroundImages', function () {
    it('should generate a single background from a parameter', function () {
        expect(__assign({}, (0, backgroundImages_1.default)('url("/image/background.jpg")'))).toEqual({
            backgroundImage: 'url("/image/background.jpg")',
        });
    });
    it('should generate a multiple backgroundImages from multiple parameters', function () {
        expect(__assign({}, (0, backgroundImages_1.default)('url("/image/background.jpg")', 'linear-gradient(red, green)'))).toEqual({
            backgroundImage: 'url("/image/background.jpg"), linear-gradient(red, green)',
        });
    });
});
