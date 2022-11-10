"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
var Chart_1 = __importDefault(require("./Chart"));
var Query_1 = __importDefault(require("./Query"));
var QueryTree_1 = __importDefault(require("./QueryTree"));
// Render all info related to operation
var ChartContainer = function () {
    return (react_2.default.createElement(react_1.Box, { w: '100%', id: 'chart-container' },
        react_2.default.createElement(react_1.Tabs, null,
            react_2.default.createElement(react_1.TabList, null,
                react_2.default.createElement(react_1.Tab, { fontWeight: 'bold' }, "Chart"),
                react_2.default.createElement(react_1.Tab, { fontWeight: 'bold' }, "Query"),
                react_2.default.createElement(react_1.Tab, { fontWeight: 'bold' }, "Query Visualizer")),
            react_2.default.createElement(react_1.TabPanels, null,
                react_2.default.createElement(react_1.TabPanel, null,
                    react_2.default.createElement(Chart_1.default, null)),
                react_2.default.createElement(react_1.TabPanel, null,
                    react_2.default.createElement(Query_1.default, null)),
                react_2.default.createElement(react_1.TabPanel, null,
                    react_2.default.createElement(QueryTree_1.default, null))))));
};
exports.default = ChartContainer;
//# sourceMappingURL=ChartContainer.js.map