"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var padding_1 = require("../padding");
describe('padding', function () {
    it('properly applies a value when passed only one', function () {
        expect((0, padding_1.default)('12px')).toEqual({
            paddingBottom: '12px',
            paddingLeft: '12px',
            paddingRight: '12px',
            paddingTop: '12px',
        });
    });
    it('properly applies values when passed two', function () {
        expect((0, padding_1.default)('12px', '24px')).toEqual({
            paddingBottom: '12px',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingTop: '12px',
        });
    });
    it('properly applies values when passed three', function () {
        expect((0, padding_1.default)('12px', '24px', '36px')).toEqual({
            paddingBottom: '36px',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingTop: '12px',
        });
    });
    it('properly applies values when passed four', function () {
        expect((0, padding_1.default)('12px', '24px', '36px', '48px')).toEqual({
            paddingBottom: '36px',
            paddingLeft: '48px',
            paddingRight: '24px',
            paddingTop: '12px',
        });
    });
    it('properly applies values when passed four', function () {
        expect((0, padding_1.default)(12, 24, 36, 48)).toEqual({
            paddingBottom: 36,
            paddingLeft: 48,
            paddingRight: 24,
            paddingTop: 12,
        });
    });
    it('properly applies zero value', function () {
        expect((0, padding_1.default)(0)).toEqual({
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
        });
    });
});
