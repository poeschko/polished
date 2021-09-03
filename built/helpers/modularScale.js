"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratioNames = void 0;
// @flow
var getValueAndUnit_1 = require("./getValueAndUnit");
var _errors_1 = require("../internalHelpers/_errors");
exports.ratioNames = {
    minorSecond: 1.067,
    majorSecond: 1.125,
    minorThird: 1.2,
    majorThird: 1.25,
    perfectFourth: 1.333,
    augFourth: 1.414,
    perfectFifth: 1.5,
    minorSixth: 1.6,
    goldenSection: 1.618,
    majorSixth: 1.667,
    minorSeventh: 1.778,
    majorSeventh: 1.875,
    octave: 2,
    majorTenth: 2.5,
    majorEleventh: 2.667,
    majorTwelfth: 3,
    doubleOctave: 4,
};
function getRatio(ratioName) {
    return exports.ratioNames[ratioName];
}
/**
 * Establish consistent measurements and spacial relationships throughout your projects by incrementing an em or rem value up or down a defined scale. We provide a list of commonly used scales as pre-defined variables.
 * @example
 * // Styles as object usage
 * const styles = {
 *    // Increment two steps up the default scale
 *   'fontSize': modularScale(2)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *    // Increment two steps up the default scale
 *   fontSize: ${modularScale(2)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'fontSize': '1.77689em'
 * }
 */
function modularScale(steps, base, ratio) {
    if (base === void 0) { base = '1em'; }
    if (ratio === void 0) { ratio = 1.333; }
    if (typeof steps !== 'number') {
        throw new _errors_1.default(42);
    }
    if (typeof ratio === 'string' && !exports.ratioNames[ratio]) {
        throw new _errors_1.default(43);
    }
    var _a = typeof base === 'string' ? (0, getValueAndUnit_1.default)(base) : [base, ''], realBase = _a[0], unit = _a[1];
    var realRatio = typeof ratio === 'string' ? getRatio(ratio) : ratio;
    if (typeof realBase === 'string') {
        throw new _errors_1.default(44, base);
    }
    return "" + realBase * Math.pow(realRatio, steps) + (unit || '');
}
exports.default = modularScale;
