"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var rgb_1 = require("./rgb");
var rgba_1 = require("./rgba");
var _errors_1 = require("../internalHelpers/_errors");
/**
 * Converts a RgbColor or RgbaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb` or `rgba`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgbToColorString({ red: 255, green: 205, blue: 100 }),
 *   background: rgbToColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgbToColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${rgbToColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 * }
 */
function rgbToColorString(color) {
    if (typeof color === 'object'
        && typeof color.red === 'number'
        && typeof color.green === 'number'
        && typeof color.blue === 'number') {
        if (typeof color.alpha === 'number') {
            return (0, rgba_1.default)({
                red: color.red,
                green: color.green,
                blue: color.blue,
                alpha: color.alpha,
            });
        }
        return (0, rgb_1.default)({ red: color.red, green: color.green, blue: color.blue });
    }
    throw new _errors_1.default(46);
}
exports.default = rgbToColorString;
