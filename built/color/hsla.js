"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _hslToHex_1 = require("../internalHelpers/_hslToHex");
var _hslToRgb_1 = require("../internalHelpers/_hslToRgb");
var _errors_1 = require("../internalHelpers/_errors");
/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
    if (typeof value === 'number'
        && typeof saturation === 'number'
        && typeof lightness === 'number'
        && typeof alpha === 'number') {
        return alpha >= 1
            ? (0, _hslToHex_1.default)(value, saturation, lightness)
            : "rgba(" + (0, _hslToRgb_1.default)(value, saturation, lightness) + "," + alpha + ")";
    }
    else if (typeof value === 'object'
        && saturation === undefined
        && lightness === undefined
        && alpha === undefined) {
        return value.alpha >= 1
            ? (0, _hslToHex_1.default)(value.hue, value.saturation, value.lightness)
            : "rgba(" + (0, _hslToRgb_1.default)(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
    }
    throw new _errors_1.default(2);
}
exports.default = hsla;
