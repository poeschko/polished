"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var position_1 = require("../position");
describe('position', function () {
    it('properly applies a value when passed only one', function () {
        expect((0, position_1.default)('relative', '12px')).toEqual({
            bottom: '12px',
            left: '12px',
            position: 'relative',
            right: '12px',
            top: '12px',
        });
    });
    it('properly applies values when passed two', function () {
        expect((0, position_1.default)('relative', '12px', '24px')).toEqual({
            bottom: '12px',
            left: '24px',
            position: 'relative',
            right: '24px',
            top: '12px',
        });
    });
    it('properly applies values when passed three', function () {
        expect((0, position_1.default)('relative', '12px', '24px', '36px')).toEqual({
            bottom: '36px',
            left: '24px',
            position: 'relative',
            right: '24px',
            top: '12px',
        });
    });
    it('properly applies values when passed four', function () {
        expect((0, position_1.default)('relative', '12px', '24px', '36px', '48px')).toEqual({
            bottom: '36px',
            left: '48px',
            position: 'relative',
            right: '24px',
            top: '12px',
        });
    });
    it('properly ignores position property, when not passed one', function () {
        expect((0, position_1.default)('12px', '24px', '36px', '48px')).toEqual({
            bottom: '36px',
            left: '48px',
            right: '24px',
            top: '12px',
        });
    });
    it('properly skips values when passed undefined`', function () {
        expect((0, position_1.default)('relative', '12px', null, '36px', '48px')).toEqual({
            bottom: '36px',
            left: '48px',
            position: 'relative',
            top: '12px',
        });
    });
    it('properly skips first value when passed undefined', function () {
        expect((0, position_1.default)(null, '24px', '36px', '48px')).toEqual({
            bottom: '36px',
            left: '48px',
            right: '24px',
        });
    });
    it('properly applies values when passed four integers', function () {
        expect((0, position_1.default)('relative', 12, 24, 36, 48)).toEqual({
            bottom: 36,
            left: 48,
            position: 'relative',
            right: 24,
            top: 12,
        });
    });
    it('properly applies zero value', function () {
        expect((0, position_1.default)('relative', 0)).toEqual({
            bottom: 0,
            left: 0,
            position: 'relative',
            right: 0,
            top: 0,
        });
    });
});
