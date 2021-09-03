"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var meetsContrastGuidelines_1 = require("../meetsContrastGuidelines");
describe('meetsContrastGuidelines', function () {
    it('should return the color contrast guidelines of two hex colors', function () {
        expect((0, meetsContrastGuidelines_1.default)('#444', '#fff')).toEqual({
            AA: true,
            AAA: true,
            AAALarge: true,
            AALarge: true,
        });
    });
    it('should return the color contrast guidelines of two 8-digit hex colors', function () {
        expect((0, meetsContrastGuidelines_1.default)('#6564CDB3', '#ffffff')).toEqual({
            AA: true,
            AAA: false,
            AAALarge: true,
            AALarge: true,
        });
    });
    it('should return the color contrast guidelines of two 4-digit hex colors', function () {
        expect((0, meetsContrastGuidelines_1.default)('#0f08', '#000')).toEqual({
            AA: true,
            AAA: true,
            AAALarge: true,
            AALarge: true,
        });
    });
    it('should return the color contrast guidelines of two rgba colors', function () {
        expect((0, meetsContrastGuidelines_1.default)('rgba(101,100,205,0.7)', 'rgba(0,0,0,1)')).toEqual({
            AA: false,
            AAA: false,
            AAALarge: false,
            AALarge: true,
        });
    });
    it('should return the color contrast guidelines of two rgb colors', function () {
        expect((0, meetsContrastGuidelines_1.default)('rgb(204,205,100)', 'rgb(0,0,0)')).toEqual({
            AA: true,
            AAA: true,
            AAALarge: true,
            AALarge: true,
        });
    });
    it('should return the color contrast guidelines of two hsla colors', function () {
        expect((0, meetsContrastGuidelines_1.default)('hsla(250, 100%, 50%, 0.2)', 'hsla(0, 100%, 100%, 1)')).toEqual({
            AA: true,
            AAA: true,
            AAALarge: true,
            AALarge: true,
        });
    });
    it('should return the color contrast guidelines of two hsl colors', function () {
        expect((0, meetsContrastGuidelines_1.default)('hsl(0, 100%, 50%)', 'hsl(0, 100%, 100%)')).toEqual({
            AA: false,
            AAA: false,
            AAALarge: false,
            AALarge: true,
        });
    });
    it('should return the color contrast guidelines of two named CSS colors', function () {
        expect((0, meetsContrastGuidelines_1.default)('papayawhip', 'black')).toEqual({
            AA: true,
            AAA: true,
            AAALarge: true,
            AALarge: true,
        });
    });
    it('should return failing contrast guidelines when used with a transparent color', function () {
        expect((0, meetsContrastGuidelines_1.default)('transparent', '#000')).toEqual({
            AA: false,
            AAA: false,
            AAALarge: false,
            AALarge: false,
        });
    });
});
