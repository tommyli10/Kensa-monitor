"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var client_1 = require("@apollo/client");
var react_2 = __importDefault(require("@monaco-editor/react"));
var react_3 = require("@chakra-ui/react");
var bs_1 = require("react-icons/bs");
var App_1 = require("./App");
var CodeEditor = function (_a) {
    var setResData = _a.setResData, selectedProjectId = _a.selectedProjectId, query = _a.query, setQuery = _a.setQuery;
    var theme = (0, react_1.useContext)(App_1.ThemeContext).theme;
    // const [query, setQuery] = useState<string>('');
    var _b = (0, react_1.useState)(''), invalidQueryMessage = _b[0], setInvalidQueryMessage = _b[1];
    var GET_PROJECT = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query GetProject($projectId: ID!) {\n      project(id: $projectId) {\n        server_url\n      }\n    }\n  "], ["\n    query GetProject($projectId: ID!) {\n      project(id: $projectId) {\n        server_url\n      }\n    }\n  "])));
    // const GET_RESOLVERS = gql`
    // `;
    var _c = (0, client_1.useQuery)(GET_PROJECT, {
        variables: {
            projectId: selectedProjectId
        }
    }), loading = _c.loading, error = _c.error, data = _c.data;
    var handleEditorChange = function (value, event) {
        var i = 6;
        while (value[i] === ' ' && i < value.length) {
            i++;
        }
        if (value[i] === '{')
            value = "".concat(value.slice(0, 6), "DefaultName ").concat(value.slice(i));
        setQuery(value);
    };
    var handleQuerySubmit = function () {
        var serverUrl = data.project.server_url;
        // Attach http to URL if it doesn't have it
        if (!serverUrl.startsWith('http://')) {
            serverUrl = "http://".concat(serverUrl);
        }
        fetch(serverUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Devmode': 'true'
            },
            body: JSON.stringify({
                query: query
            })
        }).then(function (res) {
            if (res.status !== 200) {
                setInvalidQueryMessage('Invalid query. Please resubmit');
                throw new Error('Invalid query');
            }
            return res.json();
        })
            .then(function (responseData) {
            setInvalidQueryMessage('');
            setResData(JSON.stringify(responseData.data, null, 2));
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    var operationName = query.slice(query.indexOf(' '), query.indexOf('{'));
    return (react_1.default.createElement(react_3.Box, { id: 'code-editor', position: 'relative', pt: '13px' },
        react_1.default.createElement(react_3.Flex, { direction: 'row', alignItems: 'center', gap: 5, marginBottom: '20px' },
            react_1.default.createElement(react_3.Heading, { size: 'sm' }, "Operation"),
            react_1.default.createElement(react_3.Button, { justifyContent: 'center', h: '30px', fontSize: '0.8rem', colorScheme: 'facebook', color: 'white', onClick: handleQuerySubmit },
                react_1.default.createElement(bs_1.BsFillPlayFill, { fontSize: '1rem' }),
                react_1.default.createElement(react_3.Box, { marginLeft: '5px' }, operationName.length > 0 ? operationName : 'Run')),
            invalidQueryMessage && (react_1.default.createElement(react_3.Center, { id: 'playground-error-message' }, invalidQueryMessage))),
        react_1.default.createElement(react_3.Box, { className: 'playground-items' },
            react_1.default.createElement(react_2.default, { onChange: handleEditorChange, height: '250px', width: '500px', theme: theme === 'dark' ? 'vs-dark' : '', defaultLanguage: 'graphql', defaultValue: '// type your query here' }))));
};
exports.default = CodeEditor;
var templateObject_1;
//# sourceMappingURL=CodeEditor.js.map