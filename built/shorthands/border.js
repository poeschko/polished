"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _capitalizeString_1 = require("../internalHelpers/_capitalizeString");
var sideMap = ['top', 'right', 'bottom', 'left'];
/**
 * Shorthand for the border property that splits out individual properties for use with tools like Fela and Styletron. A side keyword can optionally be passed to target only one side's border properties.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...border('1px', 'solid', 'red')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${border('1px', 'solid', 'red')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderColor': 'red',
 *   'borderStyle': 'solid',
 *   'borderWidth': `1px`,
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...border('top', '1px', 'solid', 'red')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${border('top', '1px', 'solid', 'red')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderTopStyle': 'solid',
 *   'borderTopWidth': `1px`,
 * }
 */
function border(sideKeyword) {
    var _a;
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    if (typeof sideKeyword === 'string' && sideMap.indexOf(sideKeyword) >= 0) {
        return _a = {},
            _a["border" + (0, _capitalizeString_1.default)(sideKeyword) + "Width"] = values[0],
            _a["border" + (0, _capitalizeString_1.default)(sideKeyword) + "Style"] = values[1],
            _a["border" + (0, _capitalizeString_1.default)(sideKeyword) + "Color"] = values[2],
            _a;
    }
    else {
        values.unshift(sideKeyword);
        return {
            borderWidth: values[0],
            borderStyle: values[1],
            borderColor: values[2],
        };
    }
}
exports.default = border;
