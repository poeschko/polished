"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var getValueAndUnit_1 = require("../helpers/getValueAndUnit");
var _errors_1 = require("../internalHelpers/_errors");
/**
 * Returns a CSS calc formula for linear interpolation of a property between two values. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px').
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   fontSize: between('20px', '100px', '400px', '1000px'),
 *   fontSize: between('20px', '100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   fontSize: ${between('20px', '100px', '400px', '1000px')};
 *   fontSize: ${between('20px', '100px')}
 * `
 *
 * // CSS as JS Output
 *
 * h1: {
 *   'fontSize': 'calc(-33.33333333333334px + 13.333333333333334vw)',
 *   'fontSize': 'calc(-9.090909090909093px + 9.090909090909092vw)'
 * }
 */
function between(fromSize, toSize, minScreen, maxScreen) {
    if (minScreen === void 0) { minScreen = '320px'; }
    if (maxScreen === void 0) { maxScreen = '1200px'; }
    var _a = (0, getValueAndUnit_1.default)(fromSize), unitlessFromSize = _a[0], fromSizeUnit = _a[1];
    var _b = (0, getValueAndUnit_1.default)(toSize), unitlessToSize = _b[0], toSizeUnit = _b[1];
    var _c = (0, getValueAndUnit_1.default)(minScreen), unitlessMinScreen = _c[0], minScreenUnit = _c[1];
    var _d = (0, getValueAndUnit_1.default)(maxScreen), unitlessMaxScreen = _d[0], maxScreenUnit = _d[1];
    if (typeof unitlessMinScreen !== 'number'
        || typeof unitlessMaxScreen !== 'number'
        || !minScreenUnit
        || !maxScreenUnit
        || minScreenUnit !== maxScreenUnit) {
        throw new _errors_1.default(47);
    }
    if (typeof unitlessFromSize !== 'number'
        || typeof unitlessToSize !== 'number'
        || fromSizeUnit !== toSizeUnit) {
        throw new _errors_1.default(48);
    }
    if (fromSizeUnit !== minScreenUnit || toSizeUnit !== maxScreenUnit) {
        throw new _errors_1.default(76);
    }
    var slope = (unitlessFromSize - unitlessToSize) / (unitlessMinScreen - unitlessMaxScreen);
    var base = unitlessToSize - slope * unitlessMaxScreen;
    return "calc(" + base.toFixed(2) + (fromSizeUnit || '') + " + " + (100 * slope).toFixed(2) + "vw)";
}
exports.default = between;
