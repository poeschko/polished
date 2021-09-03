"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * CSS to contain a float (credit to CSSMojo).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '""',
 *   'display': 'table'
 * }
 */
function clearFix(parent) {
    var _a;
    if (parent === void 0) { parent = '&'; }
    var pseudoSelector = parent + "::after";
    return _a = {},
        _a[pseudoSelector] = {
            clear: 'both',
            content: '""',
            display: 'table',
        },
        _a;
}
exports.default = clearFix;
