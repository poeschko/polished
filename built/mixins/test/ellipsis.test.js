"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var ellipsis_1 = require("../ellipsis");
describe('ellipsis', function () {
    it('should pass parameter to the value of max-width', function () {
        expect((0, ellipsis_1.default)('300px')).toEqual({
            display: 'inline-block',
            maxWidth: '300px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
        });
    });
    it('should pass parameter of type integer to the value of max-width', function () {
        expect((0, ellipsis_1.default)(300)).toEqual({
            display: 'inline-block',
            maxWidth: 300,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
        });
    });
    it('should default lines to 1 and max-width to 100%', function () {
        expect((0, ellipsis_1.default)()).toEqual({
            display: 'inline-block',
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
        });
    });
    it('should truncate text after 3 lines', function () {
        expect((0, ellipsis_1.default)(null, 3)).toEqual({
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            display: '-webkit-box',
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'normal',
            wordWrap: 'normal',
        });
    });
    it('should truncate text after 3 lines and 500px max-width', function () {
        expect((0, ellipsis_1.default)('500px', 3)).toEqual({
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            display: '-webkit-box',
            maxWidth: '500px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'normal',
            wordWrap: 'normal',
        });
    });
});
