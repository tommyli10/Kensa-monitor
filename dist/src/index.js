"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_router_dom_1 = require("react-router-dom");
var client_1 = require("@apollo/client");
var context_1 = require("@apollo/client/link/context");
var react_2 = require("@chakra-ui/react");
var react_redux_1 = require("react-redux");
var store_1 = require("./app/store");
var App_1 = __importDefault(require("./components/App"));
require("./assets/styles/styles.scss");
var httpLink = (0, client_1.createHttpLink)({
    uri: 'http://localhost:3000/graphql'
});
var authLink = (0, context_1.setContext)(function (_, _a) {
    var headers = _a.headers;
    // get user from local storage if it exists and attach token to request headers for authentication
    var user = JSON.parse(localStorage.getItem('user'));
    // return the headers to the context so httpLink can read them
    return {
        headers: __assign(__assign({}, headers), { authorization: user ? "Bearer ".concat(user.token) : '' })
    };
});
var client = new client_1.ApolloClient({
    link: authLink.concat(httpLink),
    cache: new client_1.InMemoryCache()
});
react_dom_1.default.render(react_1.default.createElement(client_1.ApolloProvider, { client: client },
    react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
        react_1.default.createElement(react_2.ChakraProvider, null,
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(App_1.default, null))))), document.getElementById('root'));
//# sourceMappingURL=index.js.map