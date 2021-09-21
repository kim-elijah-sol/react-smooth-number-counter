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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var SEQUENCES = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ",",
    ".",
];
var NumberCounter = function (props) {
    var _a, _b, _c, _d;
    var value = props.value;
    var align = (_a = props.align) !== null && _a !== void 0 ? _a : "left";
    var mock_ref = react_1.default.useRef(null);
    var suffix_ref = react_1.default.useRef(null);
    var setting_cnt = react_1.default.useRef(0);
    var _e = react_1.default.useState(["0"]), sequence = _e[0], setSequence = _e[1];
    var _f = react_1.default.useState({
        width: -1,
        height: -1,
    }), box_style = _f[0], setBoxStyle = _f[1];
    var transition = (_b = props.transition) !== null && _b !== void 0 ? _b : 1000;
    var sequence_transition = "all " + transition / 1000 + "s cubic-bezier(0.07, 0.49, 0.35, 0.99)";
    var loaded = box_style.width !== -1 && box_style.height !== -1;
    var number_counter_style = {
        position: "relative",
        display: "inline-block",
        height: box_style.height,
    };
    var sequence_scroll_style = {
        width: "100%",
        transition: sequence_transition,
        position: "absolute",
        left: 0,
        fontSize: "inherit",
    };
    var sequence_style = {
        width: "100%",
        height: box_style.height,
        textAlign: "center",
        fontSize: "inherit",
    };
    var ref_style = {
        position: "fixed",
        left: -9999,
        top: -9999,
        visibility: "hidden",
        fontSize: "inherit",
    };
    var getSpliterStyle = function (e) {
        return {
            left: 0,
            top: 0,
            transform: "translateY(-" + (e === "," ? "100" : "200") + "%)",
            position: "absolute",
            fontSize: "inherit",
        };
    };
    var getTop = function (e) {
        if (loaded && e === ",") {
            return box_style.height;
        }
        if (loaded && e === ".") {
            return box_style.height * 2;
        }
        var top = SEQUENCES.indexOf(e) * (box_style.height * -1);
        if (loaded) {
            return top;
        }
        else {
            return 0;
        }
    };
    var getSequenceBoxStyle = function (item, index) {
        var right = suffix_width +
            sequence.reduce(function (acc, current, _index) {
                return (acc +
                    (index < _index
                        ? [",", "."].includes(current)
                            ? box_style.width * 0.67
                            : box_style.width
                        : 0));
            }, 0);
        var sequence_box_style_by_align = align === "left"
            ? {
                position: "relative",
            }
            : {
                position: "absolute",
                top: 0,
                transition: sequence_transition,
                right: right,
            };
        return __assign({ width: item === "." || item === "," ? box_style.width * 0.67 : box_style.width, height: box_style.height, position: "relative", overflow: "hidden", display: "inline-block", fontSize: "inherit" }, sequence_box_style_by_align);
    };
    var getSequenceStyle = function (e) {
        return e === "," || e === "."
            ? __assign(__assign({}, sequence_style), getSpliterStyle(e)) : sequence_style;
    };
    var getAnimationDelay = function (e) {
        return (transition * (e / sequence.length)) / 1000 + "s";
    };
    var getOpacity = function (index) {
        return loaded || index === 0 ? 1 : 0;
    };
    var getWidth = function () {
        return getBoxWidht() + suffix_width + 3;
    };
    var getBoxWidht = function () {
        var _sequence = loaded ? sequence : ["0"];
        var width = _sequence.reduce(function (acc, current) {
            var item_width = current === "," || current === "."
                ? box_style.width * 0.67
                : box_style.width;
            return acc + item_width;
        }, 0);
        return width;
    };
    var suffix_width = (_d = (_c = suffix_ref.current) === null || _c === void 0 ? void 0 : _c.clientWidth) !== null && _d !== void 0 ? _d : 0;
    var suffix_position_style_by_align = align === "left"
        ? {
            left: getBoxWidht() + 3,
        }
        : {
            right: 0,
        };
    var suffix_style = __assign({ position: "absolute", top: 0, transition: setting_cnt.current >= 2
            ? sequence_transition
            : (((sequence.length - 1) / sequence.length) * transition) / 700 + "s", fontSize: "inherit" }, suffix_position_style_by_align);
    react_1.default.useEffect(function () {
        if (!loaded && mock_ref.current) {
            setTimeout(function () {
                setBoxStyle({
                    width: mock_ref.current.clientWidth,
                    height: mock_ref.current.clientHeight,
                });
            }, 100);
        }
    }, [loaded, mock_ref]);
    react_1.default.useEffect(function () {
        var _a;
        var prev_sequence = __spreadArray([], sequence, true);
        var next_sequence = value
            .toString()
            .replace(/,/gi, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            .split("");
        if (next_sequence.length >= prev_sequence.length) {
            setSequence(next_sequence);
        }
        else {
            var temp_sequence = next_sequence.map(function (_, index) {
                var _a;
                return (_a = prev_sequence[index]) !== null && _a !== void 0 ? _a : 0;
            });
            setSequence(temp_sequence);
            setTimeout(function () {
                setSequence(next_sequence);
            }, ((_a = props.transition) !== null && _a !== void 0 ? _a : 150) / 2000);
        }
        setting_cnt.current += 1;
    }, [props.value]);
    var id = (0, react_1.useMemo)(function () {
        var max = 99999;
        var min = 10000;
        var id = Math.floor(Math.random() * (max - min + 1)) + min;
        return props.id || "number-counter-" + id;
    }, [props.id]);
    return (react_1.default.createElement("div", { id: id, className: "number-counter" + (props.className ? " " + props.className : ""), style: __assign(__assign({}, number_counter_style), { width: getWidth() }) },
        sequence.map(function (item, index) {
            return (react_1.default.createElement(react_1.default.Fragment, { key: index },
                react_1.default.createElement("div", { style: getSequenceBoxStyle(item, index) },
                    react_1.default.createElement("div", { style: __assign(__assign({}, sequence_scroll_style), { top: getTop(item), transitionDelay: setting_cnt.current >= 2
                                ? "0.01s"
                                : getAnimationDelay(index), opacity: getOpacity(index) }) }, SEQUENCES.map(function (item) {
                        return (react_1.default.createElement(react_1.default.Fragment, { key: item },
                            react_1.default.createElement("div", { style: getSequenceStyle(item) }, item)));
                    })))));
        }),
        react_1.default.createElement("div", { style: suffix_style, ref: suffix_ref }, props.suffix),
        react_1.default.createElement("div", { ref: mock_ref, style: ref_style, id: "mock-" + id }, "0")));
};
exports.default = NumberCounter;
//# sourceMappingURL=number-counter.js.map