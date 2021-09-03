"use strict";
// @flow
Object.defineProperty(exports, "__esModule", { value: true });
var _curry_1 = require("../_curry");
describe('curry', function () {
    it('should execute the function right now', function () {
        var fn = function (amount, color) { return amount + "-" + color; };
        expect((0, _curry_1.default)(fn)(0.5, '#FFF')).toEqual('0.5-#FFF');
    });
    it('should create another function that can be executed', function () {
        var fn = function (amount, color) { return amount + "-" + color; };
        expect((0, _curry_1.default)(fn)(0.5)('#FFF')).toEqual('0.5-#FFF');
    });
});
