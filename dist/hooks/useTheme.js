"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ThemeProvider_1 = require("../contexts/ThemeProvider");
var useTheme = function () {
    var _a = react_1.useContext(ThemeProvider_1.ThemeStateContext), theme = _a.theme, setTheme = _a.setTheme;
    return {
        theme: theme,
        setTheme: setTheme
    };
};
exports.default = useTheme;
