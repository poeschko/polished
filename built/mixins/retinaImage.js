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
var hiDPI_1 = require("./hiDPI");
var _errors_1 = require("../internalHelpers/_errors");
/**
 * A helper to generate a retina background image and non-retina
 * background image. The retina background image will output to a HiDPI media query. The mixin uses
 * a _2x.png filename suffix by default.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  ...retinaImage('my-img')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${retinaImage('my-img')}
 * `
 *
 * // CSS as JS Output
 * div {
 *   backgroundImage: 'url(my-img.png)',
 *   '@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
 *    only screen and (min--moz-device-pixel-ratio: 1.3),
 *    only screen and (-o-min-device-pixel-ratio: 1.3/1),
 *    only screen and (min-resolution: 144dpi),
 *    only screen and (min-resolution: 1.5dppx)': {
 *     backgroundImage: 'url(my-img_2x.png)',
 *   }
 * }
 */
function retinaImage(filename, backgroundSize, extension, retinaFilename, retinaSuffix) {
    var _a;
    if (extension === void 0) { extension = 'png'; }
    if (retinaSuffix === void 0) { retinaSuffix = '_2x'; }
    if (!filename) {
        throw new _errors_1.default(58);
    }
    // Replace the dot at the beginning of the passed extension if one exists
    var ext = extension.replace(/^\./, '');
    var rFilename = retinaFilename
        ? retinaFilename + "." + ext
        : "" + filename + retinaSuffix + "." + ext;
    return _a = {
            backgroundImage: "url(" + filename + "." + ext + ")"
        },
        _a[(0, hiDPI_1.default)()] = __assign({ backgroundImage: "url(" + rFilename + ")" }, (backgroundSize ? { backgroundSize: backgroundSize } : {})),
        _a;
}
exports.default = retinaImage;
