"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var rem_1 = require("../rem");
describe('rem', function () {
    it('should convert a simple number to rems', function () {
        expect({ height: (0, rem_1.default)(16) }).toEqual({
            height: '1rem',
        });
    });
});
