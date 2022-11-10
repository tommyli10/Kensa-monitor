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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var client_1 = require("@apollo/client");
var react_2 = require("@chakra-ui/react");
var App_1 = require("./App");
var ProjectInfo = function (_a) {
    var projectId = _a.projectId, projectName = _a.projectName, projectURL = _a.projectURL, setProjectName = _a.setProjectName, setProjectURL = _a.setProjectURL, apiKey = _a.apiKey;
    var theme = (0, react_1.useContext)(App_1.ThemeContext).theme;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var username = (0, react_router_dom_1.useParams)().username;
    var _b = (0, react_1.useState)(false), isEditting = _b[0], setIsEditting = _b[1];
    var DELETE_PROJECT = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation DeleteHistoryLogs($deleteHistoryLogsId: ID!, \n    $deleteHistoryLogsDevId: ID!, \n    $deleteResolverLogsDevId: ID!, \n    $deleteProjectId: ID!) {\n      deleteHistoryLogs(id: $deleteHistoryLogsId) {\n        id\n      }\n      deleteHistoryLogsDev(id: $deleteHistoryLogsDevId) {\n        id\n      }\n      deleteResolverLogsDev(id: $deleteResolverLogsDevId) {\n        id\n      }\n      deleteProject(id: $deleteProjectId) {\n        id\n        project_name\n      }\n    }\n  "], ["\n    mutation DeleteHistoryLogs($deleteHistoryLogsId: ID!, \n    $deleteHistoryLogsDevId: ID!, \n    $deleteResolverLogsDevId: ID!, \n    $deleteProjectId: ID!) {\n      deleteHistoryLogs(id: $deleteHistoryLogsId) {\n        id\n      }\n      deleteHistoryLogsDev(id: $deleteHistoryLogsDevId) {\n        id\n      }\n      deleteResolverLogsDev(id: $deleteResolverLogsDevId) {\n        id\n      }\n      deleteProject(id: $deleteProjectId) {\n        id\n        project_name\n      }\n    }\n  "])));
    var UPDATE_PROJECT = (0, client_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    mutation UpdateProject($updateProjectId: ID!, $project: ProjectInput!) {\n      updateProject(id: $updateProjectId, project: $project) {\n        id\n        project_name\n        api_key\n        server_url\n      }\n    }\n  "], ["\n    mutation UpdateProject($updateProjectId: ID!, $project: ProjectInput!) {\n      updateProject(id: $updateProjectId, project: $project) {\n        id\n        project_name\n        api_key\n        server_url\n      }\n    }\n  "])));
    var deleteProject = (0, client_1.useMutation)(DELETE_PROJECT, {
        onCompleted: function () {
            navigate("/user/".concat(username));
        }
    })[0];
    var updateProject = (0, client_1.useMutation)(UPDATE_PROJECT, {
        onCompleted: function () {
            setIsEditting(!isEditting);
        }
    })[0];
    var handleDeleteProject = function () {
        deleteProject({
            variables: {
                "deleteResolverLogsDevId": projectId,
                "deleteHistoryLogsDevId": projectId,
                "deleteHistoryLogsId": projectId,
                "deleteProjectId": projectId
            }
        });
    };
    var handleUpdateProject = function () {
        updateProject({
            variables: {
                updateProjectId: projectId,
                project: {
                    project_name: projectName,
                    server_url: projectURL
                }
            }
        });
    };
    if (isEditting) {
        return (react_1.default.createElement(react_2.Flex, { direction: 'column', justifyContent: 'space-between' },
            react_1.default.createElement(react_2.Box, { mb: '5' },
                react_1.default.createElement(react_2.FormControl, { isRequired: true, mb: 5 },
                    react_1.default.createElement(react_2.FormLabel, null, "Name:"),
                    react_1.default.createElement(react_2.Input, { type: 'text', value: projectName, onChange: function (e) { return setProjectName(e.target.value); } })),
                react_1.default.createElement(react_2.FormControl, { isRequired: true, mb: 5 },
                    react_1.default.createElement(react_2.FormLabel, null, "URL:"),
                    react_1.default.createElement(react_2.Input, { type: 'text', value: projectURL, onChange: function (e) { return setProjectURL(e.target.value); } })),
                react_1.default.createElement(react_2.Text, null,
                    react_1.default.createElement("span", { style: { fontWeight: 'bold' } }, "API:"),
                    " ",
                    apiKey)),
            react_1.default.createElement(react_2.Button, { color: theme === 'dark' ? 'black' : 'white', colorScheme: theme === 'light' ? 'facebook' : 'gray', onClick: handleUpdateProject }, "Save")));
    }
    return (react_1.default.createElement(react_2.Flex, { direction: 'column', h: '200px', justifyContent: 'space-around' },
        react_1.default.createElement(react_2.Box, { mb: '5' },
            react_1.default.createElement(react_2.Text, null,
                react_1.default.createElement("span", { style: { fontWeight: 'bold' } }, "Name:"),
                " ",
                projectName),
            react_1.default.createElement(react_2.Text, null,
                react_1.default.createElement("span", { style: { fontWeight: 'bold' } }, "URL:"),
                " ",
                projectURL),
            react_1.default.createElement(react_2.Text, null,
                react_1.default.createElement("span", { style: { fontWeight: 'bold' } }, "API:"),
                " ",
                apiKey)),
        react_1.default.createElement(react_2.Flex, { gap: 5 },
            react_1.default.createElement(react_2.Button, { color: theme === 'dark' ? 'black' : 'white', colorScheme: theme === 'light' ? 'facebook' : 'gray', onClick: function () { return setIsEditting(!isEditting); } }, "Edit"),
            react_1.default.createElement(react_2.Button, { color: theme === 'dark' ? 'black' : 'white', colorScheme: theme === 'light' ? 'facebook' : 'gray', onClick: handleDeleteProject }, "Delete"))));
};
exports.default = ProjectInfo;
var templateObject_1, templateObject_2;
//# sourceMappingURL=ProjectInfo.js.map