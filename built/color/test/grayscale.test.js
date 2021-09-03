"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var grayscale_1 = require("../grayscale");
describe('grayscale', function () {
    it('should grayscale a reduced hex color', function () {
        expect((0, grayscale_1.default)('#444')).toEqual('#444');
    });
    it('should grayscale a hex color', function () {
        expect((0, grayscale_1.default)('#CCCD64')).toEqual('#999');
    });
    it('should grayscale an 8-digit hex color', function () {
        expect((0, grayscale_1.default)('#6564CDB3')).toEqual('rgba(153,153,153,0.7)');
    });
    it('should grayscale an 4-digit hex color', function () {
        expect((0, grayscale_1.default)('#0f08')).toEqual('rgba(128,128,128,0.53)');
    });
    it('should grayscale a color with opacity', function () {
        expect((0, grayscale_1.default)('rgba(101,100,205,0.7)')).toEqual('rgba(153,153,153,0.7)');
    });
    it('should return transparent when passed transparent', function () {
        expect((0, grayscale_1.default)('transparent')).toEqual('transparent');
    });
});
