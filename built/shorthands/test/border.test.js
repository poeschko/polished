"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var border_1 = require("../border");
describe('border', function () {
    it('properly returns separated border styles', function () {
        expect((0, border_1.default)('1px', 'solid', 'red')).toEqual({
            borderColor: 'red',
            borderStyle: 'solid',
            borderWidth: '1px',
        });
    });
    it('properly returns separated border styles for a specific side', function () {
        expect((0, border_1.default)('top', '1px', 'solid', 'red')).toEqual({
            borderTopColor: 'red',
            borderTopStyle: 'solid',
            borderTopWidth: '1px',
        });
    });
    it('properly returns separated border styles when passed a number for borderWidth', function () {
        expect((0, border_1.default)(1, 'solid', 'red')).toEqual({
            borderColor: 'red',
            borderStyle: 'solid',
            borderWidth: 1,
        });
    });
    it('properly returns separated border styles for a specific side when passed a number for borderWidth', function () {
        expect((0, border_1.default)('top', 1, 'solid', 'red')).toEqual({
            borderTopColor: 'red',
            borderTopStyle: 'solid',
            borderTopWidth: 1,
        });
    });
});
