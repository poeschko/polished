"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var getContrast_1 = require("../getContrast");
describe('getContrast', function () {
    it('should return the color contrast of two hex colors', function () {
        expect((0, getContrast_1.default)('#444', '#fff')).toEqual(9.72);
    });
    it('should return the color contrast of two 8-digit hex colors', function () {
        expect((0, getContrast_1.default)('#6564CDB3', '#ffffff')).toEqual(4.93);
    });
    it('should return the color contrast of two 4-digit hex colors', function () {
        expect((0, getContrast_1.default)('#0f08', '#000')).toEqual(15.3);
    });
    it('should return the color contrast of two rgba colors', function () {
        expect((0, getContrast_1.default)('rgba(101,100,205,0.7)', 'rgba(0,0,0,1)')).toEqual(4.26);
    });
    it('should return the color contrast of two rgb colors', function () {
        expect((0, getContrast_1.default)('rgb(204,205,100)', 'rgb(0,0,0)')).toEqual(12.48);
    });
    it('should return the color contrast of two hsla colors', function () {
        expect((0, getContrast_1.default)('hsla(250, 100%, 50%, 0.2)', 'hsla(0, 100%, 100%, 1)')).toEqual(8.27);
    });
    it('should return the color contrast of two hsl colors', function () {
        expect((0, getContrast_1.default)('hsl(0, 100%, 50%)', 'hsl(0, 100%, 100%)')).toEqual(3.99);
    });
    it('should return the color contrast of two named CSS colors', function () {
        expect((0, getContrast_1.default)('papayawhip', 'white')).toEqual(1.13);
    });
    it('should return 1 when used with a transparent color', function () {
        expect((0, getContrast_1.default)('transparent', '#000')).toEqual(1);
    });
});
