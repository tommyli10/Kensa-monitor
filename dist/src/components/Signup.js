"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var client_1 = require("@apollo/client");
var react_2 = require("@chakra-ui/react");
var react_3 = require("@chakra-ui/react");
var App_1 = require("./App");
var react_redux_1 = require("react-redux");
var authSlice_1 = require("../features/auth/authSlice");
var Signup = function () {
    // App theme state and function to switch between themes
    var _a = (0, react_1.useContext)(App_1.ThemeContext), theme = _a.theme, toggleTheme = _a.toggleTheme;
    // state for all form fields (username, password, confirm password)
    var _b = (0, react_1.useState)(''), username = _b[0], setUsername = _b[1];
    var _c = (0, react_1.useState)(''), password = _c[0], setPassword = _c[1];
    var _d = (0, react_1.useState)(''), confirmPassword = _d[0], setConfirmPassword = _d[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var dispatch = (0, react_redux_1.useDispatch)(); // Redux action dispatcher
    // used to set up error message if username is taken
    var isUserNameError = false;
    // used to set up error message if passwords do not match
    var _e = (0, react_1.useState)(false), isPasswordError = _e[0], setIsPasswordError = _e[1];
    // Focus Username input upon rendering  
    var usernameRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        usernameRef.current.focus();
    }, []);
    function handleUserChange(e) {
        var target = e.target;
        setUsername(target.value);
    }
    function handlePasswordChange(e) {
        var target = e.target;
        setPassword(target.value);
    }
    function handleConfirmPasswordChange(e) {
        var target = e.target;
        setConfirmPassword(target.value);
    }
    var getUserInfo = function () {
        return { user: username, pw: password };
    };
    var CREATE_USER = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation CreateUser ($username: String!, $password: String!){\n    createUser(username: $username, password: $password) {\n        username\n        token\n    }\n  }\n"], ["\n  mutation CreateUser ($username: String!, $password: String!){\n    createUser(username: $username, password: $password) {\n        username\n        token\n    }\n  }\n"])));
    // GraphQL mutation to create user. Upon completion, dispatch action to Redux store
    // to login user
    var _f = (0, client_1.useMutation)(CREATE_USER, {
        onCompleted: function () {
            var user = {
                username: data.createUser.username,
                token: data.createUser.token
            };
            dispatch((0, authSlice_1.login)(user));
            // save user info into localStorage
            // and navigate user to their main Projects page
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/user/".concat(username));
        }
    }), createUser = _f[0], _g = _f[1], data = _g.data, loading = _g.loading, error = _g.error;
    // Render spinner when loading GraphQL mutation
    if (loading) {
        return (react_1.default.createElement(react_2.Center, { w: '100%', h: '100%' },
            react_1.default.createElement(react_2.Spinner, { size: 'xl', className: 'spinner' })));
    }
    // If there is an error in GraphQL request like username is already taken
    // set isUsernameError = true to give error message
    if (error) {
        isUserNameError = true;
    }
    return (react_1.default.createElement(react_2.Box, { id: 'signup' },
        react_1.default.createElement("form", { id: "add-project-form", onSubmit: function (e) {
                e.preventDefault();
                var _a = getUserInfo(), user = _a.user, pw = _a.pw;
                if (password !== confirmPassword) {
                    setIsPasswordError(true);
                    return;
                }
                setIsPasswordError(false);
                // GraphQL mutation to create user
                createUser({ variables: { username: user, password: pw } });
            } },
            react_1.default.createElement(react_2.Stack, { spacing: 10, direction: 'column', align: 'center', maxWidth: 400 },
                react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
                    react_1.default.createElement(react_3.Text, { color: 'blue.500', className: 'link' }, "Back to Homepage")),
                react_1.default.createElement(react_2.Heading, null, "Register"),
                react_1.default.createElement(react_3.FormControl, { isRequired: true, isInvalid: isUserNameError },
                    react_1.default.createElement(react_3.FormLabel, null, "Username"),
                    react_1.default.createElement(react_3.Input, { type: 'text', onChange: handleUserChange, ref: usernameRef }),
                    react_1.default.createElement(react_2.FormErrorMessage, null, "That username is taken. Try another")),
                react_1.default.createElement(react_3.FormControl, { isRequired: true },
                    react_1.default.createElement(react_3.FormLabel, null, "Password"),
                    react_1.default.createElement(react_3.Input, { type: 'password', onChange: handlePasswordChange })),
                react_1.default.createElement(react_3.FormControl, { isRequired: true, isInvalid: isPasswordError },
                    react_1.default.createElement(react_3.FormLabel, null, "Confirm Password"),
                    react_1.default.createElement(react_3.Input, { type: 'password', onChange: handleConfirmPasswordChange }),
                    react_1.default.createElement(react_2.FormErrorMessage, null, "Passwords do not match")),
                react_1.default.createElement(react_3.Button, { type: 'submit', w: 400, colorScheme: 'facebook' }, "JOIN"),
                react_1.default.createElement(react_router_dom_1.Link, { to: '/login' },
                    react_1.default.createElement(react_3.Text, { align: 'right', color: 'blue.500', _hover: { color: 'blue' } }, "Already have account? Sign in")))),
        react_1.default.createElement(react_2.Center, null,
            react_1.default.createElement(react_3.Button, { size: 'sm', mt: '20px', onClick: toggleTheme, id: 'toggle-switch' }, theme === 'light' ? 'Dark mode' : 'Light mode'))));
};
exports.default = Signup;
var templateObject_1;
//# sourceMappingURL=Signup.js.map