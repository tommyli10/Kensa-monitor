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
var react_1 = __importStar(require("react"));
var react_2 = __importDefault(require("@monaco-editor/react"));
var App_1 = require("./App");
var react_3 = require("@chakra-ui/react");
var PlaygroudQueryResponse = function (_a) {
    var resData = _a.resData;
    var theme = (0, react_1.useContext)(App_1.ThemeContext).theme;
    var editorRef = (0, react_1.useRef)(null);
    // Display new value in editor when resData changes
    (0, react_1.useEffect)(function () {
        if (editorRef.current) {
            editorRef.current.setValue(resData);
        }
    }, [resData]);
    // Save editor instance to editorRef.current after editor is mounted
    var handleEditorDidMount = function (editor) {
        editorRef.current = editor;
    };
    return (react_1.default.createElement(react_3.Box, null,
        react_1.default.createElement(react_3.Heading, { size: 'sm' }, "Response"),
        react_1.default.createElement(react_3.Box, { className: 'playground-items' },
            react_1.default.createElement(react_2.default, { height: '250px', width: '500px', theme: theme === 'dark' ? 'vs-dark' : '', defaultLanguage: 'graphql', defaultValue: '// response', onMount: handleEditorDidMount, options: {
                    readOnly: true,
                    bracketPairColorization: { enabled: true }
                } }))));
};
exports.default = PlaygroudQueryResponse;
//# sourceMappingURL=PlaygroudQueryResponse.js.map