"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var easeInOut_1 = require("../easeInOut");
describe('easeInOut', function () {
    it('should return easeInOutBack cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeInOut_1.default)('back'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
        });
    });
    it('should return easeInOutCirc cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeInOut_1.default)('circ'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
        });
    });
    it('should return easeInOutCubic cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeInOut_1.default)('cubic'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
        });
    });
    it('should return easeInOutExpo cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeInOut_1.default)('expo'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
        });
    });
    it('should return easeInOutQuad cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeInOut_1.default)('quad'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
        });
    });
    it('should return easeInOutQuart cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeInOut_1.default)('quart'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
        });
    });
    it('should return easeInOutQuint cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeInOut_1.default)('quint'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
        });
    });
});
