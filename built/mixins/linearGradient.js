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
 * CSS for declaring a linear gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#FFF',
 *   'backgroundImage': 'linear-gradient(to top right, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */
function linearGradient(_a) {
    var colorStops = _a.colorStops, fallback = _a.fallback, _b = _a.toDirection, toDirection = _b === void 0 ? '' : _b;
    if (!colorStops || colorStops.length < 2) {
        throw new _errors_1.default(56);
    }
    return {
        backgroundColor: fallback
            || colorStops[0]
                .replace(/,\s+/g, ',')
                .split(' ')[0]
                .replace(/,(?=\S)/g, ', '),
        backgroundImage: (0, _constructGradientValue_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["linear-gradient(", "", ")"], ["linear-gradient(", "", ")"])), toDirection, colorStops
            .join(', ')
            .replace(/,(?=\S)/g, ', ')),
    };
}
exports.default = linearGradient;
var templateObject_1;
