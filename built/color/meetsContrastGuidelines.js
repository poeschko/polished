"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var getContrast_1 = require("./getContrast");
/**
 * Determines which contrast guidelines have been met for two colors.
 * Based on the [contrast calculations recommended by W3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html).
 *
 * @example
 * const scores = meetsContrastGuidelines('#444', '#fff');
 */
function meetsContrastGuidelines(color1, color2) {
    var contrastRatio = (0, getContrast_1.default)(color1, color2);
    return {
        AA: contrastRatio >= 4.5,
        AALarge: contrastRatio >= 3,
        AAA: contrastRatio >= 7,
        AAALarge: contrastRatio >= 4.5,
    };
}
exports.default = meetsContrastGuidelines;
