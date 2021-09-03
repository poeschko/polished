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
var rgba_1 = require("./rgba");
var parseToRgb_1 = require("./parseToRgb");
/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify('0.5', 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify('0.5', 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */
function opacify(amount, color) {
    if (color === 'transparent')
        return color;
    var parsedColor = (0, parseToRgb_1.default)(color);
    var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;
    var colorWithAlpha = __assign(__assign({}, parsedColor), { alpha: (0, _guard_1.default)(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100) });
    return (0, rgba_1.default)(colorWithAlpha);
}
// prettier-ignore
var curriedOpacify = (0, _curry_1.default /* ::<number | string, string, string> */)(opacify);
exports.default = curriedOpacify;
