"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var margin_1 = require("../margin");
describe('margin', function () {
    it('properly applies a value when passed only one', function () {
        expect((0, margin_1.default)('12px')).toEqual({
            marginBottom: '12px',
            marginLeft: '12px',
            marginRight: '12px',
            marginTop: '12px',
        });
    });
    it('properly applies values when passed two', function () {
        expect((0, margin_1.default)('12px', '24px')).toEqual({
            marginBottom: '12px',
            marginLeft: '24px',
            marginRight: '24px',
            marginTop: '12px',
        });
    });
    it('properly applies values when passed three', function () {
        expect((0, margin_1.default)('12px', '24px', '36px')).toEqual({
            marginBottom: '36px',
            marginLeft: '24px',
            marginRight: '24px',
            marginTop: '12px',
        });
    });
    it('properly applies values when passed four', function () {
        expect((0, margin_1.default)('12px', '24px', '36px', '48px')).toEqual({
            marginBottom: '36px',
            marginLeft: '48px',
            marginRight: '24px',
            marginTop: '12px',
        });
    });
    it('properly applies values when passed four', function () {
        expect((0, margin_1.default)(12, 24, 36, 48)).toEqual({
            marginBottom: 36,
            marginLeft: 48,
            marginRight: 24,
            marginTop: 12,
        });
    });
    it('properly applies zero value', function () {
        expect((0, margin_1.default)(0)).toEqual({
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
        });
    });
});
