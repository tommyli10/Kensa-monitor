"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
var server_1 = require("@apollo/server");
var express4_1 = require("@apollo/server/express4");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var schema_1 = require("./schema");
var resolvers_1 = require("./resolvers");
var db_1 = __importDefault(require("./models/db"));
var userController_1 = require("./controllers/userController");
var cookie_parser_1 = __importDefault(require("cookie-parser"));
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function () {
        var app, PORT, apolloServer;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    app = (0, express_1.default)();
                    PORT = process.env.PORT || 3000;
                    apolloServer = new server_1.ApolloServer({
                        typeDefs: schema_1.typeDefs,
                        resolvers: resolvers_1.resolvers,
                    });
                    return [4 /*yield*/, apolloServer.start()];
                case 1:
                    _a.sent();
                    // GraphQL logic
                    app.use('/graphql', (0, cors_1.default)(), body_parser_1.default.json(), (0, express4_1.expressMiddleware)(apolloServer, {
                        context: function (_a) {
                            var req = _a.req, res = _a.res;
                            return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_b) {
                                    // COMMENT: Apollo GraphQL playground will not be able to introspect the schema if we do not comment out everything here
                                    // Only return { req, res, db } for GraphQL playground to work
                                    // get the user token from the headers
                                    // uncomment this if want to test on localhost:3000/graphql
                                    // const token = req.headers.authorization.split(' ')[1] || '';
                                    // // try to retrieve a user with the token
                                    // const user = await getUser(token);
                                    // // add the user to the context
                                    // return { req, res, db, user };
                                    return [2 /*return*/, { req: req, res: res, db: db_1.default }];
                                });
                            });
                        },
                    }));
                    app.use(express_1.default.json());
                    app.use((0, cookie_parser_1.default)());
                    app.use((0, cors_1.default)());
                    app.use(express_1.default.urlencoded({ extended: true }));
                    // Express REST API routes
                    app.use('/', (0, cors_1.default)(), express_1.default.static(path_1.default.join(__dirname, '../dist')));
                    app.post('/login', userController_1.userController.loginAuth, function (req, res) {
                        return res.status(200).json(res.locals.user);
                    });
                    app.get('/', function (req, res) {
                        return res.status(200).sendFile(path_1.default.join(__dirname, '../dist/index.html'));
                    });
                    // the get '/*' request is required to get React router to work in production
                    app.get('/*', function (req, res) {
                        return res.status(200).sendFile(path_1.default.join(__dirname, '../dist/index.html'));
                    });
                    app.listen(PORT, function () { return console.log("\uD83D\uDE80 Server running on port ".concat(PORT)); });
                    return [2 /*return*/];
            }
        });
    });
}
startApolloServer();
//# sourceMappingURL=server.js.map