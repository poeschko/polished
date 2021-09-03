"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var rgb_1 = require("../rgb");
describe('rgb', function () {
    it('should convert multiple numbers to a hex color', function () {
        expect({ background: (0, rgb_1.default)(255, 205, 100) }).toEqual({
            background: '#ffcd64',
        });
    });
    it('should convert a rgb object to a hex color', function () {
        expect({
            background: (0, rgb_1.default)({ red: 255, green: 205, blue: 100 }),
        }).toEqual({
            background: '#ffcd64',
        });
    });
    it('should convert to a reduce hex value if possible', function () {
        expect({
            background: (0, rgb_1.default)({ red: 255, green: 255, blue: 255 }),
        }).toEqual({
            background: '#fff',
        });
    });
    it('should throw an error if an object and multiple arguments are passed', function () {
        expect(function () { return ({
            background: (0, rgb_1.default)({ red: 255, green: 1, blue: 1 }, 250, 100),
        }); }).toThrow('Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).');
    });
});
