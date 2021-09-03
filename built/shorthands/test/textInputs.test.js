"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var textInputs_1 = require("../textInputs");
describe('textInputs', function () {
    it('populates base text input selectors', function () {
        var _a, _b;
        expect((_a = {}, _a[(0, textInputs_1.default)()] = { 'border-color': 'black' }, _a)).toEqual((_b = {},
            _b["input[type=\"color\"],\n    input[type=\"date\"],\n    input[type=\"datetime\"],\n    input[type=\"datetime-local\"],\n    input[type=\"email\"],\n    input[type=\"month\"],\n    input[type=\"number\"],\n    input[type=\"password\"],\n    input[type=\"search\"],\n    input[type=\"tel\"],\n    input[type=\"text\"],\n    input[type=\"time\"],\n    input[type=\"url\"],\n    input[type=\"week\"],\n    input:not([type]),\n    textarea"] = {
                'border-color': 'black',
            },
            _b));
    });
    it('populates text input selectors for a single state', function () {
        var _a, _b;
        expect((_a = {},
            _a[(0, textInputs_1.default)('active')] = { 'border-color': 'black' },
            _a)).toEqual((_b = {},
            _b["input[type=\"color\"]:active,\n    input[type=\"date\"]:active,\n    input[type=\"datetime\"]:active,\n    input[type=\"datetime-local\"]:active,\n    input[type=\"email\"]:active,\n    input[type=\"month\"]:active,\n    input[type=\"number\"]:active,\n    input[type=\"password\"]:active,\n    input[type=\"search\"]:active,\n    input[type=\"tel\"]:active,\n    input[type=\"text\"]:active,\n    input[type=\"time\"]:active,\n    input[type=\"url\"]:active,\n    input[type=\"week\"]:active,\n    input:not([type]):active,\n    textarea:active"] = {
                'border-color': 'black',
            },
            _b));
    });
    it('populates both base selectors and selectors for a single state', function () {
        var _a, _b;
        expect((_a = {},
            _a[(0, textInputs_1.default)(null, 'focus')] = { 'border-color': 'black' },
            _a)).toEqual((_b = {},
            _b["input[type=\"color\"],\n    input[type=\"date\"],\n    input[type=\"datetime\"],\n    input[type=\"datetime-local\"],\n    input[type=\"email\"],\n    input[type=\"month\"],\n    input[type=\"number\"],\n    input[type=\"password\"],\n    input[type=\"search\"],\n    input[type=\"tel\"],\n    input[type=\"text\"],\n    input[type=\"time\"],\n    input[type=\"url\"],\n    input[type=\"week\"],\n    input:not([type]),\n    textarea,input[type=\"color\"]:focus,\n    input[type=\"date\"]:focus,\n    input[type=\"datetime\"]:focus,\n    input[type=\"datetime-local\"]:focus,\n    input[type=\"email\"]:focus,\n    input[type=\"month\"]:focus,\n    input[type=\"number\"]:focus,\n    input[type=\"password\"]:focus,\n    input[type=\"search\"]:focus,\n    input[type=\"tel\"]:focus,\n    input[type=\"text\"]:focus,\n    input[type=\"time\"]:focus,\n    input[type=\"url\"]:focus,\n    input[type=\"week\"]:focus,\n    input:not([type]):focus,\n    textarea:focus"] = {
                'border-color': 'black',
            },
            _b));
    });
    it('populates text input selectors for multiple states', function () {
        var _a, _b;
        expect((_a = {},
            _a[(0, textInputs_1.default)('active', 'focus')] = { 'border-color': 'black' },
            _a)).toEqual((_b = {},
            _b["input[type=\"color\"]:active,\n    input[type=\"date\"]:active,\n    input[type=\"datetime\"]:active,\n    input[type=\"datetime-local\"]:active,\n    input[type=\"email\"]:active,\n    input[type=\"month\"]:active,\n    input[type=\"number\"]:active,\n    input[type=\"password\"]:active,\n    input[type=\"search\"]:active,\n    input[type=\"tel\"]:active,\n    input[type=\"text\"]:active,\n    input[type=\"time\"]:active,\n    input[type=\"url\"]:active,\n    input[type=\"week\"]:active,\n    input:not([type]):active,\n    textarea:active,input[type=\"color\"]:focus,\n    input[type=\"date\"]:focus,\n    input[type=\"datetime\"]:focus,\n    input[type=\"datetime-local\"]:focus,\n    input[type=\"email\"]:focus,\n    input[type=\"month\"]:focus,\n    input[type=\"number\"]:focus,\n    input[type=\"password\"]:focus,\n    input[type=\"search\"]:focus,\n    input[type=\"tel\"]:focus,\n    input[type=\"text\"]:focus,\n    input[type=\"time\"]:focus,\n    input[type=\"url\"]:focus,\n    input[type=\"week\"]:focus,\n    input:not([type]):focus,\n    textarea:focus"] = {
                'border-color': 'black',
            },
            _b));
    });
    it('throws an error when passed a state it does not recognize', function () {
        expect(function () {
            var _a;
            return (_a = {},
                // $FlowFixMe
                _a[(0, textInputs_1.default)('clicked')] = { 'border-color': 'black' },
                _a);
        }).toThrow('You passed an unsupported selector state to this method');
    });
});
