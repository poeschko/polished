"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var borderWidth_1 = require("../borderWidth");
describe('borderWidth', function () {
    it('properly applies a value when passed only one', function () {
        expect((0, borderWidth_1.default)('12px')).toEqual({
            borderBottomWidth: '12px',
            borderLeftWidth: '12px',
            borderRightWidth: '12px',
            borderTopWidth: '12px',
        });
    });
    it('properly applies values when passed two', function () {
        expect((0, borderWidth_1.default)('12px', '24px')).toEqual({
            borderBottomWidth: '12px',
            borderLeftWidth: '24px',
            borderRightWidth: '24px',
            borderTopWidth: '12px',
        });
    });
    it('properly applies values when passed three', function () {
        expect((0, borderWidth_1.default)('12px', '24px', '36px')).toEqual({
            borderBottomWidth: '36px',
            borderLeftWidth: '24px',
            borderRightWidth: '24px',
            borderTopWidth: '12px',
        });
    });
    it('properly applies values when passed four', function () {
        expect((0, borderWidth_1.default)('12px', '24px', '36px', '48px')).toEqual({
            borderBottomWidth: '36px',
            borderLeftWidth: '48px',
            borderRightWidth: '24px',
            borderTopWidth: '12px',
        });
    });
    it('properly applies values when passed integers', function () {
        expect((0, borderWidth_1.default)(12, 24, 36, 48)).toEqual({
            borderBottomWidth: 36,
            borderLeftWidth: 48,
            borderRightWidth: 24,
            borderTopWidth: 12,
        });
    });
    it('properly applies values when passed zero', function () {
        expect((0, borderWidth_1.default)(0)).toEqual({
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
        });
    });
});
