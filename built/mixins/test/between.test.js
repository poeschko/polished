"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var between_1 = require("../between");
describe('between', function () {
    it('should return a valid calc formula when passed min/max screen sizes', function () {
        expect((0, between_1.default)('20px', '100px', '400px', '1000px')).toEqual('calc(-33.33px + 13.33vw)');
    });
    it('should return a valid calc formula when not passed min/max screen sizes', function () {
        expect((0, between_1.default)('20px', '100px')).toEqual('calc(-9.09px + 9.09vw)');
    });
    // Errors
    it('should throw an error when not passed min/max screen size as a string', function () {
        expect(function () {
            // $FlowFixMe
            (0, between_1.default)('20px', '100px', 400, 1000);
        }).toThrow('minScreen and maxScreen must be provided as stringified numbers with the same units.');
    });
    it('should throw an error when passed min/max screen size with different units', function () {
        expect(function () {
            // $FlowFixMe
            (0, between_1.default)('20px', '100px', '4em', '1000px');
        }).toThrow('minScreen and maxScreen must be provided as stringified numbers with the same units.');
    });
    it('should throw an error when passed to/from size with different units', function () {
        expect(function () {
            // $FlowFixMe
            (0, between_1.default)('1em', '100px', '400px', '1000px');
        }).toThrow('fromSize and toSize must be provided as stringified numbers with the same units.');
    });
    it('should throw an error when passed to/from size with different units than mix/max screen', function () {
        expect(function () {
            // $FlowFixMe
            (0, between_1.default)('1em', '100em', '400px', '1000px');
        }).toThrow('fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.');
    });
    it('should throw an error when passed to/from size with no units but mix/max with units', function () {
        expect(function () {
            // $FlowFixMe
            (0, between_1.default)(20, 100);
        }).toThrow('fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.');
    });
});
