"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var invert_1 = require("../invert");
describe('invert', function () {
    it('should invert a reduced hex color', function () {
        expect((0, invert_1.default)('#448')).toEqual('#bb7');
    });
    it('should invert a hex color', function () {
        expect((0, invert_1.default)('#CCCD64')).toEqual('#33329b');
    });
    it('should invert an 8-digit hex color', function () {
        expect((0, invert_1.default)('#6564CDB3')).toEqual('rgba(154,155,50,0.7)');
    });
    it('should invert an 4-digit hex color', function () {
        expect((0, invert_1.default)('#0f08')).toEqual('rgba(255,0,255,0.53)');
    });
    it('should invert a color with opacity', function () {
        expect((0, invert_1.default)('rgba(101,100,205,0.7)')).toEqual('rgba(154,155,50,0.7)');
    });
    it('should return transparent when passed transparent', function () {
        expect((0, invert_1.default)('transparent')).toEqual('transparent');
    });
});
