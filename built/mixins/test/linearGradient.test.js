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
var linearGradient_1 = require("../linearGradient");
describe('linearGradient', function () {
    it('returns the correct object when only passed two color stops, including parsed fallback with no percentage', function () {
        expect(__assign({}, (0, linearGradient_1.default)({
            colorStops: ['#fff', '#000'],
        }))).toEqual({
            backgroundColor: '#fff',
            backgroundImage: 'linear-gradient(#fff, #000)',
        });
    });
    it('returns the right value for fallback when first value is rgb(a)', function () {
        expect(__assign({}, (0, linearGradient_1.default)({
            colorStops: [
                'rgba(19, 20, 21, 0.5) 0%',
                'rgba(83, 250, 197, 0.5) 33%',
                'rgba(93, 84, 255, 0.5) 100%',
            ],
            toDirection: '0deg',
        }))).toEqual({
            backgroundColor: 'rgba(19, 20, 21, 0.5)',
            backgroundImage: 'linear-gradient(0deg, rgba(19, 20, 21, 0.5) 0%, rgba(83, 250, 197, 0.5) 33%, rgba(93, 84, 255, 0.5) 100%)',
        });
    });
    it('consistently formats without spaces in rgb(a)', function () {
        expect(__assign({}, (0, linearGradient_1.default)({
            colorStops: [
                'rgba(19,20,21,0.5) 0%',
                'rgba(83,250,197,0.5) 33%',
                'rgba(93,84,255,0.5) 100%',
            ],
            toDirection: '0deg',
        }))).toEqual({
            backgroundColor: 'rgba(19, 20, 21, 0.5)',
            backgroundImage: 'linear-gradient(0deg, rgba(19, 20, 21, 0.5) 0%, rgba(83, 250, 197, 0.5) 33%, rgba(93, 84, 255, 0.5) 100%)',
        });
    });
    it('returns the correct object when passed toDirection, including parsed fallback with percentage', function () {
        expect(__assign({}, (0, linearGradient_1.default)({
            colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
            toDirection: '90deg',
        }))).toEqual({
            backgroundColor: '#00FFFF',
            backgroundImage: 'linear-gradient(90deg, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
        });
    });
    it('properly overrides the fallback when it is passed', function () {
        expect(__assign({}, (0, linearGradient_1.default)({
            colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
            toDirection: 'to top right',
            fallback: '#FFF',
        }))).toEqual({
            backgroundColor: '#FFF',
            backgroundImage: 'linear-gradient(to top right, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
        });
    });
    it('should throw an error when not provided at least 2 color-stops', function () {
        expect(function () {
            (0, linearGradient_1.default)({
                colorStops: ['#00FFFF 0%'],
                toDirection: 'to top right',
                fallback: '#FFF',
            });
        }).toThrow('linearGradient requries at least 2 color-stops to properly render.');
    });
});
