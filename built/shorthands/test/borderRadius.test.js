"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var borderRadius_1 = require("../borderRadius");
describe('borderRadius', function () {
    it('returns the proper values for the top side', function () {
        expect((0, borderRadius_1.default)('top', '5px')).toEqual({
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
        });
    });
    it('returns the proper values for the bottom side', function () {
        expect((0, borderRadius_1.default)('bottom', '5px')).toEqual({
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
        });
    });
    it('returns the proper values for the right side', function () {
        expect((0, borderRadius_1.default)('right', '5px')).toEqual({
            borderBottomRightRadius: '5px',
            borderTopRightRadius: '5px',
        });
    });
    it('returns the proper values for the left side', function () {
        expect((0, borderRadius_1.default)('left', '5px')).toEqual({
            borderBottomLeftRadius: '5px',
            borderTopLeftRadius: '5px',
        });
    });
    it('returns the proper values when passed an integer', function () {
        expect((0, borderRadius_1.default)('left', 5)).toEqual({
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
        });
    });
    it('returns the proper values when passed zero', function () {
        expect((0, borderRadius_1.default)('left', 0)).toEqual({
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
        });
    });
    it('should throw an error when no radius value is provided', function () {
        expect(function () {
            // $FlowFixMe
            (0, borderRadius_1.default)('top');
        }).toThrow('borderRadius expects a radius value as a string or number as the second argument.');
    });
    it('should throw an error when an invalid side value is provided', function () {
        expect(function () {
            (0, borderRadius_1.default)('all', '100%');
        }).toThrow('borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.');
    });
});
