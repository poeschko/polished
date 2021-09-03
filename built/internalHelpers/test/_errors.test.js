"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var math_1 = require("../../math/math");
var exponentialSymbols_1 = require("../../math/presets/exponentialSymbols");
var OLD_ENV = process.env;
beforeEach(function () {
    jest.resetModules();
    process.env = __assign({}, OLD_ENV);
    delete process.env.NODE_ENV;
});
afterEach(function () {
    process.env = OLD_ENV;
});
describe('errors', function () {
    it('should throw an error when a function has no opening parenthesis', function () {
        process.env.NODE_ENV = 'production';
        expect(function () {
            (0, math_1.default)('1px + sqrt 4', exponentialSymbols_1.default);
        }).toThrow('An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#38 for more information.');
    });
});
