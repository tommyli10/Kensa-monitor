"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCurrentProjectId = exports.logout = exports.login = exports.authSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialStateValue = {
    username: '',
    token: '',
    currentProjectId: '0'
};
var initialState = {
    user: initialStateValue
};
// Global state across entire application. Every request to backend
// will send the token along in the headers
exports.authSlice = (0, toolkit_1.createSlice)({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: function (state, action) {
            state.user.username = action.payload.username;
            state.user.token = action.payload.token;
        },
        logout: function (state) {
            state.user = initialStateValue;
        },
        updateCurrentProjectId: function (state, action) {
            state.user.currentProjectId = action.payload;
        }
    }
});
exports.login = (_a = exports.authSlice.actions, _a.login), exports.logout = _a.logout, exports.updateCurrentProjectId = _a.updateCurrentProjectId;
exports.default = exports.authSlice.reducer;
//# sourceMappingURL=authSlice.js.map