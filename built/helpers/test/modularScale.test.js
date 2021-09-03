"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var modularScale_1 = require("../modularScale");
describe('modularScale', function () {
    it('should throw an error if no steps are provided', function () {
        // $FlowFixMe
        expect(function () { return ({ 'font-size': (0, modularScale_1.default)() }); }).toThrow();
    });
    it('should use perfect fourth and 1em base by default', function () {
        expect({ 'font-size': (0, modularScale_1.default)(1) }).toEqual({
            'font-size': '1.333em',
        });
        expect({ 'font-size': (0, modularScale_1.default)(2) }).toEqual({
            'font-size': '1.776889em',
        });
        expect({ 'font-size': (0, modularScale_1.default)(0) }).toEqual({
            'font-size': '1em',
        });
    });
    it('should allow adjusting the base', function () {
        expect({ 'font-size': (0, modularScale_1.default)(1, '2em') }).toEqual({
            'font-size': '2.666em',
        });
    });
    it('should allow a number as a base', function () {
        expect({ 'font-size': (0, modularScale_1.default)(1, 2) }).toEqual({
            'font-size': '2.666',
        });
    });
    it('should allow properly look up preset ratio', function () {
        expect({
            'font-size': (0, modularScale_1.default)(1, '1em', 'minorSecond'),
        }).toEqual({
            'font-size': '1.067em',
        });
    });
    it('should allow adjusting the ratio', function () {
        expect({ 'font-size': (0, modularScale_1.default)(1, '1em', 1) }).toEqual({
            'font-size': '1em',
        });
    });
    it('should allow any of the predefined ratio names', function () {
        var expectedRatio = {
            minorSecond: '1.067em',
            majorSecond: '1.125em',
            minorThird: '1.2em',
            majorThird: '1.25em',
            perfectFourth: '1.333em',
            augFourth: '1.414em',
            perfectFifth: '1.5em',
            minorSixth: '1.6em',
            goldenSection: '1.618em',
            majorSixth: '1.667em',
            minorSeventh: '1.778em',
            majorSeventh: '1.875em',
            octave: '2em',
            majorTenth: '2.5em',
            majorEleventh: '2.667em',
            majorTwelfth: '3em',
            doubleOctave: '4em',
        };
        Object.keys(modularScale_1.ratioNames).forEach(function (ratio) {
            expect({
                'font-size': (0, modularScale_1.default)(1, '1em', modularScale_1.ratioNames[ratio]),
            }).toEqual({
                'font-size': expectedRatio[ratio],
            });
        });
    });
    it('should throw an error if an invalid base is provided', function () {
        expect(function () {
            (0, modularScale_1.default)(2, 'invalid');
        }).toThrow();
    });
    it('should throw an error if an invalid ratio is provided', function () {
        expect(function () {
            // $FlowFixMe
            (0, modularScale_1.default)(2, '1em', 'invalid');
        }).toThrow();
    });
});
