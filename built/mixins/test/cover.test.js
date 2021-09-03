"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var cover_1 = require("../cover");
describe('cover', function () {
    it('should cover full screen when passed no parameters', function () {
        expect((0, cover_1.default)()).toEqual({
            bottom: 0,
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
        });
    });
    it('should cover full screen with an offset when passed one', function () {
        expect((0, cover_1.default)('100px')).toEqual({
            bottom: '100px',
            left: '100px',
            position: 'absolute',
            right: '100px',
            top: '100px',
        });
    });
});
