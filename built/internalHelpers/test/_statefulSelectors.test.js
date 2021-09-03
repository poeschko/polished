"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _statefulSelectors_1 = require("../_statefulSelectors");
var mockStateMap = [null, ':before', ':after'];
function mockTemplate(pseudoSelector) {
    return "section a" + pseudoSelector + ",\n  p a" + pseudoSelector;
}
describe('statefulSelectors', function () {
    // Selectors
    it('populates selectors for a single state', function () {
        var _a, _b;
        expect((_a = {},
            _a[(0, _statefulSelectors_1.default)([':before'], mockTemplate, mockStateMap)] = {
                content: 'hello',
            },
            _a)).toEqual((_b = {},
            _b["section a::before,\n  p a::before"] = {
                content: 'hello',
            },
            _b));
    });
    it('populates selectors for a multiple states', function () {
        var _a, _b;
        expect((_a = {},
            _a[(0, _statefulSelectors_1.default)([':before', ':after'], mockTemplate, mockStateMap)] = {
                content: 'hello',
            },
            _a)).toEqual((_b = {},
            _b["section a::before,\n  p a::before,section a::after,\n  p a::after"] = {
                content: 'hello',
            },
            _b));
    });
    it('populates both base selectors and selectors for a single state', function () {
        var _a, _b;
        expect((_a = {},
            _a[(0, _statefulSelectors_1.default)([null, ':after'], mockTemplate, mockStateMap)] = {
                content: 'hello',
            },
            _a)).toEqual((_b = {},
            _b["section a,\n  p a,section a::after,\n  p a::after"] = {
                content: 'hello',
            },
            _b));
    });
    it('populates both base selectors and selectors for a single state when not passed a stateMap', function () {
        var _a, _b;
        expect((_a = {},
            _a[(0, _statefulSelectors_1.default)([null, ':after'], mockTemplate)] = {
                content: 'hello',
            },
            _a)).toEqual((_b = {},
            _b["section a,\n  p a,section a::after,\n  p a::after"] = {
                content: 'hello',
            },
            _b));
    });
    // Errors
    it('throws an error when passed a state it does not recognize', function () {
        expect(function () {
            var _a;
            return (_a = {},
                _a[(0, _statefulSelectors_1.default)([':visited'], mockTemplate, mockStateMap)] = {
                    content: 'hello',
                },
                _a);
        }).toThrow('You passed an unsupported selector state to this method');
    });
    it('throws an error when passed one of the states it is passed is not recognized', function () {
        expect(function () {
            var _a;
            return (_a = {},
                _a[(0, _statefulSelectors_1.default)(['hover', ':visited'], mockTemplate, mockStateMap)] = {
                    content: 'hello',
                },
                _a);
        }).toThrow('You passed an unsupported selector state to this method');
    });
    it('throws an error when not passed a template', function () {
        expect(function () {
            var _a;
            return (_a = {},
                _a[(0, _statefulSelectors_1.default)([':visited'])] = {
                    content: 'hello',
                },
                _a);
        }).toThrow('You must provide a template to this method.');
    });
});
