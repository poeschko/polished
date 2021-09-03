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
var animation_1 = require("../animation");
describe('animation', function () {
    describe('single mode', function () {
        it('should pass first eight arguments to the CSS', function () {
            expect(__assign({}, (0, animation_1.default)('rotate', '1s', 'ease-in-out', '0.5s', 5, 'reverse', 'forwards', 'paused'))).toEqual({
                animation: 'rotate, 1s, ease-in-out, 0.5s, 5, reverse, forwards, paused',
            });
        });
        it('should be fine with less than eight arguments', function () {
            expect(__assign({}, (0, animation_1.default)('rotate', '1s', 'ease-in-out'))).toEqual({
                animation: 'rotate, 1s, ease-in-out',
            });
        });
        it('should throw an error if more than eight elements are supplied', function () {
            expect(function () {
                (0, animation_1.default)('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'oops');
            }).toThrow();
        });
    });
    describe('multi mode', function () {
        it('should pass first eight arguments to the CSS in multi mode', function () {
            expect(__assign({}, (0, animation_1.default)(['rotate', '1s', 'ease-in-out', '0.5s', 5, 'reverse', 'forwards', 'paused']))).toEqual({
                animation: 'rotate 1s ease-in-out 0.5s 5 reverse forwards paused',
            });
        });
        it('should be fine with less than eight arguments', function () {
            expect(__assign({}, (0, animation_1.default)(['rotate', '1s', 'ease-in-out']))).toEqual({
                animation: 'rotate 1s ease-in-out',
            });
        });
        it('should be fine with multiple animations', function () {
            expect(__assign({}, (0, animation_1.default)(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s']))).toEqual({
                animation: 'rotate 1s ease-in-out, colorchange 2s',
            });
        });
        it('should throw an error if more than eight elements are supplied in an array', function () {
            expect(function () {
                (0, animation_1.default)(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'oops']);
            }).toThrow();
        });
        it('should throw an error if more than eight elements are supplied in a second array', function () {
            expect(function () {
                (0, animation_1.default)(['rotate'], ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'oops']);
            }).toThrow();
        });
    });
    it('should not allow arrays in single mode', function () {
        expect(function () {
            (0, animation_1.default)('rotate', ['move', '2s'], '1s');
        }).toThrow();
    });
    it('should not allow simple root level values in multi mode', function () {
        expect(function () {
            (0, animation_1.default)(['move', '2s'], 'rotate', '2s');
        }).toThrow();
    });
});
