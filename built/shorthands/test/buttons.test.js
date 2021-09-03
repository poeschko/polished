"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var buttons_1 = require("../buttons");
describe('buttons', function () {
    it('populates base button selectors', function () {
        var _a, _b;
        expect((_a = {}, _a[(0, buttons_1.default)()] = { 'border-color': 'black' }, _a)).toEqual((_b = {},
            _b["button,\n  input[type=\"button\"],\n  input[type=\"reset\"],\n  input[type=\"submit\"]"] = {
                'border-color': 'black',
            },
            _b));
    });
    it('populates buttons selectors for a single state', function () {
        var _a, _b;
        expect((_a = {},
            _a[(0, buttons_1.default)('active')] = { 'border-color': 'black' },
            _a)).toEqual((_b = {},
            _b["button:active,\n  input[type=\"button\"]:active,\n  input[type=\"reset\"]:active,\n  input[type=\"submit\"]:active"] = {
                'border-color': 'black',
            },
            _b));
    });
    it('populates both base selectors and selectors for a single state', function () {
        var _a, _b;
        expect((_a = {},
            _a[(0, buttons_1.default)(null, 'focus')] = { 'border-color': 'black' },
            _a)).toEqual((_b = {},
            _b["button,\n  input[type=\"button\"],\n  input[type=\"reset\"],\n  input[type=\"submit\"],button:focus,\n  input[type=\"button\"]:focus,\n  input[type=\"reset\"]:focus,\n  input[type=\"submit\"]:focus"] = {
                'border-color': 'black',
            },
            _b));
    });
    it('populates button selectors for multiple states', function () {
        var _a, _b;
        expect((_a = {},
            _a[(0, buttons_1.default)('active', 'focus')] = { 'border-color': 'black' },
            _a)).toEqual((_b = {},
            _b["button:active,\n  input[type=\"button\"]:active,\n  input[type=\"reset\"]:active,\n  input[type=\"submit\"]:active,button:focus,\n  input[type=\"button\"]:focus,\n  input[type=\"reset\"]:focus,\n  input[type=\"submit\"]:focus"] = {
                'border-color': 'black',
            },
            _b));
    });
    it('throws an error when passed a state it does not recognize', function () {
        expect(function () {
            var _a;
            return (_a = {},
                // $FlowFixMe
                _a[(0, buttons_1.default)('clicked')] = { 'border-color': 'black' },
                _a);
        }).toThrow('You passed an unsupported selector state to this method');
    });
});
