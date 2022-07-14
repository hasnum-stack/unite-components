"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'antd/lib/slider/style/index';
// import './style/index';
function CountryCodeInput() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_input.default.Group, {
    compact: true
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    defaultValue: "Zhejiang"
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: "Zhejiang"
  }, "Zhejiang"), /*#__PURE__*/_react.default.createElement(Option, {
    value: "Jiangsu"
  }, "Jiangsu")), /*#__PURE__*/_react.default.createElement(_input.default, {
    style: {
      width: '50%'
    },
    defaultValue: "Xihu District, Hangzhou"
  })));
}

var _default = CountryCodeInput;
exports.default = _default;