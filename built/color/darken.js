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
var _guard_1 = require("../internalHelpers/_guard");
var parseToHsl_1 = require("./parseToHsl");
var toColorString_1 = require("./toColorString");
/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */
function darken(amount, color) {
    if (color === 'transparent')
        return color;
    var hslColor = (0, parseToHsl_1.default)(color);
    return (0, toColorString_1.default)(__assign(__assign({}, hslColor), { lightness: (0, _guard_1.default)(0, 1, hslColor.lightness - parseFloat(amount)) }));
}
// prettier-ignore
var curriedDarken = (0, _curry_1.default /* ::<number | string, string, string> */)(darken);
exports.default = curriedDarken;
