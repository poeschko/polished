"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var easeIn_1 = require("../easeIn");
describe('easeIn', function () {
    it('should return easeInBack cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeIn_1.default)('back'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
        });
    });
    it('should return easeInCirc cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeIn_1.default)('circ'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
        });
    });
    it('should return easeInCubic cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeIn_1.default)('cubic'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
        });
    });
    it('should return easeInExpo cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeIn_1.default)('expo'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
        });
    });
    it('should return easeInQuad cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeIn_1.default)('quad'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
        });
    });
    it('should return easeInQuart cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeIn_1.default)('quart'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
        });
    });
    it('should return easeInQuint cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeIn_1.default)('quint'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
        });
    });
    it('should return easeInSine cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, easeIn_1.default)('sine'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',
        });
    });
});
