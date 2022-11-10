"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = void 0;
var react_1 = __importStar(require("react"));
var MainContainer_1 = __importDefault(require("./MainContainer"));
var react_2 = require("@chakra-ui/react");
exports.ThemeContext = (0, react_1.createContext)(null);
function App() {
    // Get previous chosen theme in localStorage and store in state
    var prevTheme = localStorage.getItem('theme');
    var _a = (0, react_1.useState)(prevTheme ? prevTheme : 'light'), theme = _a[0], setTheme = _a[1];
    var toggleTheme = function () {
        setTheme(function (prevState) { return prevState === 'light' ? 'dark' : 'light'; });
    };
    // Save theme to localStorage to preserve previously chosen theme
    localStorage.setItem('theme', theme);
    return (react_1.default.createElement(exports.ThemeContext.Provider, { value: { theme: theme, toggleTheme: toggleTheme } },
        react_1.default.createElement(react_2.Box, { bgColor: 'rgb(249, 250, 251)', id: theme },
            react_1.default.createElement(MainContainer_1.default, null))));
}
exports.default = App;
//# sourceMappingURL=App.js.map