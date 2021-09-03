"use strict";
// @flow
Object.defineProperty(exports, "__esModule", { value: true });
var _nameToHex_1 = require("../_nameToHex");
describe('nameToHex', function () {
    it('should convert a named color to a hex value', function () {
        expect({ background: (0, _nameToHex_1.default)('white') }).toEqual({
            background: '#fff',
        });
    });
    it('should convert a camel-cased named color to a hex value', function () {
        expect({ background: (0, _nameToHex_1.default)('PowderBlue') }).toEqual({
            background: '#b0e0e6',
        });
    });
    it('should return a passed hex value without mutation', function () {
        expect({ background: (0, _nameToHex_1.default)('#fff') }).toEqual({
            background: '#fff',
        });
    });
    it('should return a passed RGB string value without mutation', function () {
        expect({ background: (0, _nameToHex_1.default)('rgb(0,0,0)') }).toEqual({
            background: 'rgb(0,0,0)',
        });
    });
    it('should return a passed HSL value without mutation', function () {
        expect({ background: (0, _nameToHex_1.default)('hsl(180, 50%, 50%)') }).toEqual({
            background: 'hsl(180, 50%, 50%)',
        });
    });
    it('should return a non-string value without mutation', function () {
        // $FlowFixMe
        expect({ background: (0, _nameToHex_1.default)(2) }).toEqual({
            background: 2,
        });
    });
});
