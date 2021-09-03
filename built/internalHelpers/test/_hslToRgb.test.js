"use strict";
// @flow
Object.defineProperty(exports, "__esModule", { value: true });
var _hslToRgb_1 = require("../_hslToRgb");
describe('hslToRgb', function () {
    it('should convert numbers to a hex color', function () {
        expect({ background: "rgb(" + (0, _hslToRgb_1.default)(360, 0.75, 0.4) + ")" }).toEqual({
            background: 'rgb(179,25,25)',
        });
    });
    it('should convert the color red', function () {
        expect({ background: "rgb(" + (0, _hslToRgb_1.default)(0, 1, 0.5) + ")" }).toEqual({
            background: 'rgb(255,0,0)',
        });
    });
    it('should convert the color yellow', function () {
        expect({ background: "rgb(" + (0, _hslToRgb_1.default)(60, 1, 0.5) + ")" }).toEqual({
            background: 'rgb(255,255,0)',
        });
    });
    it('should convert the color lime', function () {
        expect({ background: "rgb(" + (0, _hslToRgb_1.default)(120, 1, 0.5) + ")" }).toEqual({
            background: 'rgb(0,255,0)',
        });
    });
    it('should convert the color cyan', function () {
        expect({ background: "rgb(" + (0, _hslToRgb_1.default)(180, 1, 0.5) + ")" }).toEqual({
            background: 'rgb(0,255,255)',
        });
    });
    it('should convert the color blue', function () {
        expect({ background: "rgb(" + (0, _hslToRgb_1.default)(240, 1, 0.5) + ")" }).toEqual({
            background: 'rgb(0,0,255)',
        });
    });
    it('should convert the color magenta', function () {
        expect({ background: "rgb(" + (0, _hslToRgb_1.default)(300, 1, 0.5) + ")" }).toEqual({
            background: 'rgb(255,0,255)',
        });
    });
    it('should convert black', function () {
        expect({ background: "rgb(" + (0, _hslToRgb_1.default)(360, 0, 0.4) + ")" }).toEqual({
            background: 'rgb(102,102,102)',
        });
    });
    it('should convert correctly even when passed a "faulty" negative hue', function () {
        expect({ background: "rgb(" + (0, _hslToRgb_1.default)(-10, 1, 0.5) + ")" }).toEqual({
            background: 'rgb(255,0,43)',
        });
        expect({ background: "rgb(" + (0, _hslToRgb_1.default)(-100, 1, 0.5) + ")" }).toEqual({
            background: 'rgb(85,0,255)',
        });
        expect({ background: "rgb(" + (0, _hslToRgb_1.default)(-1000, 1, 0.5) + ")" }).toEqual({
            background: 'rgb(170,255,0)',
        });
    });
});
