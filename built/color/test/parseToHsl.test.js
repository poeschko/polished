"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseToHsl_1 = require("../parseToHsl");
describe('parseToHsl', function () {
    it('should parse a hex color representation', function () {
        expect((0, parseToHsl_1.default)('#Ff43AE')).toEqual({
            hue: 325.8510638297872,
            lightness: 0.6313725490196078,
            saturation: 1,
        });
    });
    it('should parse an 8-digit hex color representation', function () {
        expect((0, parseToHsl_1.default)('#Ff43AEA7')).toEqual({
            alpha: 0.65,
            hue: 325.8510638297872,
            lightness: 0.6313725490196078,
            saturation: 1,
        });
    });
    it('should parse an 4-digit hex color representation', function () {
        expect((0, parseToHsl_1.default)('#0f08')).toEqual({
            alpha: 0.53,
            hue: 120,
            lightness: 0.5,
            saturation: 1,
        });
    });
    it('should parse a reduced hex color representation', function () {
        expect((0, parseToHsl_1.default)('#45a')).toEqual({
            hue: 230,
            lightness: 0.4666666666666667,
            saturation: 0.42857142857142855,
        });
    });
    it('should parse a rgba color representation', function () {
        expect((0, parseToHsl_1.default)('rgba(174,67,255,0.6)')).toEqual({
            alpha: 0.6,
            hue: 274.1489361702128,
            lightness: 0.6313725490196078,
            saturation: 1,
        });
    });
    it('should parse a rgb color representation', function () {
        expect((0, parseToHsl_1.default)('rgb(174,67,255)')).toEqual({
            hue: 274.1489361702128,
            lightness: 0.6313725490196078,
            saturation: 1,
        });
    });
    it('should parse a hsl color representation', function () {
        expect((0, parseToHsl_1.default)('hsl(210,10%,4%)')).toEqual({
            hue: 210,
            lightness: 0.0392156862745098,
            saturation: 0.1,
        });
    });
    it('should parse a hsl color representation with a float', function () {
        expect((0, parseToHsl_1.default)('hsl(210.99,10%,4%)')).toEqual({
            hue: 210,
            lightness: 0.0392156862745098,
            saturation: 0.1,
        });
    });
    it('should parse a hsla color representation', function () {
        expect((0, parseToHsl_1.default)('hsla(210,10%,40%,0.75)')).toEqual({
            alpha: 0.75,
            hue: 209.99999999999997,
            lightness: 0.4,
            saturation: 0.09803921568627451,
        });
    });
    it('should parse a hsla color representation with a float', function () {
        expect((0, parseToHsl_1.default)('hsla(210.99,10%,40%,0.75)')).toEqual({
            alpha: 0.75,
            hue: 209.99999999999997,
            lightness: 0.4,
            saturation: 0.09803921568627451,
        });
    });
    it('should throw an error if an invalid color string is provided', function () {
        expect(function () {
            (0, parseToHsl_1.default)('(174,67,255)');
        }).toThrow("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.");
    });
});
