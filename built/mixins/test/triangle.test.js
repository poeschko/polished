"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var triangle_1 = require("../triangle");
describe('triangle', function () {
    it('should generate a proper triangle when passed all parameters', function () {
        expect(__assign({}, (0, triangle_1.default)({
            foregroundColor: 'red',
            backgroundColor: 'black',
            pointingDirection: 'right',
            height: 10,
            width: 20,
        }))).toEqual({
            borderColor: 'black',
            borderLeftColor: 'red',
            borderStyle: 'solid',
            borderWidth: '5 0 5 20',
            height: '0',
            width: '0',
        });
    });
    it('should generate a proper triangle when passed all parameters with units on width/height', function () {
        expect(__assign({}, (0, triangle_1.default)({
            foregroundColor: 'red',
            backgroundColor: 'black',
            pointingDirection: 'right',
            height: '10em',
            width: '20em',
        }))).toEqual({
            borderColor: 'black',
            borderLeftColor: 'red',
            borderStyle: 'solid',
            borderWidth: '5em 0 5em 20em',
            height: '0',
            width: '0',
        });
    });
    it('should generate a proper triangle when passed all parameters with units on width/height with float values', function () {
        expect(__assign({}, (0, triangle_1.default)({
            foregroundColor: 'red',
            backgroundColor: 'black',
            pointingDirection: 'right',
            height: '10.5em',
            width: '20.5em',
        }))).toEqual({
            borderColor: 'black',
            borderLeftColor: 'red',
            borderStyle: 'solid',
            borderWidth: '5.25em 0 5.25em 20.5em',
            height: '0',
            width: '0',
        });
    });
    it('should default to a transparent background when not passed a backgroundColor', function () {
        expect(__assign({}, (0, triangle_1.default)({
            foregroundColor: 'red',
            pointingDirection: 'right',
            height: '10px',
            width: '20px',
        }))).toEqual({
            borderColor: 'transparent',
            borderLeftColor: 'red',
            borderStyle: 'solid',
            borderWidth: '5px 0 5px 20px',
            height: '0',
            width: '0',
        });
    });
    it('should generate a proper triangle when passed string values for height and width', function () {
        expect(__assign({}, (0, triangle_1.default)({
            foregroundColor: 'red',
            backgroundColor: 'black',
            pointingDirection: 'right',
            height: '10px',
            width: '20px',
        }))).toEqual({
            borderColor: 'black',
            borderLeftColor: 'red',
            borderStyle: 'solid',
            borderWidth: '5px 0 5px 20px',
            height: '0',
            width: '0',
        });
    });
    it('should properly render top pointing arrow with green foregroundColor, width of 20px and height 20px', function () {
        expect(__assign({}, (0, triangle_1.default)({
            foregroundColor: 'green',
            pointingDirection: 'top',
            height: '20px',
            width: '20px',
        }))).toEqual({
            borderBottomColor: 'green',
            borderColor: 'transparent',
            borderStyle: 'solid',
            borderWidth: '0 10px 20px 10px',
            height: '0',
            width: '0',
        });
    });
    it('should properly render right pointing arrow with width of 20px and height 10px', function () {
        expect(__assign({}, (0, triangle_1.default)({
            foregroundColor: 'red',
            pointingDirection: 'right',
            height: '10px',
            width: '20px',
        }))).toEqual({
            borderColor: 'transparent',
            borderLeftColor: 'red',
            borderStyle: 'solid',
            borderWidth: '5px 0 5px 20px',
            height: '0',
            width: '0',
        });
    });
    it('should properly render bottom pointing arrow with red foregroundColor, width of 20px and height 20px', function () {
        expect(__assign({}, (0, triangle_1.default)({
            foregroundColor: 'red',
            pointingDirection: 'bottom',
            height: '20px',
            width: '10px',
        }))).toEqual({
            borderColor: 'transparent',
            borderStyle: 'solid',
            borderTopColor: 'red',
            borderWidth: '20px 5px 0 5px',
            height: '0',
            width: '0',
        });
    });
    it('should properly render left pointing arrow with blue foregroundColor, width of 10px and height 20px', function () {
        expect(__assign({}, (0, triangle_1.default)({
            foregroundColor: 'blue',
            pointingDirection: 'left',
            height: '20px',
            width: '10px',
        }))).toEqual({
            borderColor: 'transparent',
            borderRightColor: 'blue',
            borderStyle: 'solid',
            borderWidth: '10px 10px 10px 0',
            height: '0',
            width: '0',
        });
    });
    it('should properly render topRight pointing arrow with blue foregroundColor, width of 20px and height 20px', function () {
        expect(__assign({}, (0, triangle_1.default)({
            foregroundColor: 'blue',
            pointingDirection: 'topRight',
            height: '20px',
            width: '20px',
        }))).toEqual({
            borderColor: 'transparent',
            borderRightColor: 'blue',
            borderStyle: 'solid',
            borderWidth: '0 20px 20px 0',
            height: '0',
            width: '0',
        });
    });
    it('should properly render bottomRight pointing arrow with blue foregroundColor, width of 20px and height 20px', function () {
        expect(__assign({}, (0, triangle_1.default)({
            foregroundColor: 'blue',
            pointingDirection: 'bottomRight',
            height: '20px',
            width: '20px',
        }))).toEqual({
            borderBottomColor: 'blue',
            borderColor: 'transparent',
            borderStyle: 'solid',
            borderWidth: '0 0 20px 20px',
            height: '0',
            width: '0',
        });
    });
    it('should properly render bottomLeft pointing arrow with blue foregroundColor, width of 20px and height 20px', function () {
        expect(__assign({}, (0, triangle_1.default)({
            foregroundColor: 'blue',
            pointingDirection: 'bottomLeft',
            height: '20px',
            width: '20px',
        }))).toEqual({
            borderColor: 'transparent',
            borderLeftColor: 'blue',
            borderStyle: 'solid',
            borderWidth: '20px 0 0 20px',
            height: '0',
            width: '0',
        });
    });
    it('should properly render topLeft pointing arrow with blue foregroundColor, width of 20px and height 20px', function () {
        expect(__assign({}, (0, triangle_1.default)({
            foregroundColor: 'blue',
            pointingDirection: 'topLeft',
            height: '20px',
            width: '20px',
        }))).toEqual({
            borderColor: 'transparent',
            borderStyle: 'solid',
            borderTopColor: 'blue',
            borderWidth: '20px 20px 0 0',
            height: '0',
            width: '0',
        });
    });
    it('should throw an error when pointingDirection is not provided', function () {
        expect(function () {
            // $FlowFixMe
            (0, triangle_1.default)({
                foregroundColor: 'blue',
                height: '20px',
                width: '10px',
            });
        }).toThrow("Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.");
    });
    it('should throw an error when pointingDirection does not match corresponding options', function () {
        expect(function () {
            (0, triangle_1.default)({
                foregroundColor: 'blue',
                height: '20px',
                width: '10px',
                // $FlowFixMe
                pointingDirection: false,
            });
        }).toThrow("Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.");
    });
    it('should throw an error when height or width is not a unit based value.', function () {
        expect(function () {
            (0, triangle_1.default)({
                foregroundColor: 'blue',
                height: 'inherit',
                width: 'inherit',
                pointingDirection: 'bottom',
            });
        }).toThrow('Passed an invalid value to `height` or `width`. Please provide a pixel based unit');
    });
});
