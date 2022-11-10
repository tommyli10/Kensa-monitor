"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var bs_1 = require("react-icons/bs");
var react_router_dom_1 = require("react-router-dom");
var Kensa_cropped2_png_1 = __importDefault(require("../assets/Kensa cropped2.png"));
var Sidebar = function () {
    return (react_1.default.createElement(react_2.Box, { flex: '1', id: 'side-bar' },
        react_1.default.createElement(react_2.Flex, { h: '180px', justify: 'center', align: 'center', id: 'logo' },
            react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
                react_1.default.createElement(react_2.Image, { src: Kensa_cropped2_png_1.default, h: '100px', w: '150px' }))),
        react_1.default.createElement(react_2.Stack, { spacing: 3, direction: 'column', marginTop: 10 },
            react_1.default.createElement(react_router_dom_1.Link, { to: '' },
                react_1.default.createElement(react_2.Flex, { align: 'center', p: '20px', gap: 3, className: 'sidebar-text' },
                    react_1.default.createElement(react_2.Icon, { as: bs_1.BsFillFolderFill }),
                    react_1.default.createElement(react_2.Heading, { size: 'sm' }, "Projects"))),
            react_1.default.createElement(react_router_dom_1.Link, { to: 'playground' },
                react_1.default.createElement(react_2.Flex, { align: 'center', p: '20px', gap: 3, className: 'sidebar-text' },
                    react_1.default.createElement(react_2.Icon, { as: bs_1.BsFillPlayBtnFill, boxSize: '1.4rem' }),
                    react_1.default.createElement(react_2.Heading, { size: 'sm' }, "Playground"))))));
};
exports.default = Sidebar;
//# sourceMappingURL=Sidebar.js.map