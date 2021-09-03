"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _curry_1 = require("../internalHelpers/_curry");
var mix_1 = require("./mix");
/**
 * Shades a color by mixing it with black. `shade` can produce
 * hue shifts, where as `darken` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */
function shade(percentage, color) {
    if (color === 'transparent')
        return color;
    return (0, mix_1.default)(parseFloat(percentage), 'rgb(0, 0, 0)', color);
}
// prettier-ignore
var curriedShade = (0, _curry_1.default /* ::<number | string, string, string> */)(shade);
exports.default = curriedShade;
