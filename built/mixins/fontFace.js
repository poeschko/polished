"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _errors_1 = require("../internalHelpers/_errors");
var dataURIRegex = /^\s*data:([a-z]+\/[a-z-]+(;[a-z-]+=[a-z-]+)?)?(;charset=[a-z0-9-]+)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i;
var formatHintMap = {
    woff: 'woff',
    woff2: 'woff2',
    ttf: 'truetype',
    otf: 'opentype',
    eot: 'embedded-opentype',
    svg: 'svg',
    svgz: 'svg',
};
function generateFormatHint(format, formatHint) {
    if (!formatHint)
        return '';
    return " format(\"" + formatHintMap[format] + "\")";
}
function isDataURI(fontFilePath) {
    return !!fontFilePath.replace(/\s+/g, ' ').match(dataURIRegex);
}
function generateFileReferences(fontFilePath, fileFormats, formatHint) {
    if (isDataURI(fontFilePath)) {
        return "url(\"" + fontFilePath + "\")" + generateFormatHint(fileFormats[0], formatHint);
    }
    var fileFontReferences = fileFormats.map(function (format) { return "url(\"" + fontFilePath + "." + format + "\")" + generateFormatHint(format, formatHint); });
    return fileFontReferences.join(', ');
}
function generateLocalReferences(localFonts) {
    var localFontReferences = localFonts.map(function (font) { return "local(\"" + font + "\")"; });
    return localFontReferences.join(', ');
}
function generateSources(fontFilePath, localFonts, fileFormats, formatHint) {
    var fontReferences = [];
    if (localFonts)
        fontReferences.push(generateLocalReferences(localFonts));
    if (fontFilePath) {
        fontReferences.push(generateFileReferences(fontFilePath, fileFormats, formatHint));
    }
    return fontReferences.join(', ');
}
/**
 * CSS for a @font-face declaration. Defaults to check for local copies of the font on the user's machine. You can disable this by passing `null` to localFonts.
 *
 * @example
 * // Styles as object basic usage
 * const styles = {
 *    ...fontFace({
 *      'fontFamily': 'Sans-Pro',
 *      'fontFilePath': 'path/to/file'
 *    })
 * }
 *
 * // styled-components basic usage
 * const GlobalStyle = createGlobalStyle`${
 *   fontFace({
 *     'fontFamily': 'Sans-Pro',
 *     'fontFilePath': 'path/to/file'
 *   }
 * )}`
 *
 * // CSS as JS Output
 *
 * '@font-face': {
 *   'fontFamily': 'Sans-Pro',
 *   'src': 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
 * }
 */
function fontFace(_a) {
    var fontFamily = _a.fontFamily, fontFilePath = _a.fontFilePath, fontStretch = _a.fontStretch, fontStyle = _a.fontStyle, fontVariant = _a.fontVariant, fontWeight = _a.fontWeight, _b = _a.fileFormats, fileFormats = _b === void 0 ? ['eot', 'woff2', 'woff', 'ttf', 'svg'] : _b, _c = _a.formatHint, formatHint = _c === void 0 ? false : _c, _d = _a.localFonts, localFonts = _d === void 0 ? [fontFamily] : _d, unicodeRange = _a.unicodeRange, fontDisplay = _a.fontDisplay, fontVariationSettings = _a.fontVariationSettings, fontFeatureSettings = _a.fontFeatureSettings;
    // Error Handling
    if (!fontFamily)
        throw new _errors_1.default(55);
    if (!fontFilePath && !localFonts) {
        throw new _errors_1.default(52);
    }
    if (localFonts && !Array.isArray(localFonts)) {
        throw new _errors_1.default(53);
    }
    if (!Array.isArray(fileFormats)) {
        throw new _errors_1.default(54);
    }
    var fontFaceDeclaration = {
        '@font-face': {
            fontFamily: fontFamily,
            src: generateSources(fontFilePath, localFonts, fileFormats, formatHint),
            unicodeRange: unicodeRange,
            fontStretch: fontStretch,
            fontStyle: fontStyle,
            fontVariant: fontVariant,
            fontWeight: fontWeight,
            fontDisplay: fontDisplay,
            fontVariationSettings: fontVariationSettings,
            fontFeatureSettings: fontFeatureSettings,
        },
    };
    // Removes undefined fields for cleaner css object.
    return JSON.parse(JSON.stringify(fontFaceDeclaration));
}
exports.default = fontFace;
