import "antd/lib/input/style";
import _Input from "antd/lib/input";
import "antd/lib/select/style";
import _Select from "antd/lib/select";
import React from 'react';

// import 'antd/lib/slider/style/index';
// import './style/index';
function CountryCodeInput() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Input.Group, {
    compact: true
  }, /*#__PURE__*/React.createElement(_Select, {
    defaultValue: "Zhejiang"
  }, /*#__PURE__*/React.createElement(Option, {
    value: "Zhejiang"
  }, "Zhejiang"), /*#__PURE__*/React.createElement(Option, {
    value: "Jiangsu"
  }, "Jiangsu")), /*#__PURE__*/React.createElement(_Input, {
    style: {
      width: '50%'
    },
    defaultValue: "Xihu District, Hangzhou"
  })));
}

export default CountryCodeInput;