"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var important_1 = require("../important");
var cover_1 = require("../../mixins/cover");
describe('important', function () {
    it('should add !important to a single rule in a flat style block', function () {
        expect((0, important_1.default)({ color: 'red' })).toEqual({
            color: 'red !important',
        });
    });
    it('should add !important to a single rule in a flat style block when the value is a number', function () {
        expect((0, important_1.default)({ fontSize: 12 })).toEqual({
            fontSize: '12 !important',
        });
    });
    it('should add !important to every rule in a flat style block', function () {
        expect((0, important_1.default)({
            color: 'red',
            background: 'blue',
        })).toEqual({
            background: 'blue !important',
            color: 'red !important',
        });
    });
    it('should add !important to a target rule when passed as a string', function () {
        expect((0, important_1.default)({
            color: 'red',
            background: 'blue',
        }, 'color')).toEqual({
            background: 'blue',
            color: 'red !important',
        });
    });
    it('should add !important to a target rule when passed as a single item array', function () {
        expect((0, important_1.default)({
            color: 'red',
            background: 'blue',
        }, ['color'])).toEqual({
            background: 'blue',
            color: 'red !important',
        });
    });
    it('should add !important to a target rule when passed as an array', function () {
        expect((0, important_1.default)({
            color: 'red',
            background: 'blue',
            height: '100px',
        }, ['color', 'height'])).toEqual({
            background: 'blue',
            color: 'red !important',
            height: '100px !important',
        });
    });
    it('should add !important to a mixture of unnested and nested target rules when passed as an array', function () {
        expect((0, important_1.default)({
            background: 'blue',
            height: '100px',
            div: {
                color: 'red',
            },
        }, ['color', 'height'])).toEqual({
            background: 'blue',
            div: {
                color: 'red !important',
            },
            height: '100px !important',
        });
    });
    it('should add !important to all rules in a polished module', function () {
        expect((0, important_1.default)((0, cover_1.default)())).toEqual({
            bottom: '0 !important',
            left: '0 !important',
            position: 'absolute !important',
            right: '0 !important',
            top: '0 !important',
        });
    });
    it('should add !important to a specific rule in a polished module', function () {
        expect((0, important_1.default)((0, cover_1.default)(), 'position')).toEqual({
            bottom: 0,
            left: 0,
            position: 'absolute !important',
            right: 0,
            top: 0,
        });
    });
    it('should return original styles when no properties are found', function () {
        expect((0, important_1.default)({
            color: 'red',
            background: 'blue',
            height: '100px',
        }, ['width', 'fontSize'])).toEqual({
            background: 'blue',
            color: 'red',
            height: '100px',
        });
    });
    it('should throw an error when passed a non-object', function () {
        expect(function () {
            // $FlowFixMe
            (0, important_1.default)('test');
        }).toThrow('important requires a valid style object, got a string instead.');
    });
});
