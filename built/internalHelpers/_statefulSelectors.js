"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var _errors_1 = require("./_errors");
function generateSelectors(template, state) {
    var stateSuffix = state ? ":" + state : '';
    return template(stateSuffix);
}
/**
 * Function helper that adds an array of states to a template of selectors. Used in textInputs and buttons.
 * @private
 */
function statefulSelectors(states, template, stateMap) {
    if (!template)
        throw new _errors_1.default(67);
    if (states.length === 0)
        return generateSelectors(template, null);
    var selectors = [];
    for (var i = 0; i < states.length; i += 1) {
        if (stateMap && stateMap.indexOf(states[i]) < 0) {
            throw new _errors_1.default(68);
        }
        selectors.push(generateSelectors(template, states[i]));
    }
    selectors = selectors.join(',');
    return selectors;
}
exports.default = statefulSelectors;
