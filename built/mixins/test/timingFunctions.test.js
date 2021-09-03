"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var timingFunctions_1 = require("../timingFunctions");
describe('timingFunctions', function () {
    it('should return easeInBack cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInBack'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
        });
    });
    it('should return easeInCirc cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInCirc'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
        });
    });
    it('should return easeInCubic cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInCubic'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
        });
    });
    it('should return easeInExpo cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInExpo'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
        });
    });
    it('should return easeInQuad cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInQuad'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
        });
    });
    it('should return easeInQuart cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInQuart'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
        });
    });
    it('should return easeInQuint cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInQuint'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
        });
    });
    it('should return easeInSine cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInSine'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',
        });
    });
    it('should return easeOutBack cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeOutBack'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
        });
    });
    it('should return easeOutCirc cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeOutCirc'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
        });
    });
    it('should return easeOutCubic cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeOutCubic'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
        });
    });
    it('should return easeOutExpo cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeOutExpo'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
        });
    });
    it('should return easeOutQuad cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeOutQuad'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
        });
    });
    it('should return easeOutQuart cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeOutQuart'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
        });
    });
    it('should return easeOutQuint cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeOutQuint'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
        });
    });
    it('should return easeOutSine cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeOutSine'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',
        });
    });
    it('should return easeInOutBack cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInOutBack'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
        });
    });
    it('should return easeInOutCirc cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInOutCirc'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
        });
    });
    it('should return easeInOutCubic cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInOutCubic'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
        });
    });
    it('should return easeInOutExpo cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInOutExpo'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
        });
    });
    it('should return easeInOutQuad cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInOutQuad'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
        });
    });
    it('should return easeInOutQuart cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInOutQuart'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
        });
    });
    it('should return easeInOutQuint cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInOutQuint'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
        });
    });
    it('should return easeInOutSine cubic-bezier', function () {
        expect({
            'transition-timing-function': (0, timingFunctions_1.default)('easeInOutSine'),
        }).toEqual({
            'transition-timing-function': 'cubic-bezier(0.445,  0.050, 0.550, 0.950)',
        });
    });
});
