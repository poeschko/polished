"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _errors_1 = require("../internalHelpers/_errors");
/**
 * Shorthand for easily setting the animation property. Allows either multiple arrays with animations
 * or a single animation spread over the arguments.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out, colorchange 2s'
 * }
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation('rotate', '1s', 'ease-in-out')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation('rotate', '1s', 'ease-in-out')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out'
 * }
 */
function animation() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Allow single or multiple animations passed
    var multiMode = Array.isArray(args[0]);
    if (!multiMode && args.length > 8) {
        throw new _errors_1.default(64);
    }
    var code = args
        .map(function (arg) {
        if ((multiMode && !Array.isArray(arg)) || (!multiMode && Array.isArray(arg))) {
            throw new _errors_1.default(65);
        }
        if (Array.isArray(arg) && arg.length > 8) {
            throw new _errors_1.default(66);
        }
        return Array.isArray(arg) ? arg.join(' ') : arg;
    })
        .join(', ');
    return {
        animation: code,
    };
}
exports.default = animation;
