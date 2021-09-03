"use strict";
// @flow
Object.defineProperty(exports, "__esModule", { value: true });
var _hslToHex_1 = require("../_hslToHex");
describe('hslToHex', function () {
    it('should convert numbers to a hex color', function () {
        expect({ background: (0, _hslToHex_1.default)(360, 0.75, 0.4) }).toEqual({
            background: '#b31919',
        });
    });
    it('should convert the color red', function () {
        expect({ background: (0, _hslToHex_1.default)(0, 1, 0.5) }).toEqual({
            background: '#f00',
        });
    });
    it('should convert the color yellow', function () {
        expect({ background: (0, _hslToHex_1.default)(60, 1, 0.5) }).toEqual({
            background: '#ff0',
        });
    });
    it('should convert the color lime', function () {
        expect({ background: (0, _hslToHex_1.default)(120, 1, 0.5) }).toEqual({
            background: '#0f0',
        });
    });
    it('should convert the color cyan', function () {
        expect({ background: (0, _hslToHex_1.default)(180, 1, 0.5) }).toEqual({
            background: '#0ff',
        });
    });
    it('should convert the color blue', function () {
        expect({ background: (0, _hslToHex_1.default)(240, 1, 0.5) }).toEqual({
            background: '#00f',
        });
    });
    it('should convert the color magenta', function () {
        expect({ background: (0, _hslToHex_1.default)(300, 1, 0.5) }).toEqual({
            background: '#f0f',
        });
    });
    it('should convert black', function () {
        expect({ background: (0, _hslToHex_1.default)(360, 0, 0.4) }).toEqual({
            background: '#666',
        });
    });
});
