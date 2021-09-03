"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var borderStyle_1 = require("../borderStyle");
describe('borderStyle', function () {
    it('properly applies a value when passed only one', function () {
        expect((0, borderStyle_1.default)('solid')).toEqual({
            borderBottomStyle: 'solid',
            borderLeftStyle: 'solid',
            borderRightStyle: 'solid',
            borderTopStyle: 'solid',
        });
    });
    it('properly applies values when passed two', function () {
        expect((0, borderStyle_1.default)('solid', 'dashed')).toEqual({
            borderBottomStyle: 'solid',
            borderLeftStyle: 'dashed',
            borderRightStyle: 'dashed',
            borderTopStyle: 'solid',
        });
    });
    it('properly applies values when passed three', function () {
        expect((0, borderStyle_1.default)('solid', 'dashed', 'dotted')).toEqual({
            borderBottomStyle: 'dotted',
            borderLeftStyle: 'dashed',
            borderRightStyle: 'dashed',
            borderTopStyle: 'solid',
        });
    });
    it('properly applies values when passed four', function () {
        expect((0, borderStyle_1.default)('solid', 'dashed', 'dotted', 'double')).toEqual({
            borderBottomStyle: 'dotted',
            borderLeftStyle: 'double',
            borderRightStyle: 'dashed',
            borderTopStyle: 'solid',
        });
    });
});
