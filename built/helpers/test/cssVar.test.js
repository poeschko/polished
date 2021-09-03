"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var cssVar_1 = require("../cssVar");
beforeAll(function () {
    // $FlowFixMe
    document.documentElement.style.setProperty('--background', '#FFF'); // eslint-disable-line no-undef
    // $FlowFixMe
    document.documentElement.style.setProperty('--foreground-color', '#000'); // eslint-disable-line no-undef
    // $FlowFixMe
    document.documentElement.style.setProperty('--our-background-color', 'red'); // eslint-disable-line no-undef
    // $FlowFixMe
    document.documentElement.style.setProperty('--our-Background-Color', 'orange'); // eslint-disable-line no-undef
    // $FlowFixMe
    document.documentElement.style.setProperty('--our-complex-value', '12px 12px'); // eslint-disable-line no-undef
});
describe('cssVar', function () {
    test('gets a css variable', function () {
        expect((0, cssVar_1.default)('--background')).toEqual('#FFF');
    });
    test('gets a hyphenated css variable', function () {
        expect((0, cssVar_1.default)('--foreground-color')).toEqual('#000');
    });
    test('gets a complex hyphenated css variable', function () {
        expect((0, cssVar_1.default)('--our-background-color')).toEqual('red');
    });
    test('respects casing', function () {
        expect((0, cssVar_1.default)('--our-Background-Color')).toEqual('orange');
    });
    test('respects complex values', function () {
        expect((0, cssVar_1.default)('--our-complex-value')).toEqual('12px 12px');
    });
    test("returns default when variable isn't found.", function () {
        expect((0, cssVar_1.default)('--unfound-variable', 'orange')).toEqual('orange');
    });
    test('errors when variable is not found and no default is provided', function () {
        expect(function () {
            (0, cssVar_1.default)('--unfound-variable');
        }).toThrow('CSS variable not found and no default was provided.');
    });
    test('errors when variable is not formatted correctly', function () {
        expect(function () {
            (0, cssVar_1.default)('-bad-formatted-variable');
        }).toThrow('Please provide a valid CSS variable.');
    });
});
