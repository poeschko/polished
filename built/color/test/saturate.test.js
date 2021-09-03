"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var saturate_1 = require("../saturate");
describe('saturate', function () {
    it('should saturate a color by 10%', function () {
        expect((0, saturate_1.default)(0.1, '#444')).toEqual('#4b3d3d');
    });
    it('should saturate a hex color by 20%', function () {
        expect((0, saturate_1.default)(0.2, '#CCCD64')).toEqual('#e0e250');
    });
    it('should saturate an 8-digit hex color by 20%', function () {
        expect((0, saturate_1.default)(0.2, '#6564CDB3')).toEqual('rgba(81,80,226,0.7)');
    });
    it('should saturate an 4-digit hex color by 20%', function () {
        expect((0, saturate_1.default)(0.2, '#0f08')).toEqual('rgba(0,255,0,0.53)');
    });
    it('should saturate a color with opacity by 20%', function () {
        expect((0, saturate_1.default)(0.2, 'rgba(101,100,205,0.7)')).toEqual('rgba(81,80,226,0.7)');
    });
    it('should saturate a color but not go beyond 255', function () {
        expect((0, saturate_1.default)(0.8, 'rgba(255,200,200,0.7)')).toEqual('rgba(255,200,200,0.7)');
    });
    it('should saturate a color when passed a string for amount', function () {
        expect((0, saturate_1.default)('0.1', '#444')).toEqual('#4b3d3d');
    });
    it('should return transparent when passed transparent', function () {
        expect((0, saturate_1.default)('0.1', 'transparent')).toEqual('transparent');
    });
});
