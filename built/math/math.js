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
var defaultSymbols_1 = require("./presets/defaultSymbols");
var _errors_1 = require("../internalHelpers/_errors");
var unitRegExp = /((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;
// Merges additional math functionality into the defaults.
function mergeSymbolMaps(additionalSymbols) {
    var symbolMap = {};
    symbolMap.symbols = additionalSymbols
        ? __assign(__assign({}, defaultSymbols_1.default.symbols), additionalSymbols.symbols) : __assign({}, defaultSymbols_1.default.symbols);
    return symbolMap;
}
function exec(operators, values) {
    var op = operators.pop();
    values.push(op.f.apply(op, [].concat.apply([], values.splice(-op.argCount))));
    return op.precedence;
}
function calculate(expression, additionalSymbols) {
    var symbolMap = mergeSymbolMaps(additionalSymbols);
    var match;
    var operators = [symbolMap.symbols['('].prefix];
    var values = [];
    var pattern = new RegExp(// Pattern for numbers
    "\\d+(?:\\.\\d+)?|" + 
    // ...and patterns for individual operators/function names
    Object.keys(symbolMap.symbols)
        .map(function (key) { return symbolMap.symbols[key]; })
        // longer symbols should be listed first
        // $FlowFixMe
        .sort(function (a, b) { return b.symbol.length - a.symbol.length; })
        // $FlowFixMe
        .map(function (val) { return val.regSymbol; })
        .join('|') + "|(\\S)", 'g');
    pattern.lastIndex = 0; // Reset regular expression object
    var afterValue = false;
    do {
        match = pattern.exec(expression);
        var _a = match || [')', undefined], token = _a[0], bad = _a[1];
        var notNumber = symbolMap.symbols[token];
        var notNewValue = notNumber && !notNumber.prefix && !notNumber.func;
        var notAfterValue = !notNumber || (!notNumber.postfix && !notNumber.infix);
        // Check for syntax errors:
        if (bad || (afterValue ? notAfterValue : notNewValue)) {
            throw new _errors_1.default(37, match ? match.index : expression.length, expression);
        }
        if (afterValue) {
            // We either have an infix or postfix operator (they should be mutually exclusive)
            var curr = notNumber.postfix || notNumber.infix;
            do {
                var prev = operators[operators.length - 1];
                if ((curr.precedence - prev.precedence || prev.rightToLeft) > 0)
                    break;
                // Apply previous operator, since it has precedence over current one
            } while (exec(operators, values)); // Exit loop after executing an opening parenthesis or function
            afterValue = curr.notation === 'postfix';
            if (curr.symbol !== ')') {
                operators.push(curr);
                // Postfix always has precedence over any operator that follows after it
                if (afterValue)
                    exec(operators, values);
            }
        }
        else if (notNumber) {
            // prefix operator or function
            operators.push(notNumber.prefix || notNumber.func);
            if (notNumber.func) {
                // Require an opening parenthesis
                match = pattern.exec(expression);
                if (!match || match[0] !== '(') {
                    throw new _errors_1.default(38, match ? match.index : expression.length, expression);
                }
            }
        }
        else {
            // number
            values.push(+token);
            afterValue = true;
        }
    } while (match && operators.length);
    if (operators.length) {
        throw new _errors_1.default(39, match ? match.index : expression.length, expression);
    }
    else if (match) {
        throw new _errors_1.default(40, match ? match.index : expression.length, expression);
    }
    else {
        return values.pop();
    }
}
function reverseString(str) {
    return str.split('').reverse().join('');
}
/**
 * Helper for doing math with CSS Units. Accepts a formula as a string. All values in the formula must have the same unit (or be unitless). Supports complex formulas utliziing addition, subtraction, multiplication, division, square root, powers, factorial, min, max, as well as parentheses for order of operation.
 *
 *In cases where you need to do calculations with mixed units where one unit is a [relative length unit](https://developer.mozilla.org/en-US/docs/Web/CSS/length#Relative_length_units), you will want to use [CSS Calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).
 *
 * *warning* While we've done everything possible to ensure math safely evalutes formulas expressed as strings, you should always use extreme caution when passing `math` user provided values.
 * @example
 * // Styles as object usage
 * const styles = {
 *   fontSize: math('12rem + 8rem'),
 *   fontSize: math('(12px + 2px) * 3'),
 *   fontSize: math('3px^2 + sqrt(4)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   fontSize: ${math('12rem + 8rem')};
 *   fontSize: ${math('(12px + 2px) * 3')};
 *   fontSize: ${math('3px^2 + sqrt(4)')};
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   fontSize: '20rem',
 *   fontSize: '42px',
 *   fontSize: '11px',
 * }
 */
function math(formula, additionalSymbols) {
    var reversedFormula = reverseString(formula);
    var formulaMatch = reversedFormula.match(unitRegExp);
    // Check that all units are the same
    if (formulaMatch && !formulaMatch.every(function (unit) { return unit === formulaMatch[0]; })) {
        throw new _errors_1.default(41);
    }
    var cleanFormula = reverseString(reversedFormula.replace(unitRegExp, ''));
    return "" + calculate(cleanFormula, additionalSymbols) + (formulaMatch ? reverseString(formulaMatch[0]) : '');
}
exports.default = math;
