"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var hiDPI_1 = require("../hiDPI");
describe('hiDPI', function () {
    it('should pass ratio to media query', function () {
        var _a, _b;
        expect((_a = {},
            _a[(0, hiDPI_1.default)(1.5)] = {
                width: '200px',
            },
            _a)).toEqual((_b = {},
            _b["\n    @media only screen and (-webkit-min-device-pixel-ratio: 1.5),\n    only screen and (min--moz-device-pixel-ratio: 1.5),\n    only screen and (-o-min-device-pixel-ratio: 1.5/1),\n    only screen and (min-resolution: 144dpi),\n    only screen and (min-resolution: 1.5dppx)\n  "] = {
                width: '200px',
            },
            _b));
    });
    it('should set a default ratio of 1.3 when no ratio is passed', function () {
        var _a, _b;
        expect((_a = {},
            _a[(0, hiDPI_1.default)()] = {
                width: '200px',
            },
            _a)).toEqual((_b = {},
            _b["\n    @media only screen and (-webkit-min-device-pixel-ratio: 1.3),\n    only screen and (min--moz-device-pixel-ratio: 1.3),\n    only screen and (-o-min-device-pixel-ratio: 1.3/1),\n    only screen and (min-resolution: 125dpi),\n    only screen and (min-resolution: 1.3dppx)\n  "] = {
                width: '200px',
            },
            _b));
    });
});
