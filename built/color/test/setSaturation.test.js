"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var setSaturation_1 = require("../setSaturation");
describe('setSaturation', function () {
    it('should update the saturation of an hex color and return a hex color', function () {
        expect((0, setSaturation_1.default)(0.2, '#CCCD64')).toEqual('#adad84');
    });
    it('should update the saturation of an 8-digit hex color and return an rgba color', function () {
        expect((0, setSaturation_1.default)(0.2, '#6564CDB3')).toEqual('rgba(132,132,173,0.7)');
    });
    it('should update the saturation of an 4-digit hex color and return an rgba color', function () {
        expect((0, setSaturation_1.default)(0.2, '#0f08')).toEqual('rgba(102,153,102,0.53)');
    });
    it('should update the saturation of an rgb color and return a hex color', function () {
        expect((0, setSaturation_1.default)(0.2, 'rgb(101,100,205)')).toEqual('#8484ad');
    });
    it('should update the saturation of an rgba color and return an rgba color', function () {
        expect((0, setSaturation_1.default)(0.2, 'rgba(101,100,205,0.7)')).toEqual('rgba(132,132,173,0.7)');
    });
    it('should update the saturation when passed a string', function () {
        expect((0, setSaturation_1.default)('0.75', 'rgba(204,205,100,0.7)')).toEqual('rgba(228,229,76,0.7)');
    });
    it('should return transparent when passed transparent', function () {
        expect((0, setSaturation_1.default)('0.75', 'transparent')).toEqual('transparent');
    });
});
