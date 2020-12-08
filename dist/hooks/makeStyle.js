"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStyle = void 0;
var react_native_1 = require("react-native");
var useTheme_1 = __importDefault(require("./useTheme"));
var makeStyle = function (applyTheme) { return function () {
    var theme = useTheme_1.default().theme;
    var styles = applyTheme(theme);
    return react_native_1.StyleSheet.create(styles);
}; };
exports.makeStyle = makeStyle;
exports.default = exports.makeStyle;
