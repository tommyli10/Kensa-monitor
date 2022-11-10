"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = require("@apollo/client");
var react_2 = require("@chakra-ui/react");
var date_fns_1 = require("date-fns");
var tb_1 = require("react-icons/tb");
// import { MdDelete } from 'react-icons/md';
var ti_1 = require("react-icons/ti");
var HistoryLogDev = function (_a) {
    var selectedProjectId = _a.selectedProjectId;
    if (selectedProjectId === '') {
        return null;
    }
    var GET_PROJECT = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query GetProject($projectId: ID!) {\n      project(id : $projectId) {\n        history_log_dev {\n          id\n          operation_name\n          execution_time\n          created_at\n          success\n        }\n      }\n    }\n  "], ["\n    query GetProject($projectId: ID!) {\n      project(id : $projectId) {\n        history_log_dev {\n          id\n          operation_name\n          execution_time\n          created_at\n          success\n        }\n      }\n    }\n  "])));
    // Mutation query to delete all resolvers associated with an operation in Dev mode
    // User can delete by clicking on an operation in Logs table
    var DELETE_RESOLVERS_DEV = (0, client_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    mutation DeleteResolversDev($operationDevId: ID!) {\n      deleteOperationResolverLogs(id: $operationDevId) {\n        id\n        resolver_name\n        execution_time\n        success\n      }\n    }\n  "], ["\n    mutation DeleteResolversDev($operationDevId: ID!) {\n      deleteOperationResolverLogs(id: $operationDevId) {\n        id\n        resolver_name\n        execution_time\n        success\n      }\n    }\n  "])));
    var _b = (0, client_1.useQuery)(GET_PROJECT, {
        variables: {
            projectId: selectedProjectId
        },
    }), loading = _b.loading, error = _b.error, data = _b.data, refetch = _b.refetch;
    var deleteOperationDev = (0, client_1.useMutation)(DELETE_RESOLVERS_DEV, {
        // Refetch GET_PROJECT after delete an operation in the table
        refetchQueries: [{ query: GET_PROJECT, variables: { projectId: selectedProjectId } }]
    })[0];
    if (loading) {
        return (react_1.default.createElement(react_2.Center, { w: '100%', h: '100%' },
            react_1.default.createElement(react_2.Spinner, { size: 'xl', className: 'spinner' })));
    }
    if (error) {
        return (react_1.default.createElement(react_2.Center, { w: '100%', h: '100%' },
            react_1.default.createElement(react_2.Alert, { status: 'error', h: '100px', w: '50%', borderRadius: '10px', id: 'log-dev-alert' },
                react_1.default.createElement(react_2.AlertIcon, null),
                "There was an error processing your request")));
    }
    var headers = [
        { label: 'Query #' },
        { label: 'Operation Name' },
        { label: 'Time (ms)' },
        { label: 'Time Sent' },
        { label: 'Error' }
    ];
    var handleDeleteOperationDev = function (operationId) {
        console.log('delete operation', operationId);
        deleteOperationDev({
            variables: {
                operationDevId: operationId
            }
        });
    };
    return (react_1.default.createElement(react_2.Box, null,
        react_1.default.createElement(react_2.Flex, { justifyContent: 'flex-end', marginBottom: '10px' },
            react_1.default.createElement(react_2.Box, { onClick: function () { return refetch({ projectId: selectedProjectId }); }, _hover: { cursor: 'pointer' }, fontSize: '1.5rem' },
                react_1.default.createElement(tb_1.TbRefresh, null))),
        react_1.default.createElement(react_2.Box, { id: "log-dev" },
            react_1.default.createElement("table", null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        headers.map(function (header, i) {
                            return (react_1.default.createElement("td", { key: i }, header.label));
                        }),
                        react_1.default.createElement("td", null))),
                react_1.default.createElement("tbody", null, data.project['history_log_dev'].map(function (query, index) {
                    var queryDate = new Date(parseInt(query['created_at']));
                    var formatDate = (0, date_fns_1.format)(queryDate, 'MMM dd yyyy HH:mm:ss');
                    return (react_1.default.createElement("tr", { key: query.id },
                        react_1.default.createElement("td", null, index + 1),
                        react_1.default.createElement("td", null, query.operation_name),
                        react_1.default.createElement("td", null, query.execution_time),
                        react_1.default.createElement("td", null, formatDate),
                        react_1.default.createElement("td", null, query.success ? 'No' : 'Yes'),
                        react_1.default.createElement("td", { onClick: function () { return handleDeleteOperationDev(query.id); }, id: 'delete-btn' },
                            react_1.default.createElement(react_2.Flex, { justifyContent: 'center' },
                                react_1.default.createElement(ti_1.TiDelete, null)))));
                }))))));
};
exports.default = HistoryLogDev;
var templateObject_1, templateObject_2;
//# sourceMappingURL=HistoryLogDev.js.map