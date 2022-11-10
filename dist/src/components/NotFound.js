"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var NotFound = function () {
    return (react_1.default.createElement(react_2.Center, { w: '100%', h: '100%' },
        react_1.default.createElement(react_2.Alert, { status: 'error', h: '100px', w: '50%', borderRadius: '10px', className: 'alert' },
            react_1.default.createElement(react_2.AlertIcon, null),
            "404 Not Found")));
};
exports.default = NotFound;
//# sourceMappingURL=NotFound.js.map