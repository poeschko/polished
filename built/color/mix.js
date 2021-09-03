"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _curry_1 = require("../internalHelpers/_curry");
var rgba_1 = require("./rgba");
var parseToRgb_1 = require("./parseToRgb");
/**
 * Mixes the two provided colors together by calculating the average of each of the RGB components weighted to the first color by the provided weight.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix(0.5, '#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix(0.5, '#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */
function mix(weight, color, otherColor) {
    if (color === 'transparent')
        return otherColor;
    if (otherColor === 'transparent')
        return color;
    if (weight === 0)
        return otherColor;
    var parsedColor1 = (0, parseToRgb_1.default)(color);
    var color1 = __assign(__assign({}, parsedColor1), { alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1 });
    var parsedColor2 = (0, parseToRgb_1.default)(otherColor);
    var color2 = __assign(__assign({}, parsedColor2), { alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1 });
    // The formula is copied from the original Sass implementation:
    // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method
    var alphaDelta = color1.alpha - color2.alpha;
    var x = parseFloat(weight) * 2 - 1;
    var y = x * alphaDelta === -1 ? x : x + alphaDelta;
    var z = 1 + x * alphaDelta;
    var weight1 = (y / z + 1) / 2.0;
    var weight2 = 1 - weight1;
    var mixedColor = {
        red: Math.floor(color1.red * weight1 + color2.red * weight2),
        green: Math.floor(color1.green * weight1 + color2.green * weight2),
        blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
        alpha: color1.alpha * (parseFloat(weight) / 1.0) + color2.alpha * (1 - parseFloat(weight) / 1.0),
    };
    return (0, rgba_1.default)(mixedColor);
}
// prettier-ignore
var curriedMix = (0, _curry_1.default /* ::<number | string, string, string, string> */)(mix);
exports.default = curriedMix;
