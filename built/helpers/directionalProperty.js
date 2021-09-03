"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _capitalizeString_1 = require("../internalHelpers/_capitalizeString");
var positionMap = ['Top', 'Right', 'Bottom', 'Left'];
function generateProperty(property, position) {
    if (!property)
        return position.toLowerCase();
    var splitProperty = property.split('-');
    if (splitProperty.length > 1) {
        splitProperty.splice(1, 0, position);
        return splitProperty.reduce(function (acc, val) { return "" + acc + (0, _capitalizeString_1.default)(val); });
    }
    var joinedProperty = property.replace(/([a-z])([A-Z])/g, "$1" + position + "$2");
    return property === joinedProperty ? "" + property + position : joinedProperty;
}
function generateStyles(property, valuesWithDefaults) {
    var styles = {};
    for (var i = 0; i < valuesWithDefaults.length; i += 1) {
        if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
            styles[generateProperty(property, positionMap[i])] = valuesWithDefaults[i];
        }
    }
    return styles;
}
/**
 * Enables shorthand for direction-based properties. It accepts a property (hyphenated or camelCased) and up to four values that map to top, right, bottom, and left, respectively. You can optionally pass an empty string to get only the directional values as properties. You can also optionally pass a null argument for a directional value to ignore it.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...directionalProperty('padding', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */
function directionalProperty(property) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    //  prettier-ignore
    var firstValue = values[0], _a = values[1], secondValue = _a === void 0 ? firstValue : _a, _b = values[2], thirdValue = _b === void 0 ? firstValue : _b, _c = values[3], fourthValue = _c === void 0 ? secondValue : _c;
    var valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
    return generateStyles(property, valuesWithDefaults);
}
exports.default = directionalProperty;
