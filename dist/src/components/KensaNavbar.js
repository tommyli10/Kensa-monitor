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
var react_2 = require("@chakra-ui/react");
var react_3 = require("@chakra-ui/react");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
var bs_1 = require("react-icons/bs");
var darkTheme_1 = require("../theme/darkTheme");
var react_redux_1 = require("react-redux");
var authSlice_1 = require("../features/auth/authSlice");
var themeHover = {
    cursor: 'pointer',
    bgColor: '#b3cccc',
    borderRadius: '10px',
};
var KensaNavbar = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var dispatch = (0, react_redux_1.useDispatch)();
    // Get global state user from localStorage
    var user = JSON.parse(localStorage.getItem('user'));
    var _a = (0, react_1.useContext)(App_1.ThemeContext), theme = _a.theme, toggleTheme = _a.toggleTheme;
    return (react_1.default.createElement(react_2.Flex, { gap: 4, h: '8%', w: '100%', align: 'center', justifyContent: 'flex-end', p: '20px', id: 'kensa-navbar' },
        react_1.default.createElement(react_2.Center, { onClick: toggleTheme, w: '40px', h: '40px', _hover: themeHover }, theme === 'light' ? react_1.default.createElement(bs_1.BsSun, null) : react_1.default.createElement(bs_1.BsMoon, { color: 'white' })),
        react_1.default.createElement(react_2.Box, null,
            react_1.default.createElement(react_3.Popover, { placement: 'bottom-end' },
                react_1.default.createElement(react_3.PopoverTrigger, null,
                    react_1.default.createElement(react_2.Avatar, { name: user.username, size: 'md', justifyItems: 'flex-end', _hover: { cursor: 'pointer' } })),
                react_1.default.createElement(react_3.PopoverContent, { w: '200px', style: theme === 'dark' && darkTheme_1.darkTheme },
                    react_1.default.createElement(react_3.PopoverArrow, null),
                    react_1.default.createElement(react_3.PopoverHeader, null,
                        react_1.default.createElement(react_2.Heading, { size: 'xs' }, user.username)),
                    react_1.default.createElement(react_3.PopoverBody, null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: 'security' },
                            react_1.default.createElement(react_2.Box, { marginBottom: '10px' }, "Change password")),
                        react_1.default.createElement(react_2.Text, { _hover: { cursor: 'pointer' }, onClick: function () {
                                dispatch((0, authSlice_1.logout)());
                                localStorage.removeItem('user');
                                localStorage.removeItem('projectId');
                                navigate('/login');
                            }, size: 'sm' }, "Sign out")))))));
};
exports.default = KensaNavbar;
//# sourceMappingURL=KensaNavbar.js.map