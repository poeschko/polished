"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var getLuminance_1 = require("./getLuminance");
/**
 * Returns the contrast ratio between two colors based on
 * [W3's recommended equation for calculating contrast](http://www.w3.org/TR/WCAG20/#contrast-ratiodef).
 *
 * @example
 * const contrastRatio = getContrast('#444', '#fff');
 */
function getContrast(color1, color2) {
    var luminance1 = (0, getLuminance_1.default)(color1);
    var luminance2 = (0, getLuminance_1.default)(color2);
    return parseFloat((luminance1 > luminance2
        ? (luminance1 + 0.05) / (luminance2 + 0.05)
        : (luminance2 + 0.05) / (luminance1 + 0.05)).toFixed(2));
}
exports.default = getContrast;
