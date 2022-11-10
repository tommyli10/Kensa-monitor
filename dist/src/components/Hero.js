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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var react_router_dom_1 = require("react-router-dom");
var bg3_png_1 = __importDefault(require("../assets/bg3.png"));
var Kensa_cropped_png_1 = __importDefault(require("../assets/Kensa_cropped.png"));
var Hero = function () {
    var _a = (0, react_1.useState)('unrenderedLogo'), render = _a[0], setRender = _a[1];
    // Render logo after 500ms (transition)
    (0, react_1.useEffect)(function () {
        var timeoutID = setTimeout(function () {
            setRender('renderedLogo');
        }, 500);
        return function () { return clearTimeout(timeoutID); };
    }, []);
    return (react_1.default.createElement(react_2.Flex, { bgImage: bg3_png_1.default, filter: "blur(0px)", opacity: .8, h: '90vh', objectFit: "cover", w: '100%' },
        react_1.default.createElement(react_2.Box, null,
            react_1.default.createElement(react_2.Text, { color: "#FDEEDC", fontSize: '75px', fontFamily: "Arial Black", lineHeight: "20px", letterSpacing: "80px", fontWeight: "900", zIndex: "100", pt: "200px", pl: "75px" }, "KENSA"),
            react_1.default.createElement(react_2.Text, { color: "#FDEEDC", fontSize: '45px', fontFamily: "Arial", lineHeight: "40px", fontWeight: "100", letterSpacing: ".1px", zIndex: "100", pt: "30px", pl: "75px" },
                "monitoring and observability ",
                react_1.default.createElement("br", null),
                "for all your GraphQL APIs"),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/login" },
                react_1.default.createElement(react_2.Text, { css: "&:hover {transform: translate(0,1px); text-decoration: underline}", fontFamily: "Garamond", fontWeight: "400", color: "#FDEEDC", fontSize: "50px", letterSpacing: "3px", fontStyle: "italic", pl: "75px" }, "GET STARTED"))),
        react_1.default.createElement(react_2.Box, null,
            react_1.default.createElement(react_2.Image, { src: Kensa_cropped_png_1.default, w: '500px', pt: '80px', id: "".concat(render) }))));
};
exports.default = Hero;
//# sourceMappingURL=Hero.js.map