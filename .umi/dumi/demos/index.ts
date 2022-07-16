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
    previewerProps: {"sources":{"_":{"jsx":rawCode1}},"dependencies":{"@ehome/unite-components":{"version":"0.0.2"},"react":{"version":"^16.13.1"},"antd":{"version":"^4.21.5","css":"antd/dist/antd.css"},"react-dom":{"version":"^16.13.1"}},"identifier":"country-code-input-basic"},
  },
};
