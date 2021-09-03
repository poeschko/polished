"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var normalize_1 = require("../normalize");
describe('normalize', function () {
    it('should return rules', function () {
        var _a;
        expect((0, normalize_1.default)()).toEqual([
            (_a = {
                    '::-webkit-file-upload-button': {
                        WebkitAppearance: 'button',
                        font: 'inherit',
                    },
                    '[hidden]': {
                        display: 'none',
                    }
                },
                _a["[type=\"checkbox\"],\n    [type=\"radio\"]"] = {
                    boxSizing: 'border-box',
                    padding: '0',
                },
                _a["[type=\"number\"]::-webkit-inner-spin-button,\n    [type=\"number\"]::-webkit-outer-spin-button"] = {
                    height: 'auto',
                },
                _a['[type="search"]'] = {
                    WebkitAppearance: 'textfield',
                    outlineOffset: '-2px',
                },
                _a['[type="search"]::-webkit-search-decoration'] = {
                    WebkitAppearance: 'none',
                },
                _a.a = {
                    backgroundColor: 'transparent',
                },
                _a['abbr[title]'] = {
                    borderBottom: 'none',
                    textDecoration: 'underline',
                },
                _a["b,\n    strong"] = {
                    fontWeight: 'bolder',
                },
                _a.body = {
                    margin: '0',
                },
                _a["button,\n    html [type=\"button\"],\n    [type=\"reset\"],\n    [type=\"submit\"]"] = {
                    WebkitAppearance: 'button',
                },
                _a["button,\n    input"] = {
                    overflow: 'visible',
                },
                _a["button,\n    input,\n    optgroup,\n    select,\n    textarea"] = {
                    fontFamily: 'inherit',
                    fontSize: '100%',
                    lineHeight: '1.15',
                    margin: '0',
                },
                _a["button,\n    select"] = {
                    textTransform: 'none',
                },
                _a["button:-moz-focusring,\n    [type=\"button\"]:-moz-focusring,\n    [type=\"reset\"]:-moz-focusring,\n    [type=\"submit\"]:-moz-focusring"] = {
                    outline: '1px dotted ButtonText',
                },
                _a["button::-moz-focus-inner,\n    [type=\"button\"]::-moz-focus-inner,\n    [type=\"reset\"]::-moz-focus-inner,\n    [type=\"submit\"]::-moz-focus-inner"] = {
                    borderStyle: 'none',
                    padding: '0',
                },
                _a["code,\n    kbd,\n    samp"] = {
                    fontFamily: 'monospace, monospace',
                    fontSize: '1em',
                },
                _a.details = {
                    display: 'block',
                },
                _a.fieldset = {
                    padding: '0.35em 0.625em 0.75em',
                },
                _a.h1 = {
                    fontSize: '2em',
                    margin: '0.67em 0',
                },
                _a.hr = {
                    boxSizing: 'content-box',
                    height: '0',
                    overflow: 'visible',
                },
                _a.html = {
                    lineHeight: '1.15',
                    textSizeAdjust: '100%',
                },
                _a.img = {
                    borderStyle: 'none',
                },
                _a.legend = {
                    boxSizing: 'border-box',
                    color: 'inherit',
                    display: 'table',
                    maxWidth: '100%',
                    padding: '0',
                    whiteSpace: 'normal',
                },
                _a.main = {
                    display: 'block',
                },
                _a.pre = {
                    fontFamily: 'monospace, monospace',
                    fontSize: '1em',
                },
                _a.progress = {
                    verticalAlign: 'baseline',
                },
                _a.small = {
                    fontSize: '80%',
                },
                _a.sub = {
                    bottom: '-0.25em',
                },
                _a["sub,\n    sup"] = {
                    fontSize: '75%',
                    lineHeight: '0',
                    position: 'relative',
                    verticalAlign: 'baseline',
                },
                _a.summary = {
                    display: 'list-item',
                },
                _a.sup = {
                    top: '-0.5em',
                },
                _a.template = {
                    display: 'none',
                },
                _a.textarea = {
                    overflow: 'auto',
                },
                _a),
            {
                'abbr[title]': {
                    textDecoration: 'underline dotted',
                },
            },
        ]);
    });
});
