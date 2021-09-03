"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var getLuminance_1 = require("../getLuminance");
describe('getLuminance', function () {
    it('should return the luminance of a hex color', function () {
        expect((0, getLuminance_1.default)('#444')).toEqual(0.058);
    });
    it('should return the luminance of an 8-digit hex color', function () {
        expect((0, getLuminance_1.default)('#6564CDB3')).toEqual(0.163);
    });
    it('should return the luminance of an 4-digit hex color', function () {
        expect((0, getLuminance_1.default)('#0f08')).toEqual(0.715);
    });
    it('should return the luminance of an rgba color', function () {
        expect((0, getLuminance_1.default)('rgba(101,100,205,0.7)')).toEqual(0.163);
    });
    it('should return the luminance of an rgb color', function () {
        expect((0, getLuminance_1.default)('rgb(204,205,100)')).toEqual(0.574);
    });
    it('should return the luminance of an hlsa color', function () {
        expect((0, getLuminance_1.default)('hsla(250, 100%, 50%, 0.2)')).toEqual(0.077);
    });
    it('should return the luminance of an hls color', function () {
        expect((0, getLuminance_1.default)('hsl(0, 100%, 50%)')).toEqual(0.213);
    });
    it('should return the luminance of a named CSS color', function () {
        expect((0, getLuminance_1.default)('papayawhip')).toEqual(0.878);
    });
    it('should return 0 when passed transparent', function () {
        expect((0, getLuminance_1.default)('transparent')).toEqual(0);
    });
});
