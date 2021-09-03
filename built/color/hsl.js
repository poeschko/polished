"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _hslToHex_1 = require("../internalHelpers/_hslToHex");
var _errors_1 = require("../internalHelpers/_errors");
/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
    if (typeof value === 'number'
        && typeof saturation === 'number'
        && typeof lightness === 'number') {
        return (0, _hslToHex_1.default)(value, saturation, lightness);
    }
    else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
        return (0, _hslToHex_1.default)(value.hue, value.saturation, value.lightness);
    }
    throw new _errors_1.default(1);
}
exports.default = hsl;
