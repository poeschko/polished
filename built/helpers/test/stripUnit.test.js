"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var stripUnit_1 = require("../stripUnit");
describe('stripUnit', function () {
    it('should strip px from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1px') }).toEqual({
            '--dimension': 1,
        });
    });
    it('should strip px from values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1.5px') }).toEqual({
            '--dimension': 1.5,
        });
    });
    it('should strip pt from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1pt') }).toEqual({
            '--dimension': 1,
        });
    });
    it('should strip pt from values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1.5pt') }).toEqual({
            '--dimension': 1.5,
        });
    });
    it('should strip pc from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1pc') }).toEqual({
            '--dimension': 1,
        });
    });
    it('should strip pc from values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1.5pc') }).toEqual({
            '--dimension': 1.5,
        });
    });
    it('should strip mm from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1mm') }).toEqual({
            '--dimension': 1,
        });
    });
    it('should strip mm from values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1.5mm') }).toEqual({
            '--dimension': 1.5,
        });
    });
    it('should strip q from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1q') }).toEqual({
            '--dimension': 1,
        });
    });
    it('should strip q from values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1.5q') }).toEqual({
            '--dimension': 1.5,
        });
    });
    it('should strip cm from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1cm') }).toEqual({
            '--dimension': 1,
        });
    });
    it('should strip cm from values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1.5cm') }).toEqual({
            '--dimension': 1.5,
        });
    });
    it('should strip in from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1in') }).toEqual({
            '--dimension': 1,
        });
    });
    it('should strip in from values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1.5in') }).toEqual({
            '--dimension': 1.5,
        });
    });
    it('should strip em from whole value', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1em') }).toEqual({
            '--dimension': 1,
        });
    });
    it('should strip em from decimal values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1.2em') }).toEqual({
            '--dimension': 1.2,
        });
    });
    it('should strip rem from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1rem') }).toEqual({
            '--dimension': 1,
        });
    });
    it('should strip rem from decimal values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1.2rem') }).toEqual({
            '--dimension': 1.2,
        });
    });
    it('should strip ex from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1ex') }).toEqual({
            '--dimension': 1,
        });
    });
    it('should strip ex from decimal values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1.2ex') }).toEqual({
            '--dimension': 1.2,
        });
    });
    it('should strip ch from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1ch') }).toEqual({
            '--dimension': 1,
        });
    });
    it('should strip ch from decimal values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('1.2ch') }).toEqual({
            '--dimension': 1.2,
        });
    });
    it('should strip vh from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('100vh') }).toEqual({
            '--dimension': 100,
        });
    });
    it('should strip vh from decimal values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('33.33vh') }).toEqual({
            '--dimension': 33.33,
        });
    });
    it('should strip vw from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('100vw') }).toEqual({
            '--dimension': 100,
        });
    });
    it('should strip vw from decimal values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('33.33vw') }).toEqual({
            '--dimension': 33.33,
        });
    });
    it('should strip vmin from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('100vmin') }).toEqual({
            '--dimension': 100,
        });
    });
    it('should strip vmin from decimal values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('33.33vmin') }).toEqual({
            '--dimension': 33.33,
        });
    });
    it('should strip vmax from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('100vmax') }).toEqual({
            '--dimension': 100,
        });
    });
    it('should strip vmax from decimal values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('33.33vmax') }).toEqual({
            '--dimension': 33.33,
        });
    });
    it('should strip % from whole values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('80%') }).toEqual({
            '--dimension': 80,
        });
    });
    it('should strip % from decimal values', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('33.3%') }).toEqual({
            '--dimension': 33.3,
        });
    });
    it('should return a unitless value when passed', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('33') }).toEqual({
            '--dimension': 33,
        });
        // $FlowFixMe
        expect({ '--dimension': (0, stripUnit_1.default)(33) }).toEqual({
            '--dimension': 33,
        });
    });
    it('should return invalid value when passed', function () {
        expect({ '--dimension': (0, stripUnit_1.default)('blah') }).toEqual({
            '--dimension': 'blah',
        });
    });
});
