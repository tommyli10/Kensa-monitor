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
exports.resolvers = void 0;
var graphql_1 = require("graphql");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.resolvers = {
    Query: {
        // Get all users
        users: function (_, __, _a) {
            var db = _a.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, db.query('SELECT * FROM users;')];
                        case 1:
                            result = _b.sent();
                            return [2 /*return*/, result.rows];
                    }
                });
            });
        },
        // Get a single user by ID
        user: function (_, _a, _b) {
            var id = _a.id;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, db.query('SELECT * FROM users WHERE id = $1', [id])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows[0]];
                    }
                });
            });
        },
        // Get a single user by username
        username: function (_, _a, _b) {
            var username = _a.username;
            var db = _b.db, user = _b.user;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, db.query('SELECT * FROM users WHERE username = $1', [username])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows[0]];
                    }
                });
            });
        },
        // Get all projects
        projects: function (_, __, _a) {
            var db = _a.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, db.query('SELECT * FROM projects ORDER BY id;')];
                        case 1:
                            result = _b.sent();
                            return [2 /*return*/, result.rows];
                    }
                });
            });
        },
        // Get a single project by ID
        project: function (parent, args, _a) {
            var db = _a.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, db.query('SELECT * FROM projects WHERE id = $1', [args.id])];
                        case 1:
                            result = _b.sent();
                            return [2 /*return*/, result.rows[0]];
                    }
                });
            });
        },
        // A history log of every project registered with Kensa
        historyLog: function (_, __, _a) {
            var db = _a.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, db.query('SELECT * FROM history_log;')];
                        case 1:
                            result = _b.sent();
                            return [2 /*return*/, result.rows];
                    }
                });
            });
        },
        // A history log of every project queried during development mode
        historyLogDev: function (_, __, _a) {
            var db = _a.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, db.query('SELECT * FROM history_log_dev;')];
                        case 1:
                            result = _b.sent();
                            return [2 /*return*/, result.rows];
                    }
                });
            });
        },
        fieldLogs: function (_, _a, _b) {
            var operation_id = _a.operation_id;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            console.log(operation_id);
                            return [4 /*yield*/, db.query('SELECT * FROM resolver_log_dev WHERE operation_id = $1', [operation_id])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows];
                    }
                });
            });
        },
        projectFieldLogs: function (_, _a, _b) {
            var project_id = _a.project_id;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            console.log(project_id);
                            return [4 /*yield*/, db.query('SELECT * FROM resolver_log_dev WHERE project_id = $1', [project_id])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows];
                    }
                });
            });
        },
    },
    Mutation: {
        createUser: function (_, _a, _b) {
            var username = _a.username, password = _a.password;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var dbResult, existingUser, salt, hashedPassword, token;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, db.query('SELECT username FROM users WHERE username = $1', [username])];
                        case 1:
                            dbResult = _c.sent();
                            existingUser = dbResult.rows[0];
                            if (existingUser) {
                                throw new graphql_1.GraphQLError('Please choose different username', {
                                    extensions: {
                                        code: 'BAD_USER_INPUT'
                                    }
                                });
                            }
                            return [4 /*yield*/, bcryptjs_1.default.genSalt(10)];
                        case 2:
                            salt = _c.sent();
                            return [4 /*yield*/, bcryptjs_1.default.hash(password, salt)];
                        case 3:
                            hashedPassword = _c.sent();
                            // Insert new user into database
                            return [4 /*yield*/, db.query('INSERT INTO users(username, password) VALUES($1, $2) RETURNING username;', [username, hashedPassword])];
                        case 4:
                            // Insert new user into database
                            _c.sent();
                            token = jsonwebtoken_1.default.sign({ username: username }, process.env.JWT_KEY, {
                                expiresIn: "1h",
                            });
                            return [2 /*return*/, { username: username, token: token }];
                    }
                });
            });
        },
        addProject: function (_, _a, _b) {
            var project = _a.project;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var project_name, api_key, server_url, userId, result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            project_name = project.project_name, api_key = project.api_key, server_url = project.server_url, userId = project.userId;
                            return [4 /*yield*/, db.query('INSERT INTO projects(project_name, api_key, server_url, user_id) VALUES($1, $2, $3, $4) RETURNING *;', [project_name, api_key, server_url, userId])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows[0]];
                    }
                });
            });
        },
        deleteProject: function (_, _a, _b) {
            var id = _a.id;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, db.query('DELETE FROM projects WHERE id = $1 RETURNING *;', [Number(id)])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows[0]];
                    }
                });
            });
        },
        updateProject: function (_, _a, _b) {
            var id = _a.id, project = _a.project;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var project_name, server_url, result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            project_name = project.project_name, server_url = project.server_url;
                            return [4 /*yield*/, db.query('UPDATE projects SET project_name=$1, server_url=$2 WHERE id=$3 RETURNING *;', [project_name, server_url, Number(id)])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows[0]];
                    }
                });
            });
        },
        changePassword: function (_, _a, _b) {
            var userInput = _a.userInput;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var username, oldPassword, newPassword, dbResult, existingUser, salt, newHashedPassword, result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            username = userInput.username, oldPassword = userInput.oldPassword, newPassword = userInput.newPassword;
                            return [4 /*yield*/, db.query('SELECT * FROM users WHERE username = $1;', [username])];
                        case 1:
                            dbResult = _c.sent();
                            existingUser = dbResult.rows[0];
                            if (!existingUser) {
                                throw new graphql_1.GraphQLError('Invalid username. User does not exist', {
                                    extensions: {
                                        code: 'BAD_USER_INPUT'
                                    }
                                });
                            }
                            return [4 /*yield*/, (bcryptjs_1.default.compare(oldPassword, existingUser.password))];
                        case 2:
                            if (!_c.sent()) return [3 /*break*/, 6];
                            return [4 /*yield*/, bcryptjs_1.default.genSalt(10)];
                        case 3:
                            salt = _c.sent();
                            return [4 /*yield*/, bcryptjs_1.default.hash(newPassword, salt)];
                        case 4:
                            newHashedPassword = _c.sent();
                            return [4 /*yield*/, db.query('UPDATE users SET password = $1 WHERE username = $2 RETURNING *;', [newHashedPassword, username])];
                        case 5:
                            result = _c.sent();
                            return [2 /*return*/, result.rows[0]];
                        case 6: throw new graphql_1.GraphQLError('Invalid password. Please provide correct password', {
                            extensions: {
                                code: 'BAD_USER_INPUT'
                            }
                        });
                    }
                });
            });
        },
        // delete all the metric logs related to a project when a project is deleted
        deleteHistoryLogs: function (_, _a, _b) {
            var id = _a.id;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, db.query('DELETE FROM history_log WHERE project_id = $1 RETURNING *;', [Number(id)])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows];
                    }
                });
            });
        },
        deleteHistoryLogsDev: function (_, _a, _b) {
            var id = _a.id;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, db.query('DELETE FROM history_log_dev WHERE project_id = $1 RETURNING *;', [Number(id)])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows];
                    }
                });
            });
        },
        deleteResolverLogsDev: function (_, _a, _b) {
            var id = _a.id;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, db.query('DELETE FROM resolver_log_dev WHERE project_id = $1 RETURNING *;', [Number(id)])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows];
                    }
                });
            });
        },
        deleteOperationResolverLogs: function (_, _a, _b) {
            var id = _a.id;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            console.log(id);
                            return [4 /*yield*/, db.query('DELETE FROM history_log_dev WHERE id = $1', [Number(id)])];
                        case 1:
                            _c.sent();
                            return [4 /*yield*/, db.query('DELETE FROM resolver_log_dev WHERE operation_id = $1 RETURNING *;', [Number(id)])];
                        case 2:
                            result = _c.sent();
                            return [2 /*return*/, result.rows];
                    }
                });
            });
        },
    },
    User: {
        projects: function (_a, __, _b) {
            var user_id = _a.id;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, db.query('SELECT * FROM projects WHERE user_id = $1 ORDER BY id;', [user_id])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows];
                    }
                });
            });
        }
    },
    Project: {
        user: function (_a, __, _b) {
            var user_id = _a.user_id;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, db.query('SELECT * FROM users WHERE id = $1', [user_id])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows[0]];
                    }
                });
            });
        },
        history_log: function (_a, __, _b) {
            var project_id = _a.id;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, db.query('SELECT * FROM history_log WHERE project_id = $1', [project_id])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows];
                    }
                });
            });
        },
        history_log_dev: function (_a, __, _b) {
            var project_id = _a.id;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, db.query('SELECT * FROM history_log_dev WHERE project_id = $1', [project_id])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows];
                    }
                });
            });
        }
    },
    Log: {
        project: function (_a, __, _b) {
            var project_id = _a.project_id;
            var db = _b.db;
            return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, db.query('SELECT * FROM projects WHERE id = $1', [project_id])];
                        case 1:
                            result = _c.sent();
                            return [2 /*return*/, result.rows[0]];
                    }
                });
            });
        }
    }
};
//# sourceMappingURL=resolvers.js.map