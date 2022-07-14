// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/ZL/unite-components/components/country-code-input/demo/basic.jsx?dumi-raw-code';

export default {
  'country-code-input-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/ZL/unite-components/components/country-code-input/demo/basic.jsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"jsx":rawCode1}},"dependencies":{"react":{"version":"^16.13.1"},"@ehome/unite-components":{"version":"0.0.1"},"antd":{"version":"^4.21.5","css":"antd/dist/antd.css"},"react-dom":{"version":"^16.13.1"}},"identifier":"country-code-input-basic"},
  },
  'country-code-input-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = (await import("D:/.pnpm-store/v3/tmp/dlx-11628/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js"))["default"];

    var _react = _interopRequireDefault(await import("react"));

    var _uniteComponents = await import("@ehome/unite-components");

    var _default = function _default() {
      return /*#__PURE__*/_react["default"].createElement(_uniteComponents.CountryCodeInput, null);
    };

    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport { CountryCodeInput } from '@ehome/unite-components';\nexport default () => <CountryCodeInput />;"}},"dependencies":{"react":{"version":"^16.13.1"},"@ehome/unite-components":{"version":"0.0.1"},"antd":{"version":"^4.21.5","css":"antd/dist/antd.css"},"react-dom":{"version":"^16.13.1"}},"identifier":"country-code-input-demo"},
  },
};
