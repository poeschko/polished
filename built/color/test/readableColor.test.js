"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var readableColor_1 = require("../readableColor");
describe('readableColor', function () {
    it('should return black given white hex, #fff', function () {
        expect((0, readableColor_1.default)('#fff')).toEqual('#000');
    });
    it('should return white given black, #000', function () {
        expect((0, readableColor_1.default)('#000')).toEqual('#fff');
    });
    it('should return custom light color when passed a dark color', function () {
        expect((0, readableColor_1.default)('black', '#001', '#ff8')).toEqual('#ff8');
    });
    it('should return custom dark color when passed a light color', function () {
        expect((0, readableColor_1.default)('white', '#001', '#ff8')).toEqual('#001');
    });
    it('should return black given red, #FF0000', function () {
        expect((0, readableColor_1.default)('#FF0000')).toEqual('#000');
    });
    it('should return white given blue, #0000FF', function () {
        expect((0, readableColor_1.default)('#0000FF')).toEqual('#fff');
    });
    it('should return black given gray, #787878', function () {
        expect((0, readableColor_1.default)('#787878')).toEqual('#000');
    });
    it('should return white given gray, #757575', function () {
        expect((0, readableColor_1.default)('#757575')).toEqual('#fff');
    });
    it('should return white given black, #0000001A', function () {
        expect((0, readableColor_1.default)('#0000001A')).toEqual('#fff');
    });
    it('should return black given white, #FFFFFFBF', function () {
        expect((0, readableColor_1.default)('#FFFFFFBF')).toEqual('#000');
    });
    it('should return black given white, rgb(255,255,255)', function () {
        expect((0, readableColor_1.default)('rgb(255,255,255)')).toEqual('#000');
    });
    it('should return white given black, rgb(0,0,0)', function () {
        expect((0, readableColor_1.default)('rgb(0,0,0)')).toEqual('#fff');
    });
    it('should return black given rgb(120,120,120)', function () {
        expect((0, readableColor_1.default)('rgb(120,120,120)')).toEqual('#000');
    });
    it('should return white given rgb(117,117,117)', function () {
        expect((0, readableColor_1.default)('rgb(117,117,117)')).toEqual('#fff');
    });
    it('should return white given black, rgba(0,0,0,0.7)', function () {
        expect((0, readableColor_1.default)('rgba(0,0,0,0.7)')).toEqual('#fff');
    });
    it('should return white given black, rgba(0,0,0,0.1)', function () {
        expect((0, readableColor_1.default)('rgba(0,0,0,0.1)')).toEqual('#fff');
    });
    it('should return white given black, "black"', function () {
        expect((0, readableColor_1.default)('black')).toEqual('#fff');
    });
    it('should return black given papayawhip, "papayawhip"', function () {
        expect((0, readableColor_1.default)('papayawhip')).toEqual('#000');
    });
    it('should return black given palevioletred, "palevioletred"', function () {
        expect((0, readableColor_1.default)('palevioletred')).toEqual('#000');
    });
    it('should return black given white, "white"', function () {
        expect((0, readableColor_1.default)('white')).toEqual('#000');
    });
    it('should return black given red, hsl(0, 100%, 50%)', function () {
        expect((0, readableColor_1.default)('hsl(0, 100%, 50%)')).toEqual('#000');
    });
    it('should return white given blue, hsl(250, 100%, 50%)', function () {
        expect((0, readableColor_1.default)('hsl(250, 100%, 50%)')).toEqual('#fff');
    });
    it('should return black given gray, hsl(0, 0%, 47%)', function () {
        expect((0, readableColor_1.default)('hsl(0, 0%, 47%)')).toEqual('#000');
    });
    it('should return white given gray, hsl(0, 0%, 45%)', function () {
        expect((0, readableColor_1.default)('hsl(0, 0%, 45%)')).toEqual('#fff');
    });
    it('should return white given blue, hsla(250, 100%, 50%, 0.2)', function () {
        expect((0, readableColor_1.default)('hsla(250, 100%, 50%, 0.2)')).toEqual('#fff');
    });
    it('should return custom light background when contrast meets AA in strict mode', function () {
        expect((0, readableColor_1.default)('red', '#001', '#ff8')).toEqual('#001');
    });
    it('should return custom dark background when contrast meets AA in strict mode', function () {
        expect((0, readableColor_1.default)('darkred', '#001', '#ff8')).toEqual('#ff8');
    });
    it('should return the default light background when contrast fails AA in strict mode', function () {
        expect((0, readableColor_1.default)('red', '#333', '#aaa')).toEqual('#000');
    });
    it('should return the default dark background when contrast fails AA in strict mode', function () {
        expect((0, readableColor_1.default)('darkred', '#333', '#aaa')).toEqual('#fff');
    });
    it('should return the the passed colors when constrast fails AA with strict mode off', function () {
        expect((0, readableColor_1.default)('darkred', '#333', '#aaa', false)).toEqual('#aaa');
    });
});
