"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("./style/index.less");

var _jsxFileName = "E:\\HASNUM\\ITEM\\unite-components\\components\\test-demo\\index.js",
    _jsxFileName2 = "E:\\HASNUM\\ITEM\\unite-components\\components\\test-demo\\index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var a = function a() {};

function TestDemo(_ref) {
  var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4;

  var _ref$a = _ref.a,
      a = _ref$a === void 0 ? 123 : _ref$a;

  var fn = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", 13);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fn() {
      return _ref2.apply(this, arguments);
    };
  }();

  var af = function af() {
    var a = [1123];
    Array.isArray(a) && console.log(123);
    console.log(_objectSpread({}, a));
    var map = new Map();
    {
      var _a = 465;
    }
  };

  var fn1 = function fn1() {
    return new Promise(function () {});
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Slider, (_React$createElement = {
    defaultValue: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, _defineProperty(_React$createElement, "__self", this), _defineProperty(_React$createElement, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 25,
    columnNumber: 7
  }), _React$createElement)), /*#__PURE__*/_react.default.createElement("div", (_React$createElement2 = {
    onClick: fn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, _defineProperty(_React$createElement2, "__self", this), _defineProperty(_React$createElement2, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 26,
    columnNumber: 7
  }), _React$createElement2), "1234"), /*#__PURE__*/_react.default.createElement(_antd.Input, (_React$createElement3 = {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, _defineProperty(_React$createElement3, "__self", this), _defineProperty(_React$createElement3, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 27,
    columnNumber: 7
  }), _React$createElement3)), /*#__PURE__*/_react.default.createElement(_antd.Table, (_React$createElement4 = {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, _defineProperty(_React$createElement4, "__self", this), _defineProperty(_React$createElement4, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 28,
    columnNumber: 7
  }), _React$createElement4)), a);
}

var _default = TestDemo;
exports.default = _default;