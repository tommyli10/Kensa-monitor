"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var Header_1 = __importDefault(require("./Header"));
var react_router_dom_1 = require("react-router-dom");
var LandingPage = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Box, { h: '100vh', w: '100%', id: 'landing-page' },
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement(react_router_dom_1.Outlet, null))));
};
exports.default = LandingPage;
//# sourceMappingURL=LandingPage.js.map