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
var fontFace_1 = require("../fontFace");
describe('fontFace', function () {
    it('should return a valid object when passed just a family and source', function () {
        expect(__assign({}, (0, fontFace_1.default)({
            fontFamily: 'Sans Pro',
            fontFilePath: 'path/to/file',
        }))).toEqual({
            '@font-face': {
                fontFamily: 'Sans Pro',
                src: 'local("Sans Pro"), url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
            },
        });
    });
    it('should return a valid object when passed false for localFonts', function () {
        expect(__assign({}, (0, fontFace_1.default)({
            fontFamily: 'Sans Pro',
            fontFilePath: 'path/to/file',
            localFonts: null,
        }))).toEqual({
            '@font-face': {
                fontFamily: 'Sans Pro',
                src: 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
            },
        });
    });
    it('should return a valid object when passed both local and file-based sources', function () {
        expect(__assign({}, (0, fontFace_1.default)({
            fontFamily: 'Sans Pro',
            localFonts: ['sans-pro'],
            fontFilePath: 'path/to/file',
        }))).toEqual({
            '@font-face': {
                fontFamily: 'Sans Pro',
                src: 'local("sans-pro"), url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
            },
        });
    });
    it('should return a valid object when passed both a file-based source and multiple local sources', function () {
        expect(__assign({}, (0, fontFace_1.default)({
            fontFamily: 'Sans Pro',
            localFonts: ['sans-pro', 'sans pro'],
            fontFilePath: 'path/to/file',
        }))).toEqual({
            '@font-face': {
                fontFamily: 'Sans Pro',
                src: 'local("sans-pro"), local("sans pro"), url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
            },
        });
    });
    it('should return a valid object when passed only local sources', function () {
        expect(__assign({}, (0, fontFace_1.default)({
            fontFamily: 'Sans Pro',
            localFonts: ['sans-pro', 'sans pro'],
        }))).toEqual({
            '@font-face': {
                fontFamily: 'Sans Pro',
                src: 'local("sans-pro"), local("sans pro")',
            },
        });
    });
    it('should respect the file format configuration object', function () {
        expect(__assign({}, (0, fontFace_1.default)({
            fontFamily: 'Sans Pro',
            fontFilePath: 'path/to/file',
            fileFormats: ['eot', 'svg'],
        }))).toEqual({
            '@font-face': {
                fontFamily: 'Sans Pro',
                src: 'local("Sans Pro"), url("path/to/file.eot"), url("path/to/file.svg")',
            },
        });
    });
    it('should return base64 src', function () {
        expect(__assign({}, (0, fontFace_1.default)({
            fontFamily: 'Sans Pro',
            fontFilePath: 'data:application/x-font-woff;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
        }))).toEqual({
            '@font-face': {
                fontFamily: 'Sans Pro',
                src: 'local("Sans Pro"), url("data:application/x-font-woff;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC")',
            },
        });
    });
    it('should return base64 src with format hint', function () {
        expect(__assign({}, (0, fontFace_1.default)({
            fontFamily: 'Sans Pro',
            fontFilePath: 'data:application/x-font-woff;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
            fileFormats: ['woff'],
            formatHint: true,
        }))).toEqual({
            '@font-face': {
                fontFamily: 'Sans Pro',
                src: 'local("Sans Pro"), url("data:application/x-font-woff;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC") format("woff")',
            },
        });
    });
    it('should set passed font configuration variables', function () {
        expect(__assign({}, (0, fontFace_1.default)({
            fontFamily: 'Sans Pro',
            fontFilePath: 'path/to/file',
            fontStretch: 'condensed',
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontVariant: 'small-caps',
            unicodeRange: 'U+26',
            fontDisplay: 'swap',
            fontVariationSettings: '"XHGT" 0.7',
            fontFeatureSettings: '"smcp" on',
        }))).toEqual({
            '@font-face': {
                fontDisplay: 'swap',
                fontFamily: 'Sans Pro',
                fontFeatureSettings: '"smcp" on',
                fontStretch: 'condensed',
                fontStyle: 'italic',
                fontVariant: 'small-caps',
                fontVariationSettings: '"XHGT" 0.7',
                fontWeight: 'bold',
                src: 'local("Sans Pro"), url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
                unicodeRange: 'U+26',
            },
        });
    });
    it('should set generate format hints', function () {
        expect(__assign({}, (0, fontFace_1.default)({
            fontFamily: 'Sans Pro',
            fontFilePath: 'path/to/file',
            fileFormats: ['eot', 'svg', 'svgz', 'woff', 'woff2', 'otf', 'ttf'],
            formatHint: true,
            fontStretch: 'condensed',
            fontStyle: 'italic',
            fontWeight: 'bold',
        }))).toEqual({
            '@font-face': {
                fontFamily: 'Sans Pro',
                fontStretch: 'condensed',
                fontStyle: 'italic',
                fontWeight: 'bold',
                src: 'local("Sans Pro"), url("path/to/file.eot") format("embedded-opentype"), url("path/to/file.svg") format("svg"), url("path/to/file.svgz") format("svg"), url("path/to/file.woff") format("woff"), url("path/to/file.woff2") format("woff2"), url("path/to/file.otf") format("opentype"), url("path/to/file.ttf") format("truetype")',
            },
        });
    });
    it('should throw an error when not passed a fontfamily', function () {
        expect(function () {
            // $FlowFixMe
            (0, fontFace_1.default)({
                fontFilePath: 'path/to/file',
            });
        }).toThrow('fontFace expects a name of a font-family.');
    });
    it('should throw an error when not passed a file path or a local source', function () {
        expect(function () {
            (0, fontFace_1.default)({
                fontFamily: 'Sans Pro',
                localFonts: null,
            });
        }).toThrow('fontFace expects either the path to the font file(s) or a name of a local copy.');
    });
    it('should throw an error when localFonts is not an array', function () {
        expect(function () {
            (0, fontFace_1.default)({
                fontFamily: 'Sans Pro',
                fontFilePath: 'path/to/file',
                // $FlowFixMe
                localFonts: 'Helvetica',
            });
        }).toThrow('fontFace expects localFonts to be an array.');
    });
    it('should throw an error when fileFormats is not an array', function () {
        expect(function () {
            (0, fontFace_1.default)({
                fontFamily: 'Sans Pro',
                fontFilePath: 'path/to/file',
                // $FlowFixMe
                fileFormats: 'svg',
            });
        }).toThrow('fontFace expects fileFormats to be an array.');
    });
});
