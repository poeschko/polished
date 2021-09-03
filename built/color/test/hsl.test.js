"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var hsl_1 = require("../hsl");
describe('hsl', function () {
    it('should convert numbers to a hex color', function () {
        expect({ background: (0, hsl_1.default)(360, 0.75, 0.4) }).toEqual({
            background: '#b31919',
        });
    });
    it('should convert a hls object to a hex color', function () {
        expect({
            background: (0, hsl_1.default)({ hue: 360, saturation: 0.75, lightness: 0.4 }),
        }).toEqual({
            background: '#b31919',
        });
    });
    it('should convert to a reduce hex value if possible', function () {
        expect({ background: (0, hsl_1.default)(360, 1, 0.4) }).toEqual({
            background: '#c00',
        });
    });
    it('should throw an error if an object and multiple arguments are passed', function () {
        expect(function () { return ({
            background: (0, hsl_1.default)({ hue: 360, saturation: 0.75, lightness: 0.4 }, 250, 100),
        }); }).toThrow('Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).');
    });
});
