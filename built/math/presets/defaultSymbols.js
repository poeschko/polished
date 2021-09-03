"use strict";
// @flow
Object.defineProperty(exports, "__esModule", { value: true });
function last() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return a[a.length - 1];
}
function negation(a) {
    return -a;
}
function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}
function max() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return Math.max.apply(Math, a);
}
function min() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return Math.min.apply(Math, a);
}
function comma() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return Array.of.apply(Array, a);
}
var defaultSymbols = {
    symbols: {
        '*': {
            infix: {
                symbol: '*',
                f: multiplication,
                notation: 'infix',
                precedence: 4,
                rightToLeft: 0,
                argCount: 2,
            },
            symbol: '*',
            regSymbol: '\\*',
        },
        '/': {
            infix: {
                symbol: '/',
                f: division,
                notation: 'infix',
                precedence: 4,
                rightToLeft: 0,
                argCount: 2,
            },
            symbol: '/',
            regSymbol: '/',
        },
        '+': {
            infix: {
                symbol: '+',
                f: addition,
                notation: 'infix',
                precedence: 2,
                rightToLeft: 0,
                argCount: 2,
            },
            prefix: {
                symbol: '+',
                f: last,
                notation: 'prefix',
                precedence: 3,
                rightToLeft: 0,
                argCount: 1,
            },
            symbol: '+',
            regSymbol: '\\+',
        },
        '-': {
            infix: {
                symbol: '-',
                f: subtraction,
                notation: 'infix',
                precedence: 2,
                rightToLeft: 0,
                argCount: 2,
            },
            prefix: {
                symbol: '-',
                f: negation,
                notation: 'prefix',
                precedence: 3,
                rightToLeft: 0,
                argCount: 1,
            },
            symbol: '-',
            regSymbol: '-',
        },
        ',': {
            infix: {
                symbol: ',',
                f: comma,
                notation: 'infix',
                precedence: 1,
                rightToLeft: 0,
                argCount: 2,
            },
            symbol: ',',
            regSymbol: ',',
        },
        '(': {
            prefix: {
                symbol: '(',
                f: last,
                notation: 'prefix',
                precedence: 0,
                rightToLeft: 0,
                argCount: 1,
            },
            symbol: '(',
            regSymbol: '\\(',
        },
        ')': {
            postfix: {
                symbol: ')',
                f: undefined,
                notation: 'postfix',
                precedence: 0,
                rightToLeft: 0,
                argCount: 1,
            },
            symbol: ')',
            regSymbol: '\\)',
        },
        min: {
            func: {
                symbol: 'min',
                f: min,
                notation: 'func',
                precedence: 0,
                rightToLeft: 0,
                argCount: 1,
            },
            symbol: 'min',
            regSymbol: 'min\\b',
        },
        max: {
            func: {
                symbol: 'max',
                f: max,
                notation: 'func',
                precedence: 0,
                rightToLeft: 0,
                argCount: 1,
            },
            symbol: 'max',
            regSymbol: 'max\\b',
        },
    },
};
exports.default = defaultSymbols;
