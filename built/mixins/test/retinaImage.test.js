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
var retinaImage_1 = require("../retinaImage");
describe('retinaImage', function () {
    it('should throw an error if no filename is passed', function () {
        // $FlowFixMe
        expect(function () { return (__assign({}, (0, retinaImage_1.default)())); }).toThrow();
    });
    it('should use _2x and png as the default suffix and extension, respectively', function () {
        var _a;
        expect(__assign({}, (0, retinaImage_1.default)('img'))).toEqual((_a = {},
            _a["\n    @media only screen and (-webkit-min-device-pixel-ratio: 1.3),\n    only screen and (min--moz-device-pixel-ratio: 1.3),\n    only screen and (-o-min-device-pixel-ratio: 1.3/1),\n    only screen and (min-resolution: 125dpi),\n    only screen and (min-resolution: 1.3dppx)\n  "] = {
                backgroundImage: 'url(img_2x.png)',
            },
            _a.backgroundImage = 'url(img.png)',
            _a));
    });
    it('should set the background-size if one is passed in', function () {
        var _a;
        expect(__assign({}, (0, retinaImage_1.default)('img', 'cover'))).toEqual((_a = {},
            _a["\n    @media only screen and (-webkit-min-device-pixel-ratio: 1.3),\n    only screen and (min--moz-device-pixel-ratio: 1.3),\n    only screen and (-o-min-device-pixel-ratio: 1.3/1),\n    only screen and (min-resolution: 125dpi),\n    only screen and (min-resolution: 1.3dppx)\n  "] = {
                backgroundImage: 'url(img_2x.png)',
                backgroundSize: 'cover',
            },
            _a.backgroundImage = 'url(img.png)',
            _a));
    });
    it('should set the extension if one is passed in', function () {
        var _a;
        expect(__assign({}, (0, retinaImage_1.default)('img', undefined, 'jpg'))).toEqual((_a = {},
            _a["\n    @media only screen and (-webkit-min-device-pixel-ratio: 1.3),\n    only screen and (min--moz-device-pixel-ratio: 1.3),\n    only screen and (-o-min-device-pixel-ratio: 1.3/1),\n    only screen and (min-resolution: 125dpi),\n    only screen and (min-resolution: 1.3dppx)\n  "] = {
                backgroundImage: 'url(img_2x.jpg)',
            },
            _a.backgroundImage = 'url(img.jpg)',
            _a));
    });
    it('should allow passing in an extension with a dot', function () {
        var _a;
        expect(__assign({}, (0, retinaImage_1.default)('img', undefined, '.jpg'))).toEqual((_a = {},
            _a["\n    @media only screen and (-webkit-min-device-pixel-ratio: 1.3),\n    only screen and (min--moz-device-pixel-ratio: 1.3),\n    only screen and (-o-min-device-pixel-ratio: 1.3/1),\n    only screen and (min-resolution: 125dpi),\n    only screen and (min-resolution: 1.3dppx)\n  "] = {
                backgroundImage: 'url(img_2x.jpg)',
            },
            _a.backgroundImage = 'url(img.jpg)',
            _a));
    });
    it('should allow passing in a separate filename for the retina version', function () {
        var _a;
        expect(__assign({}, (0, retinaImage_1.default)('img', undefined, undefined, 'retina_img'))).toEqual((_a = {},
            _a["\n    @media only screen and (-webkit-min-device-pixel-ratio: 1.3),\n    only screen and (min--moz-device-pixel-ratio: 1.3),\n    only screen and (-o-min-device-pixel-ratio: 1.3/1),\n    only screen and (min-resolution: 125dpi),\n    only screen and (min-resolution: 1.3dppx)\n  "] = {
                backgroundImage: 'url(retina_img.png)',
            },
            _a.backgroundImage = 'url(img.png)',
            _a));
    });
    it('should allow passing in a separate suffix for the retina version', function () {
        var _a;
        expect(__assign({}, (0, retinaImage_1.default)('img', undefined, undefined, undefined, '_5x'))).toEqual((_a = {},
            _a["\n    @media only screen and (-webkit-min-device-pixel-ratio: 1.3),\n    only screen and (min--moz-device-pixel-ratio: 1.3),\n    only screen and (-o-min-device-pixel-ratio: 1.3/1),\n    only screen and (min-resolution: 125dpi),\n    only screen and (min-resolution: 1.3dppx)\n  "] = {
                backgroundImage: 'url(img_5x.png)',
            },
            _a.backgroundImage = 'url(img.png)',
            _a));
    });
});
