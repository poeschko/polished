"use strict";
// @flow
Object.defineProperty(exports, "__esModule", { value: true });
var _rgbToHsl_1 = require("../_rgbToHsl");
describe('hslToHex', function () {
    it('should convert the color red', function () {
        expect({
            background: (0, _rgbToHsl_1.default)({ red: 255, green: 0, blue: 0 }),
        }).toEqual({
            background: {
                hue: 0,
                lightness: 0.5,
                saturation: 1,
            },
        });
    });
    it('should convert the color blue', function () {
        expect({
            background: (0, _rgbToHsl_1.default)({ red: 0, green: 0, blue: 255 }),
        }).toEqual({
            background: {
                hue: 240,
                lightness: 0.5,
                saturation: 1,
            },
        });
    });
    it('should convert the color green', function () {
        expect({
            background: (0, _rgbToHsl_1.default)({ red: 0, green: 255, blue: 0 }),
        }).toEqual({
            background: {
                hue: 120,
                lightness: 0.5,
                saturation: 1,
            },
        });
    });
    it('should convert black', function () {
        expect({
            background: (0, _rgbToHsl_1.default)({ red: 0, green: 0, blue: 0 }),
        }).toEqual({
            background: {
                hue: 0,
                lightness: 0,
                saturation: 0,
            },
        });
    });
    it('should convert the color red with a transparency of 0.6', function () {
        expect({
            background: (0, _rgbToHsl_1.default)({
                red: 255,
                green: 0,
                blue: 0,
                alpha: 0.5,
            }),
        }).toEqual({
            background: {
                alpha: 0.5,
                hue: 0,
                lightness: 0.5,
                saturation: 1,
            },
        });
    });
    it('should convert black with a transparency of 0.6', function () {
        expect({
            background: (0, _rgbToHsl_1.default)({
                red: 0,
                green: 0,
                blue: 0,
                alpha: 0.5,
            }),
        }).toEqual({
            background: {
                alpha: 0.5,
                hue: 0,
                lightness: 0,
                saturation: 0,
            },
        });
    });
});
