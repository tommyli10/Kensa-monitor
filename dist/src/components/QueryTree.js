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
var react_1 = __importStar(require("react"));
var MetricContainer_1 = require("./MetricContainer");
var react_d3_tree_1 = __importDefault(require("react-d3-tree"));
var utilFunctions_1 = require("../util/utilFunctions");
var QueryTree = function () {
    var _a = (0, react_1.useContext)(MetricContainer_1.ChartContext), operation = _a.operation, historyLogs = _a.historyLogs;
    var queryString = historyLogs.find(function (log) { return log.operation_name === operation; }).query_string;
    // Transform query string into a structure suitable for D3 Tree
    var objQuery = (0, utilFunctions_1.queryTransform)(queryString);
    return (react_1.default.createElement("div", { id: "treeWrapper-1", style: { width: '30em', height: '30em' } },
        react_1.default.createElement(react_d3_tree_1.default, { data: objQuery, zoom: .8, translate: { x: 50, y: 200 }, rootNodeClassName: "node__root", branchNodeClassName: "node__branch", leafNodeClassName: "node__leaf", enableLegacyTransitions: true })));
};
exports.default = QueryTree;
//# sourceMappingURL=QueryTree.js.map