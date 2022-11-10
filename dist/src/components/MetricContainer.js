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
exports.ChartContext = void 0;
var react_1 = __importStar(require("react"));
// import HistoryLog from "./HistoryLog";
var OperationTable_1 = __importDefault(require("./OperationTable"));
var react_2 = require("@chakra-ui/react");
var ChartContainer_1 = __importDefault(require("./ChartContainer"));
// Create ChartContext for historyLogs and pass down to all descendants
exports.ChartContext = (0, react_1.createContext)(null);
// OperationTable on the left side
// When click on operation name, show ChartContainer on the right side
// ChartContainer has 3 tabs (chart, query, visualize)
var MetricContainer = function (_a) {
    var historyLogs = _a.historyLogs;
    var _b = (0, react_1.useState)(''), operation = _b[0], setOperation = _b[1];
    var _c = (0, react_1.useState)({}), metricsData = _c[0], setMetricsData = _c[1];
    return (react_1.default.createElement(exports.ChartContext.Provider, { value: { historyLogs: historyLogs, operation: operation, setOperation: setOperation, metricsData: metricsData, setMetricsData: setMetricsData } },
        react_1.default.createElement(react_2.Flex, { mt: '20px', gap: '30px' },
            react_1.default.createElement(react_2.Box, { flex: '1' },
                react_1.default.createElement(OperationTable_1.default, null)),
            react_1.default.createElement(react_2.Box, { flex: '1' }, operation !== '' && react_1.default.createElement(ChartContainer_1.default, null)))));
};
exports.default = MetricContainer;
//# sourceMappingURL=MetricContainer.js.map