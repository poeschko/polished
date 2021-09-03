"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _errors_1 = require("../internalHelpers/_errors");
/**
 * Accepts any number of transition values as parameters for creating a single transition statement. You may also pass an array of properties as the first parameter that you would like to apply the same transition values to (second parameter).
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s'),
 *   ...transitions(['color', 'background-color'], '2.0s ease-in 2s')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')};
 *   ${transitions(['color', 'background-color'], '2.0s ease-in 2s'),};
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'transition': 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s'
 *   'transition': 'color 2.0s ease-in 2s, background-color 2.0s ease-in 2s',
 * }
 */
function transitions() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i] = arguments[_i];
    }
    if (Array.isArray(properties[0]) && properties.length === 2) {
        var value_1 = properties[1];
        if (typeof value_1 !== 'string') {
            throw new _errors_1.default(61);
        }
        var transitionsString = properties[0]
            .map(function (property) { return property + " " + value_1; })
            .join(', ');
        return {
            transition: transitionsString,
        };
    }
    else {
        return {
            transition: properties.join(', '),
        };
    }
}
exports.default = transitions;
