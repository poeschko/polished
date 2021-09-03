"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shorthand to set the height and width properties in a single statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...size('300px', '250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${size('300px', '250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'height': '300px',
 *   'width': '250px',
 * }
 */
function size(height, width) {
    if (width === void 0) { width = height; }
    return {
        height: height,
        width: width,
    };
}
exports.default = size;
