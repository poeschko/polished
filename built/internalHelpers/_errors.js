"use strict";
// @flow
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */
var ERRORS = preval(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  const fs = require('fs');\n  const md = fs.readFileSync(__dirname + '/errors.md', 'utf8');\n  module.exports = md.split(/^#/gm).slice(1).reduce((errors, str) => {\n    const [, code, message] = str.split(/^.*?(\\d+)\\s*\\n/)\n    errors[code] = message\n    return errors;\n  }, {});\n"], ["\n  const fs = require('fs');\n  const md = fs.readFileSync(__dirname + '/errors.md', 'utf8');\n  module.exports = md.split(/^#/gm).slice(1).reduce((errors, str) => {\n    const [, code, message] = str.split(/^.*?(\\\\d+)\\\\s*\\\\n/)\n    errors[code] = message\n    return errors;\n  }, {});\n"
    /**
     * super basic version of sprintf
     * @private
     */
])));
/**
 * super basic version of sprintf
 * @private
 */
function format() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var a = args[0];
    var b = [];
    var c;
    for (c = 1; c < args.length; c += 1) {
        b.push(args[c]);
    }
    b.forEach(function (d) {
        a = a.replace(/%[a-z]/, d);
    });
    return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */
var PolishedError = /** @class */ (function (_super) {
    __extends(PolishedError, _super);
    function PolishedError(code) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _this = this;
        if (process.env.NODE_ENV === 'production') {
            _this = _super.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
        }
        else {
            _this = _super.call(this, format.apply(void 0, __spreadArray([ERRORS[code]], args, false))) || this;
        }
        return _this;
    }
    return PolishedError;
}(Error));
exports.default = PolishedError;
var templateObject_1;
