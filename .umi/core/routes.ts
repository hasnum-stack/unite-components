// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/ZL/unite-components/node_modules/.pnpm/@umijs+runtime@3.5.28_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('D:/ZL/unite-components/node_modules/.pnpm/@umijs+preset-dumi@1.1.45_5zpoqmoriu7wvnk4luhnbto6b4/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('D:/ZL/unite-components/node_modules/.pnpm/dumi-theme-default@1.1.22_hy5whgvtwni34iw6nf7w5u6o7m/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('D:/ZL/unite-components/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1657804928000,
          "slugs": [
            {
              "depth": 1,
              "value": "统一组件",
              "heading": "统一组件"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "配置babel加载",
              "heading": "配置babel加载"
            }
          ],
          "title": "统一组件"
        },
        "title": "统一组件 - @ehome/unite-components"
      },
      {
        "path": "/country-code-input",
        "component": require('D:/ZL/unite-components/components/country-code-input/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "components/country-code-input/index.md",
          "updatedTime": 1658406812000,
          "slugs": [
            {
              "depth": 1,
              "value": "国际码 Input",
              "heading": "国际码-input"
            },
            {
              "depth": 2,
              "value": "组件样式",
              "heading": "组件样式"
            },
            {
              "depth": 2,
              "value": "使用: 配合 Form/Form.Item",
              "heading": "使用-配合-formformitem"
            }
          ],
          "title": "国际码 Input",
          "hasPreviewer": true,
          "group": {
            "path": "/country-code-input",
            "title": "Country-code-input"
          }
        },
        "title": "国际码 Input - @ehome/unite-components"
      }
    ],
    "title": "@ehome/unite-components",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
