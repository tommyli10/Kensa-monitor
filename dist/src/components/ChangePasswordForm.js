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
var client_1 = require("@apollo/client");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var react_2 = require("@chakra-ui/react");
var react_3 = require("@chakra-ui/react");
var ChangePasswordForm = function () {
    // Get the username from Redux global state
    var user = (0, react_redux_1.useSelector)(function (state) { return state.auth.user; });
    var username = user.username;
    // const [username, setUsername] = useState<string>('');
    var _a = (0, react_1.useState)(''), oldPassword = _a[0], setOldPassword = _a[1];
    var _b = (0, react_1.useState)(''), newPassword = _b[0], setNewPassword = _b[1];
    var _c = (0, react_1.useState)(''), confirmNewPassword = _c[0], setConfirmNewPassword = _c[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    // used to set up error message if old password is incorrect
    var isOldPasswordError = false;
    // used to set up error message if new passwords do not match
    var _d = (0, react_1.useState)(false), isNewPasswordError = _d[0], setIsNewPasswordError = _d[1];
    // Focus old password input upon rendering  
    var oldPasswordRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        oldPasswordRef.current.focus();
    }, []);
    var CHANGE_PASSWORD = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation ChangePassword ($userInput: ChangePasswordInput!) {\n      changePassword(userInput: $userInput) {\n        id\n        username\n      }\n    }\n  "], ["\n    mutation ChangePassword ($userInput: ChangePasswordInput!) {\n      changePassword(userInput: $userInput) {\n        id\n        username\n      }\n    }\n  "])));
    // GraphQL mutation function to change password
    var _e = (0, client_1.useMutation)(CHANGE_PASSWORD, {
        onCompleted: function () {
            navigate("/user/".concat(data.changePassword.username));
        }
    }), changePassword = _e[0], _f = _e[1], data = _f.data, loading = _f.loading, error = _f.error;
    // Render spinner when loading GraphQL mutation
    if (loading) {
        return (react_1.default.createElement(react_2.Center, { w: '100%', h: '100%' },
            react_1.default.createElement(react_2.Spinner, { size: 'xl', className: 'spinner' })));
    }
    // If there is an error in GraphQL request like old password is incorrect
    // set isOldPasswordError = true to give error message
    if (error) {
        isOldPasswordError = true;
    }
    var handleChangePassword = function (e) {
        e.preventDefault();
        if (newPassword !== confirmNewPassword) {
            setIsNewPasswordError(true);
            return;
        }
        setIsNewPasswordError(false);
        // GraphQL mutation to change password
        changePassword({
            variables: {
                userInput: {
                    username: username,
                    oldPassword: oldPassword,
                    newPassword: newPassword
                }
            }
        });
    };
    return (react_1.default.createElement(react_2.Flex, { align: 'center', justifyContent: 'center', marginTop: '50px', id: 'change-password-form' },
        react_1.default.createElement("form", { onSubmit: handleChangePassword },
            react_1.default.createElement(react_2.Stack, { spacing: 10, direction: 'column', align: 'center', maxWidth: 400 },
                react_1.default.createElement(react_2.Heading, null, "Change Password"),
                react_1.default.createElement(react_3.FormControl, { isRequired: true, isInvalid: isOldPasswordError },
                    react_1.default.createElement(react_3.FormLabel, null, "Old password"),
                    react_1.default.createElement(react_3.Input, { type: 'password', onChange: function (e) { return setOldPassword(e.target.value); }, ref: oldPasswordRef }),
                    react_1.default.createElement(react_2.FormErrorMessage, null, "Password is incorrect")),
                react_1.default.createElement(react_3.FormControl, { isRequired: true },
                    react_1.default.createElement(react_3.FormLabel, null, "New password"),
                    react_1.default.createElement(react_3.Input, { type: 'password', onChange: function (e) { return setNewPassword(e.target.value); } })),
                react_1.default.createElement(react_3.FormControl, { isRequired: true, isInvalid: isNewPasswordError },
                    react_1.default.createElement(react_3.FormLabel, null, "Confirm new password"),
                    react_1.default.createElement(react_3.Input, { type: 'password', onChange: function (e) { return setConfirmNewPassword(e.target.value); } }),
                    react_1.default.createElement(react_2.FormErrorMessage, null, "Passwords do not match")),
                react_1.default.createElement(react_3.Button, { type: 'submit', w: 400, colorScheme: 'facebook' }, "Update password")))));
};
exports.default = ChangePasswordForm;
var templateObject_1;
//# sourceMappingURL=ChangePasswordForm.js.map