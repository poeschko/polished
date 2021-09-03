"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var clearFix_1 = require("../clearFix");
describe('clearFix', function () {
    it('should pass parent to pseudo selector', function () {
        expect((0, clearFix_1.default)('div')).toEqual({
            'div::after': {
                clear: 'both',
                content: '""',
                display: 'table',
            },
        });
    });
    it('should default to & when no parent is passed', function () {
        expect((0, clearFix_1.default)()).toEqual({
            '&::after': {
                clear: 'both',
                content: '""',
                display: 'table',
            },
        });
    });
});
