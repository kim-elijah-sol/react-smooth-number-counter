"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
require("./style/index.css");
var number_counter_1 = __importDefault(require("./lib/number-counter"));
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement("div", { className: "col col-1" },
        react_1.default.createElement(number_counter_1.default, { value: 0.32, className: "fs-16", transition: 130, suffix: "%" }),
        react_1.default.createElement(number_counter_1.default, { value: 1923400, id: "krw1", transition: 130, suffix: "\u20A9/KRW" })),
    react_1.default.createElement("div", { className: "col col-2" },
        react_1.default.createElement(number_counter_1.default, { value: 0.32, className: "fs-16", transition: 130, suffix: "%" }),
        react_1.default.createElement(number_counter_1.default, { value: 1923400, id: "krw2", transition: 130, suffix: "\u20A9/KRW" })),
    react_1.default.createElement("div", { className: "col col-3" },
        react_1.default.createElement(number_counter_1.default, { value: 0.32, className: "fs-16", transition: 130, suffix: "%" }),
        react_1.default.createElement(number_counter_1.default, { value: 1923400, id: "krw3", transition: 130, suffix: "\u20A9/KRW" }))), document.getElementById("root"));
//# sourceMappingURL=index.js.map