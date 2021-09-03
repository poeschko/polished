"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _reduceHexValue_1 = require("../_reduceHexValue");
describe('reduceHexValue', function () {
    it('should reduce #ffffff to #fff', function () {
        expect((0, _reduceHexValue_1.default)('#ffffff')).toEqual('#fff');
    });
    it('should reduce #884422 to #842', function () {
        expect((0, _reduceHexValue_1.default)('#884422')).toEqual('#842');
    });
    it('should not reduce #112234', function () {
        expect((0, _reduceHexValue_1.default)('#112234')).toEqual('#112234');
    });
    it('should not reduce #fff', function () {
        expect((0, _reduceHexValue_1.default)('#fff')).toEqual('#fff');
    });
    it('should return the value in case it can not be reduced', function () {
        expect((0, _reduceHexValue_1.default)('You rock!')).toEqual('You rock!');
    });
});
