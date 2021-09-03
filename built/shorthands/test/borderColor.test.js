"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var borderColor_1 = require("../borderColor");
describe('borderColor', function () {
    it('properly applies a value when passed only one', function () {
        expect((0, borderColor_1.default)('red')).toEqual({
            borderBottomColor: 'red',
            borderLeftColor: 'red',
            borderRightColor: 'red',
            borderTopColor: 'red',
        });
    });
    it('properly applies values when passed two', function () {
        expect((0, borderColor_1.default)('red', 'blue')).toEqual({
            borderBottomColor: 'red',
            borderLeftColor: 'blue',
            borderRightColor: 'blue',
            borderTopColor: 'red',
        });
    });
    it('properly applies values when passed three', function () {
        expect((0, borderColor_1.default)('red', 'blue', 'green')).toEqual({
            borderBottomColor: 'green',
            borderLeftColor: 'blue',
            borderRightColor: 'blue',
            borderTopColor: 'red',
        });
    });
    it('properly applies values when passed four', function () {
        expect((0, borderColor_1.default)('red', 'blue', 'green', 'yellow')).toEqual({
            borderBottomColor: 'green',
            borderLeftColor: 'yellow',
            borderRightColor: 'blue',
            borderTopColor: 'red',
        });
    });
});
