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
var react_2 = require("@chakra-ui/react");
var react_3 = require("@chakra-ui/react");
var HistoryLogDev_1 = __importDefault(require("./HistoryLogDev"));
var CodeEditor_1 = __importDefault(require("./CodeEditor"));
var PlaygroudQueryResponse_1 = __importDefault(require("./PlaygroudQueryResponse"));
var PlaygroundTreeVis_1 = __importDefault(require("./PlaygroundTreeVis"));
var PlaygroundContainer = function () {
    var _a = (0, react_1.useState)(''), resData = _a[0], setResData = _a[1];
    var _b = (0, react_1.useState)(''), query = _b[0], setQuery = _b[1];
    var _c = (0, react_1.useState)(''), selectedProjectId = _c[0], setSelectedProjectId = _c[1];
    var _d = (0, react_1.useState)(''), operationId = _d[0], setOperationId = _d[1];
    var user = JSON.parse(localStorage.getItem('user'));
    var GET_USER_PROJECT = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query GetUserProject($userName: String!) {\n      username(username: $userName) {\n        username\n        projects {\n          id\n          project_name\n          server_url\n        }\n      }\n    }\n  "], ["\n    query GetUserProject($userName: String!) {\n      username(username: $userName) {\n        username\n        projects {\n          id\n          project_name\n          server_url\n        }\n      }\n    }\n  "])));
    var _e = (0, client_1.useQuery)(GET_USER_PROJECT, {
        variables: {
            userName: user.username
        }
    }), error = _e.error, data = _e.data, loading = _e.loading;
    if (loading) {
        return (react_1.default.createElement(react_3.Center, { w: '100%', h: '100%' },
            react_1.default.createElement(react_3.Spinner, { size: 'xl', className: 'spinner' })));
    }
    if (error) {
        return (react_1.default.createElement(react_3.Center, { w: '100%', h: '100%' },
            react_1.default.createElement(react_3.Alert, { status: 'error', h: '100px', w: '50%', borderRadius: '10px', className: 'alert' },
                react_1.default.createElement(react_3.AlertIcon, null),
                "There was an error processing your request")));
    }
    var projects = data.username.projects;
    return (react_1.default.createElement(react_2.Stack, { direction: 'column', p: '20px', id: 'playground-container' },
        react_1.default.createElement(react_2.Flex, { direction: 'row', justifyContent: 'space-between' },
            react_1.default.createElement(react_2.Heading, { size: 'md', marginBottom: 1 }, "Development Playground"),
            react_1.default.createElement(react_2.Select, { w: '400px', placeholder: 'Select Project', onChange: function (e) { return setSelectedProjectId(e.target.value); } }, projects.map(function (project) {
                return (react_1.default.createElement("option", { key: project.id, value: project.id }, project.project_name));
            }))),
        react_1.default.createElement(react_2.Flex, { direction: 'row', id: 'playground' },
            react_1.default.createElement(react_2.Flex, { direction: 'column', gap: '40px', id: 'playground-left' },
                react_1.default.createElement(CodeEditor_1.default, { setResData: setResData, selectedProjectId: selectedProjectId, query: query, setQuery: setQuery }),
                react_1.default.createElement(PlaygroudQueryResponse_1.default, { resData: resData })),
            react_1.default.createElement(react_2.Flex, { id: 'plaground-right', w: '100%' },
                react_1.default.createElement(react_2.Tabs, { w: '100%' },
                    react_1.default.createElement(react_2.TabList, null,
                        react_1.default.createElement(react_2.Tab, { fontWeight: 'bold' }, "Logs"),
                        react_1.default.createElement(react_2.Tab, { fontWeight: 'bold' }, "Query Visualizer")),
                    react_1.default.createElement(react_2.TabPanels, { w: '100%', h: '100%' },
                        react_1.default.createElement(react_2.TabPanel, { h: '100%' },
                            react_1.default.createElement(HistoryLogDev_1.default, { selectedProjectId: selectedProjectId })),
                        react_1.default.createElement(react_2.TabPanel, null,
                            react_1.default.createElement(PlaygroundTreeVis_1.default, { resData: resData, query: query }))))))));
};
exports.default = PlaygroundContainer;
var templateObject_1;
//# sourceMappingURL=PlaygroundContainer.js.map