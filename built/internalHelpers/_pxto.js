"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _endsWith_1 = require("./_endsWith");
var stripUnit_1 = require("../helpers/stripUnit");
var _errors_1 = require("./_errors");
/**
 * Factory function that creates pixel-to-x converters
 * @private
 */
var pxtoFactory = function (to) { return function (pxval, base) {
    if (base === void 0) { base = '16px'; }
    var newPxval = pxval;
    var newBase = base;
    if (typeof pxval === 'string') {
        if (!(0, _endsWith_1.default)(pxval, 'px')) {
            throw new _errors_1.default(69, to, pxval);
        }
        newPxval = (0, stripUnit_1.default)(pxval);
    }
    if (typeof base === 'string') {
        if (!(0, _endsWith_1.default)(base, 'px')) {
            throw new _errors_1.default(70, to, base);
        }
        newBase = (0, stripUnit_1.default)(base);
    }
    if (typeof newPxval === 'string') {
        throw new _errors_1.default(71, pxval, to);
    }
    if (typeof newBase === 'string') {
        throw new _errors_1.default(72, base, to);
    }
    return "" + newPxval / newBase + to;
}; };
exports.default = pxtoFactory;
