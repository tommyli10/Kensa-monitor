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
var react_chartjs_2_1 = require("react-chartjs-2");
var chart_js_1 = require("chart.js");
var MetricContainer_1 = require("./MetricContainer");
var react_2 = require("@chakra-ui/react");
chart_js_1.Chart.register.apply(chart_js_1.Chart, chart_js_1.registerables); // Need this in order for chartjs2 to work with React
var locale_1 = require("date-fns/locale");
require("chartjs-adapter-date-fns");
var Chart = function () {
    var _a = (0, react_1.useContext)(MetricContainer_1.ChartContext), operation = _a.operation, metricsData = _a.metricsData;
    var chartConfig = {
        scales: {
            x: {
                adapters: {
                    date: { locale: locale_1.enUS }
                },
                // type: 'time',
                time: {
                    unit: 'month'
                },
                title: {
                    display: true,
                    text: 'Date'
                },
            },
            y: {
                title: { display: true, text: 'Response Time' }
            }
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Heading, { size: 'md', marginBottom: '20px' }, operation),
        react_1.default.createElement(react_chartjs_2_1.Bar, { data: metricsData, options: chartConfig })));
};
exports.default = Chart;
//# sourceMappingURL=Chart.js.map