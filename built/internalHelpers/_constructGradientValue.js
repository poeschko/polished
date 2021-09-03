"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
function constructGradientValue(literals) {
    var substitutions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        substitutions[_i - 1] = arguments[_i];
    }
    var template = '';
    for (var i = 0; i < literals.length; i += 1) {
        template += literals[i];
        if (i === substitutions.length - 1 && substitutions[i]) {
            var definedValues = substitutions.filter(function (substitute) { return !!substitute; });
            // Adds leading coma if properties preceed color-stops
            if (definedValues.length > 1) {
                template = template.slice(0, -1);
                template += ", " + substitutions[i];
                // No trailing space if color-stops is the only param provided
            }
            else if (definedValues.length === 1) {
                template += "" + substitutions[i];
            }
        }
        else if (substitutions[i]) {
            template += substitutions[i] + " ";
        }
    }
    return template.trim();
}
exports.default = constructGradientValue;
