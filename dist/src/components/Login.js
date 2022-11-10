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
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("@chakra-ui/react");
var react_3 = require("@chakra-ui/react");
var App_1 = require("./App");
var react_redux_1 = require("react-redux");
var authSlice_1 = require("../features/auth/authSlice");
var Login = function () {
    // App theme state and function to toggle between themes
    var _a = (0, react_1.useContext)(App_1.ThemeContext), theme = _a.theme, toggleTheme = _a.toggleTheme;
    // state for all form fields (username, password, password error message)
    var _b = (0, react_1.useState)(''), username = _b[0], setUsername = _b[1];
    var _c = (0, react_1.useState)(''), password = _c[0], setPassword = _c[1];
    var _d = (0, react_1.useState)(false), isPasswordError = _d[0], setIsPasswordError = _d[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var dispatch = (0, react_redux_1.useDispatch)();
    // Getting user state in localStorage. If there is a user, log them in and navigate to user's Projects page
    var user = JSON.parse(localStorage.getItem('user'));
    (0, react_1.useEffect)(function () {
        if (user) {
            dispatch((0, authSlice_1.login)(user));
            navigate("/user/".concat(user.username));
        }
    }, [user]);
    // Focus Username input upon rendering  
    var usernameRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        usernameRef.current.focus();
    }, []);
    // Functions to handle username/password input change
    function handleUserChange(e) {
        var target = e.target;
        setUsername(target.value);
    }
    function handlePasswordChange(e) {
        var target = e.target;
        setPassword(target.value);
    }
    // login function that send username and psw to server (/login)
    function handleLogin(e) {
        e.preventDefault();
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/*',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(function (res) {
            // Set password error message in state to display to user
            if (res.status === 400) {
                setIsPasswordError(true);
                throw new Error('Wrong username or password');
            }
            return res.json();
        })
            .then(function (user) {
            // dispatch login action to Redux store to log user in
            dispatch((0, authSlice_1.login)(user));
            // save global state user in localStorage to persist user on refresh
            localStorage.setItem('user', JSON.stringify(user));
            // Navigate to Projects after successfully login
            navigate("/user/".concat(username));
        })
            .catch(function (err) { return console.log(err); });
    }
    return (react_1.default.createElement(react_2.Box, { id: 'login' },
        react_1.default.createElement("form", { onSubmit: handleLogin },
            react_1.default.createElement(react_2.Stack, { spacing: 10, direction: 'column', align: 'center', maxWidth: 400 },
                react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
                    react_1.default.createElement(react_2.Text, { color: 'blue.500', className: 'link' }, "Back to Homepage")),
                react_1.default.createElement(react_2.Heading, null, "Sign In"),
                react_1.default.createElement(react_3.FormControl, { isRequired: true },
                    react_1.default.createElement(react_3.FormLabel, null, "Username"),
                    react_1.default.createElement(react_3.Input, { type: 'text', onChange: handleUserChange, ref: usernameRef })),
                react_1.default.createElement(react_3.FormControl, { isRequired: true, isInvalid: isPasswordError },
                    react_1.default.createElement(react_3.FormLabel, null, "Password"),
                    react_1.default.createElement(react_3.Input, { type: 'password', onChange: handlePasswordChange }),
                    react_1.default.createElement(react_2.FormErrorMessage, null, "Wrong username or password")),
                react_1.default.createElement(react_3.Button, { type: 'submit', w: 400, colorScheme: 'facebook' }, "Sign In"),
                react_1.default.createElement(react_router_dom_1.Link, { to: '/signup' },
                    react_1.default.createElement(react_2.Text, { color: 'blue.500', className: 'link' }, "Don't have account? Get started")))),
        react_1.default.createElement(react_2.Center, null,
            react_1.default.createElement(react_3.Button, { size: 'sm', mt: '20px', onClick: toggleTheme, id: 'toggle-switch' }, theme === 'light' ? 'Dark mode' : 'Light mode'))));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map