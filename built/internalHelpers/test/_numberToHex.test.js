"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _numberToHex_1 = require("../_numberToHex");
describe('numberToHex', function () {
    it('should convert 0 to "00"', function () {
        expect((0, _numberToHex_1.default)(0)).toEqual('00');
    });
    it('should convert 15 to "0f"', function () {
        expect((0, _numberToHex_1.default)(15)).toEqual('0f');
    });
    it('should convert 16 to "10"', function () {
        expect((0, _numberToHex_1.default)(16)).toEqual('10');
    });
    it('should convert 17 to "11"', function () {
        expect((0, _numberToHex_1.default)(17)).toEqual('11');
    });
});
