"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var adjustHue_1 = require("../adjustHue");
describe('adjustHue', function () {
    it('should adjustHue of a reduced hex color', function () {
        expect((0, adjustHue_1.default)(20, '#448')).toEqual('#5b4488');
    });
    it('should adjustHue of a hex color', function () {
        expect((0, adjustHue_1.default)(20, '#CCCD64')).toEqual('#a9cd64');
    });
    it('should adjustHue of an 8-digit hex color', function () {
        expect((0, adjustHue_1.default)(20, '#6564CDB3')).toEqual('rgba(136,100,205,0.7)');
    });
    it('should adjustHue of an 4-digit hex color', function () {
        expect((0, adjustHue_1.default)(20, '#0f08')).toEqual('rgba(0,255,85,0.53)');
    });
    it('should adjustHue of a color with opacity', function () {
        expect((0, adjustHue_1.default)(20, 'rgba(101,100,205,0.7)')).toEqual('rgba(136,100,205,0.7)');
    });
    it('should adjustHue of a color and not go beyond 360', function () {
        expect((0, adjustHue_1.default)(350, '#448')).toEqual('#444f88');
    });
    it('should adjustHue when passed a string for adjustment', function () {
        expect((0, adjustHue_1.default)('20', '#448')).toEqual('#5b4488');
    });
    it('should return transparent when passed transparent', function () {
        expect((0, adjustHue_1.default)('20', 'transparent')).toEqual('transparent');
    });
});
