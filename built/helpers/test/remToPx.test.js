"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var remToPx_1 = require("../remToPx");
describe('remToPx', function () {
    beforeEach(function () {
        // $FlowFixMe
        document.documentElement.style.setProperty('font-size', '62.5%'); // eslint-disable-line no-undef
    });
    test('calculate px value when a base in % is set on the root.', function () {
        expect((0, remToPx_1.default)('1.6rem')).toEqual('16px');
    });
    afterEach(function () {
        // $FlowFixMe
        document.documentElement.style.removeProperty('font-size'); // eslint-disable-line no-undef
    });
});
describe('remToPx', function () {
    beforeEach(function () {
        // $FlowFixMe
        document.documentElement.style.setProperty('font-size', '10px'); // eslint-disable-line no-undef
    });
    test('calculate px value when a base in px is set on the root.', function () {
        expect((0, remToPx_1.default)('1.6rem')).toEqual('16px');
    });
    afterEach(function () {
        // $FlowFixMe
        document.documentElement.style.removeProperty('font-size'); // eslint-disable-line no-undef
    });
});
describe('remToPx', function () {
    test('calculate px value when no base is set on the root or provided.', function () {
        expect((0, remToPx_1.default)('1.6rem')).toEqual('25.6px');
    });
});
describe('remToPx', function () {
    beforeEach(function () {
        // $FlowFixMe
        document.documentElement.style.setProperty('font-size', '10pt'); // eslint-disable-line no-undef
    });
    test('errors when an invalid base is set on the root.', function () {
        expect(function () {
            (0, remToPx_1.default)('1.6rem');
        }).toThrow('base must be set in "px" or "%" but you set it in "pt".');
    });
    afterEach(function () {
        // $FlowFixMe
        document.documentElement.style.removeProperty('font-size'); // eslint-disable-line no-undef
    });
});
describe('remToPx', function () {
    beforeEach(function () {
        // $FlowFixMe
        document.documentElement.style.setProperty('font-size', '10px'); // eslint-disable-line no-undef
    });
    test('errors when an invalid value is provided.', function () {
        expect(function () {
            (0, remToPx_1.default)('1.6em');
        }).toThrow('remToPx expects a value in "rem" but you provided it in "em".');
    });
    afterEach(function () {
        // $FlowFixMe
        document.documentElement.style.removeProperty('font-size'); // eslint-disable-line no-undef
    });
});
describe('remToPx', function () {
    test('calculate px value when a base in px is provided.', function () {
        expect((0, remToPx_1.default)('1.6rem', '10px')).toEqual('16px');
    });
    test('calculate px value when a base in % is provided.', function () {
        expect((0, remToPx_1.default)('1.6rem', '62.5%')).toEqual('16px');
    });
    test('calculate px value when a unitless base is provided.', function () {
        expect((0, remToPx_1.default)('1.6', '62.5%')).toEqual('16px');
    });
    test('errors an invalid base is provided.', function () {
        expect(function () {
            (0, remToPx_1.default)('1.6rem', '10pt');
        }).toThrow('base must be set in "px" or "%" but you set it in "pt".');
    });
    test('errors when an invalid value is provided.', function () {
        expect(function () {
            (0, remToPx_1.default)('1.6em', '10px');
        }).toThrow('remToPx expects a value in "rem" but you provided it in "em".');
    });
});
