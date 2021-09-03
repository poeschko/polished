"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _capitalizeString_1 = require("../_capitalizeString");
describe('capitalizeString', function () {
    it('capitalizes a string', function () {
        expect((0, _capitalizeString_1.default)('polished')).toEqual('Polished');
    });
    it('returns a capitalized string untouched', function () {
        expect((0, _capitalizeString_1.default)('Polished')).toEqual('Polished');
    });
});
