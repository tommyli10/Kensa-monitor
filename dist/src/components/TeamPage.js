"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var TeamPage = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.SimpleGrid, { h: '90vh', columns: 2, spacing: 10, bgColor: 'white' },
            react_1.default.createElement(react_2.Box, { bgImage: require('../assets/bg3.png'), objectFit: 'fill', filter: "blur(1px)", opacity: .8 }),
            react_1.default.createElement(react_2.Flex, { direction: 'column', justifyContent: 'space-around', paddingBottom: '20px' },
                react_1.default.createElement(react_2.Text, { fontFamily: "Garamond", fontWeight: "600", fontSize: "35px", letterSpacing: "2px", fontStyle: "italic", color: "#E38B29" }, "Brian Pham"),
                react_1.default.createElement(react_2.Link, { href: 'https://github.com/brpham13', isExternal: true, fontFamily: "Arial", fontWeight: "100", letterSpacing: ".1px", fontSize: "20px" }, "GitHub"),
                react_1.default.createElement("br", null),
                react_1.default.createElement(react_2.Link, { href: 'https://www.linkedin.com/in/brpham13/', isExternal: true, fontFamily: "Arial", fontWeight: "100", letterSpacing: ".1px", fontSize: "20px" }, "LinkedIn"),
                react_1.default.createElement(react_2.Text, { fontFamily: "Garamond", fontWeight: "600", fontSize: "35px", letterSpacing: "2px", fontStyle: "italic", pt: "50px", color: "#E38B29" }, "Brian Peinado"),
                react_1.default.createElement(react_2.Link, { href: 'https://github.com/brianhip', isExternal: true, fontFamily: "Arial", fontWeight: "100", letterSpacing: ".1px", fontSize: "20px" }, "GitHub"),
                react_1.default.createElement("br", null),
                react_1.default.createElement(react_2.Link, { fontFamily: "Arial", fontWeight: "100", letterSpacing: ".1px", fontSize: "20px" }, "LinkedIn"),
                react_1.default.createElement(react_2.Text, { fontFamily: "Garamond", fontWeight: "600", fontSize: "35px", letterSpacing: "2px", fontStyle: "italic", pt: "50px", color: "#E38B29" }, "Tommy Li"),
                react_1.default.createElement(react_2.Link, { href: 'https://github.com/tommyli97', isExternal: true, fontFamily: "Arial", fontWeight: "100", letterSpacing: ".1px", fontSize: "20px" }, "GitHub"),
                react_1.default.createElement("br", null),
                react_1.default.createElement(react_2.Link, { fontFamily: "Arial", fontWeight: "100", letterSpacing: ".1px", fontSize: "20px" }, "LinkedIn"),
                react_1.default.createElement(react_2.Text, { fontFamily: "Garamond", fontWeight: "600", fontSize: "35px", letterSpacing: "2px", fontStyle: "italic", pt: "50px", color: "#E38B29" }, "Raymond Kim"),
                react_1.default.createElement(react_2.Link, { href: 'https://github.com/raymonnd', isExternal: true, fontFamily: "Arial", fontWeight: "100", letterSpacing: ".1px", fontSize: "20px" }, "GitHub"),
                react_1.default.createElement("br", null),
                react_1.default.createElement(react_2.Link, { fontFamily: "Arial", fontWeight: "100", letterSpacing: ".1px", fontSize: "20px" }, "LinkedIn")))));
};
exports.default = TeamPage;
//# sourceMappingURL=TeamPage.js.map