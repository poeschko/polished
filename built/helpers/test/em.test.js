"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var em_1 = require("../em");
describe('em', function () {
    it('should convert a simple number to ems', function () {
        expect({ height: (0, em_1.default)(16) }).toEqual({
            height: '1em',
        });
    });
});
