"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _curry_1 = require("../internalHelpers/_curry");
var mix_1 = require("./mix");
/**
 * Tints a color by mixing it with white. `tint` can produce
 * hue shifts, where as `lighten` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */
function tint(percentage, color) {
    if (color === 'transparent')
        return color;
    return (0, mix_1.default)(parseFloat(percentage), 'rgb(255, 255, 255)', color);
}
// prettier-ignore
var curriedTint = (0, _curry_1.default /* ::<number | string, string, string> */)(tint);
exports.default = curriedTint;
