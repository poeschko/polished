"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _capitalizeString_1 = require("../internalHelpers/_capitalizeString");
var _errors_1 = require("../internalHelpers/_errors");
/**
 * Shorthand that accepts a value for side and a value for radius and applies the radius value to both corners of the side.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderRadius('top', '5px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderRadius('top', '5px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopRightRadius': '5px',
 *   'borderTopLeftRadius': '5px',
 * }
 */
function borderRadius(side, radius) {
    var _a, _b;
    var uppercaseSide = (0, _capitalizeString_1.default)(side);
    if (!radius && radius !== 0) {
        throw new _errors_1.default(62);
    }
    if (uppercaseSide === 'Top' || uppercaseSide === 'Bottom') {
        return _a = {},
            _a["border" + uppercaseSide + "RightRadius"] = radius,
            _a["border" + uppercaseSide + "LeftRadius"] = radius,
            _a;
    }
    if (uppercaseSide === 'Left' || uppercaseSide === 'Right') {
        return _b = {},
            _b["borderTop" + uppercaseSide + "Radius"] = radius,
            _b["borderBottom" + uppercaseSide + "Radius"] = radius,
            _b;
    }
    throw new _errors_1.default(63);
}
exports.default = borderRadius;
