"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _hslToRgb_1 = require("./_hslToRgb");
var _reduceHexValue_1 = require("./_reduceHexValue");
var _numberToHex_1 = require("./_numberToHex");
function colorToHex(color) {
    return (0, _numberToHex_1.default)(Math.round(color * 255));
}
function convertToHex(red, green, blue) {
    return (0, _reduceHexValue_1.default)("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
    return (0, _hslToRgb_1.default)(hue, saturation, lightness, convertToHex);
}
exports.default = hslToHex;
