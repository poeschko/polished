"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var rgbToColorString_1 = require("../rgbToColorString");
describe('rgbToColorString', function () {
    it('should convert a RgbColor to a reduced hex string', function () {
        expect({
            background: (0, rgbToColorString_1.default)({ red: 255, green: 255, blue: 255 }),
        }).toEqual({
            background: '#fff',
        });
    });
    it('should convert a RgbColor to a hex string', function () {
        expect({
            background: (0, rgbToColorString_1.default)({ red: 255, green: 205, blue: 100 }),
        }).toEqual({
            background: '#ffcd64',
        });
    });
    it('should convert a RgbaColor to a rgba string', function () {
        expect({
            background: (0, rgbToColorString_1.default)({
                red: 255,
                green: 205,
                blue: 100,
                alpha: 0.72,
            }),
        }).toEqual({
            background: 'rgba(255,205,100,0.72)',
        });
    });
    it('should convert a RgbaColor with 0 alpha to a rgba string', function () {
        expect({
            background: (0, rgbToColorString_1.default)({
                red: 255,
                green: 205,
                blue: 100,
                alpha: 0.0,
            }),
        }).toEqual({
            background: 'rgba(255,205,100,0)',
        });
    });
    it('should throw an error if anything else than a RgbColor or RgbaColor is provided', function () {
        // $FlowFixMe
        expect(function () { return (0, rgbToColorString_1.default)({ red: 255, green: 1, hue: 240 }); }).toThrow('Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.');
    });
});
