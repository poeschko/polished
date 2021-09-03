"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var complement_1 = require("../complement");
describe('complement', function () {
    it('should return the complement of a reduced hex color', function () {
        expect((0, complement_1.default)('#448')).toEqual('#884');
    });
    it('should return the complement of a hex color', function () {
        expect((0, complement_1.default)('#CCCD64')).toEqual('#6564cd');
    });
    it('should return the complement of an 8-digit hex color', function () {
        expect((0, complement_1.default)('#6564CDB3')).toEqual('rgba(204,205,100,0.7)');
    });
    it('should return the complement of an 4-digit hex color', function () {
        expect((0, complement_1.default)('#0f08')).toEqual('rgba(255,0,255,0.53)');
    });
    it('should return the complement of a color with opacity', function () {
        expect((0, complement_1.default)('rgba(101,100,205,0.7)')).toEqual('rgba(204,205,100,0.7)');
    });
    it('should return transparent when passed transparent', function () {
        expect((0, complement_1.default)('transparent')).toEqual('transparent');
    });
});
