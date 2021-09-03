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
var getValueAndUnit_1 = require("../helpers/getValueAndUnit");
var _errors_1 = require("../internalHelpers/_errors");
var getBorderWidth = function (pointingDirection, height, width) {
    var fullWidth = "" + width[0] + (width[1] || '');
    var halfWidth = "" + width[0] / 2 + (width[1] || '');
    var fullHeight = "" + height[0] + (height[1] || '');
    var halfHeight = "" + height[0] / 2 + (height[1] || '');
    switch (pointingDirection) {
        case 'top':
            return "0 " + halfWidth + " " + fullHeight + " " + halfWidth;
        case 'topLeft':
            return fullWidth + " " + fullHeight + " 0 0";
        case 'left':
            return halfHeight + " " + fullWidth + " " + halfHeight + " 0";
        case 'bottomLeft':
            return fullWidth + " 0 0 " + fullHeight;
        case 'bottom':
            return fullHeight + " " + halfWidth + " 0 " + halfWidth;
        case 'bottomRight':
            return "0 0 " + fullWidth + " " + fullHeight;
        case 'right':
            return halfHeight + " 0 " + halfHeight + " " + fullWidth;
        case 'topRight':
        default:
            return "0 " + fullWidth + " " + fullHeight + " 0";
    }
};
var getBorderColor = function (pointingDirection, foregroundColor) {
    switch (pointingDirection) {
        case 'top':
        case 'bottomRight':
            return { borderBottomColor: foregroundColor };
        case 'right':
        case 'bottomLeft':
            return { borderLeftColor: foregroundColor };
        case 'bottom':
        case 'topLeft':
            return { borderTopColor: foregroundColor };
        case 'left':
        case 'topRight':
            return { borderRightColor: foregroundColor };
        default:
            throw new _errors_1.default(59);
    }
};
/**
 * CSS to represent triangle with any pointing direction with an optional background color.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })}
 *
 *
 * // CSS as JS Output
 *
 * div: {
 *  'borderColor': 'transparent transparent transparent red',
 *  'borderStyle': 'solid',
 *  'borderWidth': '50px 0 50px 100px',
 *  'height': '0',
 *  'width': '0',
 * }
 */
function triangle(_a) {
    var pointingDirection = _a.pointingDirection, height = _a.height, width = _a.width, foregroundColor = _a.foregroundColor, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'transparent' : _b;
    var widthAndUnit = (0, getValueAndUnit_1.default)(width);
    var heightAndUnit = (0, getValueAndUnit_1.default)(height);
    if (isNaN(heightAndUnit[0]) || isNaN(widthAndUnit[0])) {
        throw new _errors_1.default(60);
    }
    return __assign(__assign({ width: '0', height: '0', borderColor: backgroundColor }, getBorderColor(pointingDirection, foregroundColor)), { borderStyle: 'solid', borderWidth: getBorderWidth(pointingDirection, heightAndUnit, widthAndUnit) });
}
exports.default = triangle;
