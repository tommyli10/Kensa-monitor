"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var ProjectCard = function (_a) {
    var projectName = _a.projectName, projectId = _a.projectId;
    return (react_2.default.createElement(react_router_dom_1.Link, { to: "monitor/".concat(projectId) },
        react_2.default.createElement(react_1.Center, { h: '200px', w: '200px', id: 'project-card', borderRadius: '10px', boxShadow: 'md' },
            react_2.default.createElement(react_1.Heading, { size: 'md' }, projectName))));
};
exports.default = ProjectCard;
//# sourceMappingURL=ProjectCard.js.map