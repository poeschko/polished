"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _constructGradientValue_1 = require("../internalHelpers/_constructGradientValue");
var _errors_1 = require("../internalHelpers/_errors");
/**
 * CSS for declaring a radial gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#00FFFF',
 *   'backgroundImage': 'radial-gradient(center ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */
function radialGradient(_a) {
    var colorStops = _a.colorStops, _b = _a.extent, extent = _b === void 0 ? '' : _b, fallback = _a.fallback, _c = _a.position, position = _c === void 0 ? '' : _c, _d = _a.shape, shape = _d === void 0 ? '' : _d;
    if (!colorStops || colorStops.length < 2) {
        throw new _errors_1.default(57);
    }
    return {
        backgroundColor: fallback || colorStops[0].split(' ')[0],
        backgroundImage: (0, _constructGradientValue_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["radial-gradient(", "", "", "", ")"], ["radial-gradient(", "", "", "", ")"])), position, shape, extent, colorStops.join(', ')),
    };
}
exports.default = radialGradient;
var templateObject_1;
