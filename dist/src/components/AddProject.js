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
var uuid_1 = require("uuid");
var react_2 = require("@chakra-ui/react");
var App_1 = require("./App");
var darkTheme_1 = require("../theme/darkTheme");
var react_redux_1 = require("react-redux");
var authSlice_1 = require("../features/auth/authSlice");
var AddProject = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, userId = _a.userId;
    var theme = (0, react_1.useContext)(App_1.ThemeContext).theme;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var dispatch = (0, react_redux_1.useDispatch)();
    // Project name and url state for editing project
    var _b = (0, react_1.useState)(''), projectName = _b[0], setProjectName = _b[1];
    var _c = (0, react_1.useState)(''), projectUrl = _c[0], setProjectUrl = _c[1];
    var toMonitorPage = function (projectId) {
        var path = "monitor/".concat(projectId);
        navigate(path);
    };
    // this mutation string creates a new project in Kensa's database
    var ADD_PROJECT = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation AddProject($project: ProjectInput!) {\n      addProject(project: $project) {\n        id\n        project_name\n      }\n    }\n  "], ["\n    mutation AddProject($project: ProjectInput!) {\n      addProject(project: $project) {\n        id\n        project_name\n      }\n    }\n  "])));
    // custom hook for creating new project using the ADD_PROJECT mustation string above
    var _d = (0, client_1.useMutation)(ADD_PROJECT, {
        onCompleted: function () {
            var projectId = mutationData.addProject.id;
            // Dispatch action to Redux store to update currentprojectId state
            dispatch((0, authSlice_1.updateCurrentProjectId)(projectId));
            toMonitorPage(Number(projectId));
        }
    }), addProject = _d[0], mutationData = _d[1].data;
    var handleCreateProjectForm = function (e) {
        e.preventDefault();
        var apiKey = (0, uuid_1.v4)(); // create new api key (32 characters of alpha and numerics)
        addProject({
            variables: {
                project: {
                    project_name: projectName,
                    api_key: apiKey,
                    server_url: projectUrl,
                    userId: userId
                }
            }
        });
    };
    return (react_1.default.createElement(react_2.Modal, { isOpen: isOpen, onClose: onClose },
        react_1.default.createElement(react_2.ModalOverlay, null),
        react_1.default.createElement(react_2.ModalContent, { id: 'add-project-modal', style: theme === 'dark' && darkTheme_1.darkTheme },
            react_1.default.createElement(react_2.ModalHeader, null, "Add New Project"),
            react_1.default.createElement(react_2.ModalCloseButton, null),
            react_1.default.createElement(react_2.ModalBody, null,
                react_1.default.createElement("form", { onSubmit: handleCreateProjectForm },
                    react_1.default.createElement(react_2.Stack, { spacing: 10, direction: 'column' },
                        react_1.default.createElement(react_2.FormControl, { isRequired: true },
                            react_1.default.createElement(react_2.FormLabel, null, "Project Name"),
                            react_1.default.createElement(react_2.Input, { type: 'text', onChange: function (e) {
                                    var target = e.target;
                                    setProjectName(target.value);
                                } })),
                        react_1.default.createElement(react_2.FormControl, { isRequired: true },
                            react_1.default.createElement(react_2.FormLabel, null, "Default URL"),
                            react_1.default.createElement(react_2.Input, { type: 'text', onChange: function (e) {
                                    var target = e.target;
                                    setProjectUrl(target.value);
                                } })),
                        react_1.default.createElement(react_2.Stack, { direction: 'row', justify: 'end' },
                            react_1.default.createElement(react_2.Button, { color: theme === 'dark' ? 'black' : 'white', colorScheme: theme === 'light' ? 'facebook' : 'gray', mr: 3, onClick: onClose }, "Close"),
                            react_1.default.createElement(react_2.Button, { type: 'submit', color: theme === 'dark' ? 'black' : 'white', colorScheme: theme === 'light' ? 'facebook' : 'gray' }, "Create"))))),
            react_1.default.createElement(react_2.ModalFooter, null))));
};
exports.default = AddProject;
var templateObject_1;
//# sourceMappingURL=AddProject.js.map