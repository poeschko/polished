"use strict";
// @flow
Object.defineProperty(exports, "__esModule", { value: true });
var _guard_1 = require("../_guard");
describe('guard', function () {
    it('should return the value in case it is within the boundary', function () {
        expect((0, _guard_1.default)(0, 1, 0.4)).toEqual(0.4);
    });
    it('should return the upper boundary in case the value is higher', function () {
        expect((0, _guard_1.default)(0, 1, 1.4)).toEqual(1);
    });
    it('should return the lower boundary in case the value is lower', function () {
        expect((0, _guard_1.default)(0, 1, -0.2)).toEqual(0);
    });
});
