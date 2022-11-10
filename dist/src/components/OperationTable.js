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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var utilFunctions_1 = require("../util/utilFunctions");
var MetricContainer_1 = require("./MetricContainer");
var date_fns_1 = require("date-fns");
var OperationTable = function () {
    // Grab context values passed from MetricContainer
    var _a = (0, react_1.useContext)(MetricContainer_1.ChartContext), historyLogs = _a.historyLogs, setOperation = _a.setOperation, metricsData = _a.metricsData, setMetricsData = _a.setMetricsData;
    var _b = (0, react_1.useState)('operation_name'), sortKey = _b[0], setSortKey = _b[1];
    var _c = (0, react_1.useState)('ascn'), sortOrder = _c[0], setSortOrder = _c[1];
    // Headers for operation table
    var headers = [
        { key: 'id', label: 'ID' },
        { key: 'operation_name', label: 'Operation Name' },
        { key: 'req_count', label: 'Request Count' },
        // { key: 'avg_res_size', label: 'Avg Response Size' },
        { key: 'avg_res_time', label: 'Avg Response Time (ms)' },
        { key: 'error_count', label: 'Error Count' },
    ];
    // Total execution time of each operation
    var totalResTime = historyLogs.reduce(function (obj, query) {
        var operationName = query.operation_name;
        if (!obj[operationName])
            obj[operationName] = 0;
        obj[operationName] += query.execution_time;
        return obj;
    }, {});
    // Total request counts of each operation
    var operationReqCount = historyLogs.reduce(function (obj, query) {
        var operationName = query.operation_name;
        if (!obj[operationName])
            obj[operationName] = 0;
        obj[operationName] += 1;
        return obj;
    }, {});
    // Total error count of each operation
    var operationErrorCount = historyLogs.reduce(function (obj, query) {
        var operationName = query.operation_name;
        if (!obj[operationName])
            obj[operationName] = 0;
        if (query.success === false) {
            obj[operationName]++;
        }
        return obj;
    }, {});
    // console.log(operationErrorCount);
    // An array of all operation with total request counts and average response time
    var operationLog = Object.keys(operationReqCount).map(function (operationName, index) {
        var reqCount = operationReqCount[operationName];
        var averageResTime = totalResTime[operationName] / reqCount;
        return {
            id: index + 1,
            operation_name: operationName,
            req_count: reqCount,
            avg_res_time: Math.round(averageResTime),
            error_count: operationErrorCount[operationName]
        };
    });
    // Return sorted data base on sortKey
    var sortData = (0, react_1.useCallback)(function () {
        if (!sortKey)
            return operationLog;
        var sortedData = operationLog.sort(function (a, b) {
            if (sortKey === 'operation_name') {
                return a[sortKey] > b[sortKey] ? 1 : -1;
            }
            return Number(a[sortKey]) > Number(b[sortKey]) ? 1 : -1;
        });
        if (sortOrder === 'desc')
            return sortedData.reverse();
        return sortedData;
    }, [operationLog, sortKey, sortOrder]);
    // Sort data in ascending/descending order
    var changeSort = function (key) {
        setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');
        setSortKey(key);
    };
    // Event handler to show metrics(chart, query, visualization) when operation is clicked
    var handleShowMetrics = function (query) {
        setOperation(query.operation_name);
        // Metrics Data for chart
        // x-axis is time
        // y-axis is execution_time
        // Filter to get only the current operation in state
        var operationMetrics = historyLogs.filter(function (log) { return log.operation_name === query.operation_name; });
        // Construct data to display in chart
        var dataSet = operationMetrics.map(function (query) {
            var queryDate = new Date(parseInt(query['created_at']));
            var formatDate = (0, date_fns_1.format)(queryDate, 'MMM dd yyyy HH:mm:ss');
            return {
                x: formatDate,
                y: query.execution_time
            };
        });
        // update state for metricsData to display chart accordingly
        setMetricsData({
            datasets: [{
                    label: 'Response Time',
                    data: dataSet,
                    backgroundColor: operationMetrics.map(function (data) { return (0, utilFunctions_1.randomBgColor)(); }),
                    borderWidth: 1,
                    barThickness: 30,
                }],
        });
    };
    return (react_1.default.createElement("table", null,
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null, headers.map(function (header) {
                return (react_1.default.createElement("td", { key: header.key },
                    header.label,
                    react_1.default.createElement("button", { onClick: function () { return changeSort(header.key); }, className: "".concat(sortKey === header.key && sortOrder === 'desc' ? 'sort-btn sort-reverse' : 'sort-btn') }, "\u25B2")));
            }))),
        react_1.default.createElement("tbody", null, sortData().map(function (query) {
            return (react_1.default.createElement("tr", { key: query.id, onClick: function () { return handleShowMetrics(query); } },
                react_1.default.createElement("td", null, query.id),
                react_1.default.createElement("td", null, query.operation_name),
                react_1.default.createElement("td", null, query.req_count),
                react_1.default.createElement("td", null, query.avg_res_time),
                react_1.default.createElement("td", null, query.error_count)));
        }))));
};
exports.default = OperationTable;
//# sourceMappingURL=OperationTable.js.map