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
var react_d3_tree_1 = __importDefault(require("react-d3-tree"));
var App_1 = require("./App");
var utilFunctions_1 = require("../util/utilFunctions");
var orgChart = {
    name: 'CEO',
    children: [
        {
            name: 'Manager',
            attributes: {
                time: '10m/s',
            },
            children: [
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Fabrication',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Assembly',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
            ],
        },
    ],
};
var styles = {
    nodes: {
        node: {
            circle: {
                fill: '#52e2c5',
            },
            attributes: {
                stroke: '#000',
            },
        },
        leafNode: {
            circle: {
                fill: 'transparent',
            },
            attributes: {
                stroke: '#000',
            },
        },
    },
};
var PlaygroundTreeVis = function (_a) {
    var resData = _a.resData, query = _a.query;
    var theme = (0, react_1.useContext)(App_1.ThemeContext).theme;
    var _b = (0, react_1.useState)(null), objQuery = _b[0], setObjQuery = _b[1];
    // When they submit the query call the queryTransform inside use effect 
    // and update the object in tree
    (0, react_1.useEffect)(function () {
        if (resData) {
            // console.log('resData', resData);
            setObjQuery((0, utilFunctions_1.queryTransform)(query));
        }
    }, [resData]);
    // const layout: { x: number, y: number } = { x: -20, y: -20 };
    // const getDynamicPathClass = ({ source, target}, orientation) => {
    //   if (!target.children) {
    //     // Target node has no children -> this link leads to a leaf node.
    //     return 'link__to-leaf';
    //   }
    //   // Style it as a link connecting two branch nodes by default.
    //   return 'link__to-branch';
    // };
    return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    react_1.default.createElement("div", { id: "treeWrapper", style: { width: '38em', height: '38em' } }, objQuery && (react_1.default.createElement(react_d3_tree_1.default, { data: objQuery, zoom: .8, translate: { x: 100, y: 300 }, rootNodeClassName: "node__root", branchNodeClassName: "node__branch", leafNodeClassName: "node__leaf", enableLegacyTransitions: true }))));
};
exports.default = PlaygroundTreeVis;
//# sourceMappingURL=PlaygroundTreeVis.js.map