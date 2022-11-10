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
var MetricContainer_1 = __importDefault(require("./MetricContainer"));
var ProjectInfo_1 = __importDefault(require("./ProjectInfo"));
var react_2 = require("@chakra-ui/react");
var bs_1 = require("react-icons/bs");
var tb_1 = require("react-icons/tb");
var App_1 = require("./App");
var darkTheme_1 = require("../theme/darkTheme");
var react_redux_1 = require("react-redux");
var Monitor = function () {
    var theme = (0, react_1.useContext)(App_1.ThemeContext).theme;
    var username = (0, react_router_dom_1.useParams)().username;
    // Project name nad URL state for editing in ProjectInfo
    var _a = (0, react_1.useState)(''), projectName = _a[0], setProjectName = _a[1];
    var _b = (0, react_1.useState)(''), projectURL = _b[0], setProjectURL = _b[1];
    var projectId;
    var user = (0, react_redux_1.useSelector)(function (state) { return state.auth.user; });
    if (user.currentProjectId !== '0') {
        projectId = user.currentProjectId;
        localStorage.setItem('projectId', projectId);
    }
    else {
        projectId = localStorage.getItem('projectId');
    }
    var GET_PROJECT_DATA = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query GetProjectData($projectId: ID!) {\n      project(id: $projectId) {\n        project_name\n        server_url\n        api_key\n        history_log {\n          id\n          operation_name\n          query_string\n          execution_time\n          created_at\n          success\n        }\n      }\n    }\n  "], ["\n    query GetProjectData($projectId: ID!) {\n      project(id: $projectId) {\n        project_name\n        server_url\n        api_key\n        history_log {\n          id\n          operation_name\n          query_string\n          execution_time\n          created_at\n          success\n        }\n      }\n    }\n  "])));
    var _c = (0, client_1.useQuery)(GET_PROJECT_DATA, {
        variables: {
            projectId: projectId
        },
        onCompleted: function () {
            setProjectName(data.project['project_name']);
            setProjectURL(data.project['server_url']);
        },
        fetchPolicy: 'network-only',
        notifyOnNetworkStatusChange: true,
        // pollInterval: 10000,  // polling every 10 seconds
    }), loading = _c.loading, error = _c.error, data = _c.data, refetch = _c.refetch, networkStatus = _c.networkStatus;
    // This is needed to ensure GraphQL loading state updates accordingly
    // It also render Spinner to indicate that we're refetching data
    if (networkStatus === client_1.NetworkStatus.refetch || loading) {
        return (react_1.default.createElement(react_2.Center, { w: '100%', h: '100%' },
            react_1.default.createElement(react_2.Spinner, { size: 'xl', className: 'spinner' })));
    }
    if (error) {
        return (react_1.default.createElement(react_2.Center, { w: '100%', h: '100%' },
            react_1.default.createElement(react_2.Alert, { status: 'error', h: '100px', w: '50%', borderRadius: '10px', className: 'alert' },
                react_1.default.createElement(react_2.AlertIcon, null),
                "There was an error processing your request")));
    }
    return (react_1.default.createElement(react_2.Stack, { direction: 'column', p: '20px', id: 'monitor' },
        react_1.default.createElement(react_2.Flex, { direction: 'row', gap: '20px', alignItems: 'center', marginBottom: '25px' },
            react_1.default.createElement(react_2.Flex, { gap: 4, alignItems: 'center' },
                react_1.default.createElement(react_2.Flex, { alignItems: 'center', w: '30px' },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/user/".concat(username) },
                        react_1.default.createElement(react_2.Icon, { as: bs_1.BsFillArrowLeftCircleFill, fontSize: '1.3rem' }))),
                react_1.default.createElement(react_2.Heading, { size: 'md' },
                    "Project Name: ",
                    projectName)),
            react_1.default.createElement(react_2.Flex, { gap: 4, alignItems: 'center' },
                react_1.default.createElement(react_2.Popover, null,
                    react_1.default.createElement(react_2.PopoverTrigger, null,
                        react_1.default.createElement(react_2.Button, { w: '50px', h: '30px', color: theme === 'dark' ? 'black' : 'white', colorScheme: theme === 'light' ? 'facebook' : 'gray' }, "Info")),
                    react_1.default.createElement(react_2.PopoverContent, { style: theme === 'dark' && darkTheme_1.darkTheme },
                        react_1.default.createElement(react_2.PopoverArrow, null),
                        react_1.default.createElement(react_2.PopoverCloseButton, null),
                        react_1.default.createElement(react_2.PopoverHeader, null,
                            react_1.default.createElement(react_2.Heading, { size: 'xs' }, "Project Info")),
                        react_1.default.createElement(react_2.PopoverBody, null,
                            react_1.default.createElement(ProjectInfo_1.default, { projectId: projectId, projectName: projectName, setProjectName: setProjectName, projectURL: projectURL, setProjectURL: setProjectURL, apiKey: data.project['api_key'] })))),
                react_1.default.createElement(react_2.Box, { onClick: function () { return refetch({ projectId: projectId }); }, _hover: { cursor: 'pointer' }, fontSize: '1.5rem' },
                    react_1.default.createElement(tb_1.TbRefresh, null)))),
        react_1.default.createElement(MetricContainer_1.default, { historyLogs: data.project['history_log'] })));
};
exports.default = Monitor;
var templateObject_1;
//# sourceMappingURL=Monitor.js.map