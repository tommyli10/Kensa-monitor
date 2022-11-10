"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("@chakra-ui/react");
var LandingPage_1 = __importDefault(require("./LandingPage"));
var Signup_1 = __importDefault(require("./Signup"));
var Login_1 = __importDefault(require("./Login"));
var Monitor_1 = __importDefault(require("./Monitor"));
var TeamPage_1 = __importDefault(require("./TeamPage"));
var WhyKensaPage_1 = __importDefault(require("./WhyKensaPage"));
var Kensa_1 = __importDefault(require("./Kensa"));
var Projects_1 = __importDefault(require("./Projects"));
var Hero_1 = __importDefault(require("./Hero"));
var PlaygroundContainer_1 = __importDefault(require("./PlaygroundContainer"));
var ChangePasswordForm_1 = __importDefault(require("./ChangePasswordForm"));
var NotFound_1 = __importDefault(require("./NotFound"));
var MainContainer = function () {
    return (react_1.default.createElement(react_2.Center, { h: '100vh' },
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: '/' },
                react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(LandingPage_1.default, null) },
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(Hero_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/team', element: react_1.default.createElement(TeamPage_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/whykensa', element: react_1.default.createElement(WhyKensaPage_1.default, null) })),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/signup", element: react_1.default.createElement(Signup_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/login", element: react_1.default.createElement(Login_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/user/:username', element: react_1.default.createElement(Kensa_1.default, null) },
                    react_1.default.createElement(react_router_dom_1.Route, { path: '', element: react_1.default.createElement(Projects_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: 'monitor/:projectId', element: react_1.default.createElement(Monitor_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: 'playground', element: react_1.default.createElement(PlaygroundContainer_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: 'security', element: react_1.default.createElement(ChangePasswordForm_1.default, null) })),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/*', element: react_1.default.createElement(NotFound_1.default, null) })))));
};
exports.default = MainContainer;
//# sourceMappingURL=MainContainer.js.map