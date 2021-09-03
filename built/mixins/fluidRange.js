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
var between_1 = require("./between");
var _errors_1 = require("../internalHelpers/_errors");
/**
 * Returns a set of media queries that resizes a property (or set of properties) between a provided fromSize and toSize. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px') to constrain the interpolation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...fluidRange(
 *    {
 *        prop: 'padding',
 *        fromSize: '20px',
 *        toSize: '100px',
 *      },
 *      '400px',
 *      '1000px',
 *    )
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${fluidRange(
 *      {
 *        prop: 'padding',
 *        fromSize: '20px',
 *        toSize: '100px',
 *      },
 *      '400px',
 *      '1000px',
 *    )}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   "@media (min-width: 1000px)": Object {
 *     "padding": "100px",
 *   },
 *   "@media (min-width: 400px)": Object {
 *     "padding": "calc(-33.33333333333334px + 13.333333333333334vw)",
 *   },
 *   "padding": "20px",
 * }
 */
function fluidRange(cssProp, minScreen, maxScreen) {
    var _a, _b, _c, _d, _e;
    if (minScreen === void 0) { minScreen = '320px'; }
    if (maxScreen === void 0) { maxScreen = '1200px'; }
    if ((!Array.isArray(cssProp) && typeof cssProp !== 'object') || cssProp === null) {
        throw new _errors_1.default(49);
    }
    if (Array.isArray(cssProp)) {
        var mediaQueries = {};
        var fallbacks = {};
        for (var _i = 0, cssProp_1 = cssProp; _i < cssProp_1.length; _i++) {
            var obj = cssProp_1[_i];
            if (!obj.prop || !obj.fromSize || !obj.toSize) {
                throw new _errors_1.default(50);
            }
            fallbacks[obj.prop] = obj.fromSize;
            mediaQueries["@media (min-width: " + minScreen + ")"] = __assign(__assign({}, mediaQueries["@media (min-width: " + minScreen + ")"]), (_a = {}, _a[obj.prop] = (0, between_1.default)(obj.fromSize, obj.toSize, minScreen, maxScreen), _a));
            mediaQueries["@media (min-width: " + maxScreen + ")"] = __assign(__assign({}, mediaQueries["@media (min-width: " + maxScreen + ")"]), (_b = {}, _b[obj.prop] = obj.toSize, _b));
        }
        return __assign(__assign({}, fallbacks), mediaQueries);
    }
    else {
        if (!cssProp.prop || !cssProp.fromSize || !cssProp.toSize) {
            throw new _errors_1.default(51);
        }
        return _c = {},
            _c[cssProp.prop] = cssProp.fromSize,
            _c["@media (min-width: " + minScreen + ")"] = (_d = {},
                _d[cssProp.prop] = (0, between_1.default)(cssProp.fromSize, cssProp.toSize, minScreen, maxScreen),
                _d),
            _c["@media (min-width: " + maxScreen + ")"] = (_e = {},
                _e[cssProp.prop] = cssProp.toSize,
                _e),
            _c;
    }
}
exports.default = fluidRange;
