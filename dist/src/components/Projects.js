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
var react_router_dom_1 = require("react-router-dom");
var client_1 = require("@apollo/client");
var ProjectCard_1 = __importDefault(require("./ProjectCard"));
var react_2 = require("@chakra-ui/react");
var react_3 = require("@chakra-ui/react");
var react_4 = require("@chakra-ui/react");
var AddProject_1 = __importDefault(require("./AddProject"));
var react_redux_1 = require("react-redux");
var authSlice_1 = require("../features/auth/authSlice");
var App_1 = require("./App");
var Projects = function () {
    var theme = (0, react_1.useContext)(App_1.ThemeContext).theme;
    var dispatch = (0, react_redux_1.useDispatch)();
    // params username in URL route
    var username = (0, react_router_dom_1.useParams)().username;
    // Log user in if they are already signed in
    var user = JSON.parse(localStorage.getItem('user'));
    (0, react_1.useEffect)(function () {
        if (user) {
            dispatch((0, authSlice_1.login)(user));
        }
    }, [user]);
    // Prevent user from accessing Project by modifying URL params
    if (!user || username !== user.username) {
        return (react_1.default.createElement(react_3.Center, { w: '100%', h: '100%' },
            react_1.default.createElement(react_3.Alert, { status: 'error', h: '100px', w: '50%', borderRadius: '10px', className: 'alert' },
                react_1.default.createElement(react_3.AlertIcon, null),
                "Please login. You do not have access to this page")));
    }
    // Chakra Modal
    var _a = (0, react_4.useDisclosure)(), isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    var GET_USER_PROJECT = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query GetUserProject($userName: String!) {\n      username(username: $userName) {\n        id\n        username\n        projects {\n          id\n          project_name\n          api_key       \n        }\n      }\n    }\n  "], ["\n    query GetUserProject($userName: String!) {\n      username(username: $userName) {\n        id\n        username\n        projects {\n          id\n          project_name\n          api_key       \n        }\n      }\n    }\n  "])));
    var _b = (0, client_1.useQuery)(GET_USER_PROJECT, {
        variables: {
            userName: user.username
        },
        // by default, useQuery hook check Apollo Client cache to see if it is available locally. This is needed to make sure we have newly updated project rendered after adding a project
        fetchPolicy: 'network-only', // Doesn't check cache before making a network request
    }), error = _b.error, data = _b.data, loading = _b.loading, refetch = _b.refetch;
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
    var projectCards = [];
    var _loop_1 = function (i) {
        var projectName = projects[i]["project_name"];
        var projectId = projects[i]["id"];
        var apiKey = projects[i]["api_key"];
        projectCards.push(react_1.default.createElement(react_2.GridItem, { key: i, className: 'projects-grid-item', onClick: function () {
                // dispatch action to update currentProject in Redux store
                dispatch((0, authSlice_1.updateCurrentProjectId)(projectId));
                // save projectId to localStorage to persist data when refreshing
                localStorage.setItem('projectId', projectId);
            } },
            react_1.default.createElement(ProjectCard_1.default, { projectName: projectName, projectId: projectId })));
    };
    for (var i = 0; i < projects.length; i++) {
        _loop_1(i);
    }
    return (react_1.default.createElement(react_3.Box, { w: '100%', h: '100%', p: 5 },
        react_1.default.createElement(react_3.Flex, { align: 'center', justify: 'flex-end', marginBottom: '30px' },
            react_1.default.createElement(react_3.Heading, { id: 'welcome' },
                "Welcome back, ",
                data.username.username),
            react_1.default.createElement(react_3.Spacer, null),
            react_1.default.createElement(react_3.Button, { onClick: onOpen, colorScheme: theme === 'light' ? 'facebook' : 'gray' }, "New Project")),
        react_1.default.createElement(AddProject_1.default, { isOpen: isOpen, onClose: onClose, userId: data.username.id }),
        react_1.default.createElement(react_2.Grid, { id: 'projects-grid-container' }, projectCards)));
};
exports.default = Projects;
var templateObject_1;
//# sourceMappingURL=Projects.js.map