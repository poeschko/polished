"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var math_1 = require("../math");
var exponentialSymbols_1 = require("../presets/exponentialSymbols");
describe('math', function () {
    it('should handle non-length units', function () {
        expect((0, math_1.default)('1ms + 2ms')).toEqual(1 + 2 + "ms");
        expect((0, math_1.default)('1s + 2s')).toEqual(1 + 2 + "s");
        expect((0, math_1.default)('1deg + 2deg')).toEqual(1 + 2 + "deg");
        expect((0, math_1.default)('1grad + 2grad')).toEqual(1 + 2 + "grad");
        expect((0, math_1.default)('1rad + 2rad')).toEqual(1 + 2 + "rad");
        expect((0, math_1.default)('1turn + 2turn')).toEqual(1 + 2 + "turn");
    });
    it('should be able to do simple addition', function () {
        expect((0, math_1.default)('1rem + 2rem')).toEqual(1 + 2 + "rem");
        expect((0, math_1.default)('1rem + 2')).toEqual(1 + 2 + "rem");
        expect((0, math_1.default)('1em + 5em')).toEqual(1 + 5 + "em");
        expect((0, math_1.default)('1em + -5em')).toEqual(1 + -5 + "em");
        expect((0, math_1.default)('1in + 5in + 10')).toEqual(1 + 5 + 10 + "in");
    });
    it('should be able to do simple subtraction', function () {
        expect((0, math_1.default)('1rem - 2rem')).toEqual(1 - 2 + "rem");
        expect((0, math_1.default)('1rem - 2')).toEqual(1 - 2 + "rem");
        expect((0, math_1.default)('1em - 5em')).toEqual(1 - 5 + "em");
        expect((0, math_1.default)('1em - -5em')).toEqual(1 - -5 + "em");
        expect((0, math_1.default)('1in - 5in - 10')).toEqual(1 - 5 - 10 + "in");
    });
    it('should be able to do simple multiplication', function () {
        expect((0, math_1.default)('1rem * 2rem')).toEqual(1 * 2 + "rem");
        expect((0, math_1.default)('1rem * 2')).toEqual(1 * 2 + "rem");
        expect((0, math_1.default)('1em * 5em')).toEqual(1 * 5 + "em");
        expect((0, math_1.default)('1em * -5em')).toEqual(1 * -5 + "em");
        expect((0, math_1.default)('1in * 5in * 10')).toEqual(1 * 5 * 10 + "in");
    });
    it('should be able to do simple division', function () {
        expect((0, math_1.default)('1rem / 2rem')).toEqual(1 / 2 + "rem");
        expect((0, math_1.default)('1rem / 2')).toEqual(1 / 2 + "rem");
        expect((0, math_1.default)('1em / 5em')).toEqual(1 / 5 + "em");
        expect((0, math_1.default)('1em / -5em')).toEqual(1 / -5 + "em");
        expect((0, math_1.default)('1in / 5in / 10')).toEqual(1 / 5 / 10 + "in");
    });
    it('should be able to do simple min', function () {
        expect((0, math_1.default)('min(3em, 4em, 1em, 2em)')).toEqual(Math.min(3, 4, 1, 2) + "em");
        expect((0, math_1.default)('min(3em, -4em, 1em, 2em)')).toEqual(Math.min(3, -4, 1, 2) + "em");
    });
    it('should be able to do simple max', function () {
        expect((0, math_1.default)('max(3em, 8em, 1em, 2em)')).toEqual(Math.max(3, 8, 1, 2) + "em");
        expect((0, math_1.default)('max(3em, -8em, 1em, 2em)')).toEqual(Math.max(3, -8, 1, 2) + "em");
    });
    it('should be able to do simple factorial', function () {
        expect((0, math_1.default)('3em!', exponentialSymbols_1.default)).toEqual('6em');
        expect((0, math_1.default)('171em!', exponentialSymbols_1.default)).toEqual('Infinityem');
        expect((0, math_1.default)('0px!', exponentialSymbols_1.default)).toEqual('1px');
        expect((0, math_1.default)('-0.5px!', exponentialSymbols_1.default)).toEqual('NaNpx');
        expect((0, math_1.default)('-5px!', exponentialSymbols_1.default)).toEqual('-120px');
    });
    it('should be able to process square root', function () {
        expect((0, math_1.default)('0 + sqrt(4em)', exponentialSymbols_1.default)).toEqual(Math.sqrt(4) + "em");
        expect((0, math_1.default)('sqrt(4em)', exponentialSymbols_1.default)).toEqual(Math.sqrt(4) + "em");
        expect((0, math_1.default)('sqrt(2em + 4em) * 1', exponentialSymbols_1.default)).toEqual(Math.sqrt(2 + 4) + "em");
        expect((0, math_1.default)('sqrt(-4em)', exponentialSymbols_1.default)).toEqual(Math.sqrt(-4) + "em");
        expect((0, math_1.default)('sqrt(4em / 2em)', exponentialSymbols_1.default)).toEqual(Math.sqrt(4 / 2) + "em");
        expect((0, math_1.default)('sqrt(4em + 2em * 5)', exponentialSymbols_1.default)).toEqual(Math.sqrt(4 + 2 * 5) + "em");
        expect((0, math_1.default)('sqrt(4em - 2 / 5em)', exponentialSymbols_1.default)).toEqual(Math.sqrt(4 - 2 / 5) + "em");
    });
    it('should be able to process exponent power', function () {
        expect((0, math_1.default)('2em^3', exponentialSymbols_1.default)).toEqual(Math.pow(2, 3) + "em");
    });
    it('should be able to process parentheses', function () {
        expect((0, math_1.default)('(1rem + 2rem) * 5')).toEqual((1 + 2) * 5 + "rem");
        expect((0, math_1.default)('(4em + 2)  * 5em + sqrt(4em - 2 / 5em)', exponentialSymbols_1.default)).toEqual((4 + 2) * 5 + Math.sqrt(4 - 2 / 5) + "em");
    });
    it('should throw an error when formula contains multiple units', function () {
        expect(function () {
            (0, math_1.default)('1vw + 1vh + 1pt');
        }).toThrow('All values in a formula must have the same unit or be unitless.');
    });
    it('should throw an error when formula is missing a closing parenthesis', function () {
        expect(function () {
            (0, math_1.default)('(1px + 2px * 3');
        }).toThrow('Formula is missing closing parenthesis at 10');
    });
    it('should throw an error when formula has an extra closing parenthesis', function () {
        expect(function () {
            (0, math_1.default)('(1px + 2px) * 3)');
        }).toThrow('Formula has too many closing parentheses at 11');
    });
    it('should throw an error when formula has no opening parenthesis', function () {
        expect(function () {
            (0, math_1.default)('1px + 2px) * 3');
        }).toThrow('Formula has too many closing parentheses at 5');
    });
    it('should throw an error when a function has no opening parenthesis', function () {
        expect(function () {
            (0, math_1.default)('1px + sqrt 4', exponentialSymbols_1.default);
        }).toThrow('Formula contains a function that needs parentheses at 9');
    });
    it('should throw an error when passed a non-formula string', function () {
        expect(function () {
            (0, math_1.default)("eval('1+2+3')");
        }).toThrow('Syntax Error at 0');
    });
});
