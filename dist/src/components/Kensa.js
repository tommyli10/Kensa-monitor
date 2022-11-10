"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var react_router_dom_1 = require("react-router-dom");
var KensaNavbar_1 = __importDefault(require("./KensaNavbar"));
var Sidebar_1 = __importDefault(require("./Sidebar"));
var Kensa = function () {
    return (react_1.default.createElement(react_2.Flex, { h: '100vh', w: '100vw', id: 'kensa' },
        react_1.default.createElement(Sidebar_1.default, null),
        react_1.default.createElement(react_2.Flex, { flex: '5', direction: 'column' },
            react_1.default.createElement(KensaNavbar_1.default, null),
            react_1.default.createElement(react_router_dom_1.Outlet, null))));
};
exports.default = Kensa;
//# sourceMappingURL=Kensa.js.map