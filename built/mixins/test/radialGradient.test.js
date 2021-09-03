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
var radialGradient_1 = require("../radialGradient");
describe('radialGradient', function () {
    it('returns the correct object when only passed two color stops, including parsed fallback with no percentage', function () {
        expect(__assign({}, (0, radialGradient_1.default)({
            colorStops: ['#fff', '#000'],
        }))).toEqual({
            backgroundColor: '#fff',
            backgroundImage: 'radial-gradient(#fff, #000)',
        });
    });
    it('returns the correct object when passed extent, shape, and position, including parsed fallback with percentage', function () {
        expect(__assign({}, (0, radialGradient_1.default)({
            colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
            extent: 'farthest-corner at 45px 45px',
            position: 'center',
            shape: 'ellipse',
        }))).toEqual({
            backgroundColor: '#00FFFF',
            backgroundImage: 'radial-gradient(center ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
        });
    });
    it('returns the correct object when passed extent and shape', function () {
        expect(__assign({}, (0, radialGradient_1.default)({
            colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
            extent: 'farthest-corner at 45px 45px',
            shape: 'ellipse',
        }))).toEqual({
            backgroundColor: '#00FFFF',
            backgroundImage: 'radial-gradient(ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
        });
    });
    it('returns the correct object when passed just extent', function () {
        expect(__assign({}, (0, radialGradient_1.default)({
            colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
            extent: 'farthest-corner at 45px 45px',
        }))).toEqual({
            backgroundColor: '#00FFFF',
            backgroundImage: 'radial-gradient(farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
        });
    });
    it('properly overrides the fallback when it is passed', function () {
        expect(__assign({}, (0, radialGradient_1.default)({
            colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
            extent: 'farthest-corner at 45px 45px',
            fallback: '#FFF',
        }))).toEqual({
            backgroundColor: '#FFF',
            backgroundImage: 'radial-gradient(farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
        });
    });
    it('should throw an error when not provided at least 2 color-stops', function () {
        expect(function () {
            (0, radialGradient_1.default)({
                colorStops: ['#00FFFF 0%'],
                extent: 'farthest-corner at 45px 45px',
                fallback: '#FFF',
            });
        }).toThrow('radialGradient requries at least 2 color-stops to properly render.');
    });
});
