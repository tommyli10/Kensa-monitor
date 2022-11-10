"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var react_router_dom_1 = require("react-router-dom");
var Kensa_cropped2_png_1 = __importDefault(require("../assets/Kensa cropped2.png"));
var Header = function () {
    var user = JSON.parse(localStorage.getItem('user'));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Flex, { h: '10vh', px: "100px", py: "10px", bg: "#FDEEDC", alignItems: "center", justifyContent: "space-between" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                react_1.default.createElement(react_2.Image, { css: "&:hover {transform: translate(0,2px)", justifyContent: "flex-start", alignItems: "center", w: "90px", h: "60px", src: Kensa_cropped2_png_1.default })),
            react_1.default.createElement(react_2.Flex, { alignItems: "space-between" },
                react_1.default.createElement(react_2.HStack, { fontFamily: "Helvetica", justifyContent: "space-between", spacing: "150px", letterSpacing: ".5px", fontSize: "20px", color: "#DEA057", fontWeight: "500" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/whykensa" },
                        react_1.default.createElement(react_2.Text, { css: "&:hover {color: #E38B29; font-weight: 550" }, " WHY KENSA")),
                    react_1.default.createElement("a", { href: "https://github.com/oslabs-beta/Kensa", target: "_blank", rel: "noreferrer" },
                        react_1.default.createElement(react_2.Text, { css: "&:hover {color: #E38B29; font-weight: 550" }, "DOCS")),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/team" },
                        react_1.default.createElement(react_2.Text, { css: "&:hover {color: #E38B29; font-weight: 550" }, "TEAM")))),
            react_1.default.createElement(react_2.Flex, { alignItems: "flex-end" },
                react_1.default.createElement(react_2.HStack, { fontFamily: "Helvetica", alignItems: 'center', justifyContent: "flex-end", spacing: "50px", fontSize: "20px", letterSpacing: ".5px", color: "#DEA057", fontWeight: "500" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/signup" },
                        react_1.default.createElement(react_2.Text, { css: "&:hover {color: #E38B29; font-weight: 550" }, "SIGN UP")),
                    user ? (react_1.default.createElement(react_router_dom_1.Link, { to: "/user/".concat(user.username) },
                        react_1.default.createElement(react_2.Text, null, user.username))) : (react_1.default.createElement(react_router_dom_1.Link, { to: '/login' },
                        react_1.default.createElement(react_2.Text, null, "LOGIN"))))))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map