// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/ZL/unite-components/components/country-code-input/demo/basic.jsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/ZL/unite-components/components/country-code-input/demo/withForm.jsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/ZL/unite-components/components/country-code-input/demo/countryCodeList.json?dumi-raw-code';

export default {
  'country-code-input-basic': {
    component: (require('D:/ZL/unite-components/components/country-code-input/demo/basic.jsx')).default,
    previewerProps: {"sources":{"_":{"jsx":rawCode1}},"dependencies":{"@ehome/unite-components":{"version":"1.0.0"},"react":{"version":">=16.9.0"},"antd":{"version":">=4.21.3","css":"antd/dist/antd.css"},"react-dom":{"version":">=16.9.0"}},"identifier":"country-code-input-basic"},
  },
  'country-code-input-withform': {
    component: (require('D:/ZL/unite-components/components/country-code-input/demo/withForm.jsx')).default,
    previewerProps: {"sources":{"_":{"jsx":rawCode2},"countryCodeList.json":{"import":"./countryCodeList.json","content":rawCode3}},"dependencies":{"antd":{"version":">=4.21.3","css":"antd/dist/antd.css"},"@ehome/unite-components":{"version":"1.0.0"},"react":{"version":">=16.9.0"},"react-dom":{"version":">=16.9.0"}},"identifier":"country-code-input-withform"},
  },
};
