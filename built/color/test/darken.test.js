"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var darken_1 = require("../darken");
describe('darken', function () {
    it('should darken a color by 20%', function () {
        expect((0, darken_1.default)(0.2, '#444')).toEqual('#111');
    });
    it('should darken an 8-digit hex color by 20%', function () {
        expect((0, darken_1.default)(0.2, '#6564CDB3')).toEqual('rgba(51,50,153,0.7)');
    });
    it('should darken an 4-digit hex color by 30%', function () {
        expect((0, darken_1.default)(0.3, '#0f08')).toEqual('rgba(0,102,0,0.53)');
    });
    it('should darken a color with opacity by 20%', function () {
        expect((0, darken_1.default)(0.2, 'rgba(101,100,205,0.7)')).toEqual('rgba(51,50,153,0.7)');
    });
    it('should darken a color with a value of 255 and opacity by 10%', function () {
        expect((0, darken_1.default)(0.1, 'rgba(255,140,140,0.7)')).toEqual('rgba(255,89,89,0.7)');
    });
    it('should darken a color but not go below 0', function () {
        expect((0, darken_1.default)(0.8, 'rgba(40,20,10,0.7)')).toEqual('rgba(0,0,0,0.7)');
    });
    it('should darken a color by when passed a string for amount', function () {
        expect((0, darken_1.default)('0.2', '#444')).toEqual('#111');
    });
    it('should return transparent when passed transparent', function () {
        expect((0, darken_1.default)('0.2', 'transparent')).toEqual('transparent');
    });
});
