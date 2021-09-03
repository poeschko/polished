"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var hsl_1 = require("./hsl");
var hsla_1 = require("./hsla");
var rgb_1 = require("./rgb");
var rgba_1 = require("./rgba");
var _errors_1 = require("../internalHelpers/_errors");
var isRgb = function (color) { return typeof color.red === 'number'
    && typeof color.green === 'number'
    && typeof color.blue === 'number'
    && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined'); };
var isRgba = function (color) { return typeof color.red === 'number'
    && typeof color.green === 'number'
    && typeof color.blue === 'number'
    && typeof color.alpha === 'number'; };
var isHsl = function (color) { return typeof color.hue === 'number'
    && typeof color.saturation === 'number'
    && typeof color.lightness === 'number'
    && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined'); };
var isHsla = function (color) { return typeof color.hue === 'number'
    && typeof color.saturation === 'number'
    && typeof color.lightness === 'number'
    && typeof color.alpha === 'number'; };
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */
function toColorString(color) {
    if (typeof color !== 'object')
        throw new _errors_1.default(8);
    if (isRgba(color))
        return (0, rgba_1.default)(color);
    if (isRgb(color))
        return (0, rgb_1.default)(color);
    if (isHsla(color))
        return (0, hsla_1.default)(color);
    if (isHsl(color))
        return (0, hsl_1.default)(color);
    throw new _errors_1.default(8);
}
exports.default = toColorString;
