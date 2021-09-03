"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var easeOut_1 = require("../easeOut");
describe('easeOut', function () {
    it('should return easeOutBack cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeOut_1.default)('back'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
        });
    });
    it('should return easeOutCirc cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeOut_1.default)('circ'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
        });
    });
    it('should return easeOutCubic cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeOut_1.default)('cubic'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
        });
    });
    it('should return easeOutExpo cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeOut_1.default)('expo'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
        });
    });
    it('should return easeOutQuad cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeOut_1.default)('quad'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
        });
    });
    it('should return easeOutQuart cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeOut_1.default)('quart'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
        });
    });
    it('should return easeOutQuint cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeOut_1.default)('quint'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
        });
    });
});
