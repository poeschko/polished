"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _reduceHexValue_1 = require("../internalHelpers/_reduceHexValue");
var _numberToHex_1 = require("../internalHelpers/_numberToHex");
var _errors_1 = require("../internalHelpers/_errors");
/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
    if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
        return (0, _reduceHexValue_1.default)("#" + (0, _numberToHex_1.default)(value) + (0, _numberToHex_1.default)(green) + (0, _numberToHex_1.default)(blue));
    }
    else if (typeof value === 'object' && green === undefined && blue === undefined) {
        return (0, _reduceHexValue_1.default)("#" + (0, _numberToHex_1.default)(value.red) + (0, _numberToHex_1.default)(value.green) + (0, _numberToHex_1.default)(value.blue));
    }
    throw new _errors_1.default(6);
}
exports.default = rgb;
