// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'D:/.pnpm-store/v3/tmp/dlx-8088/node_modules/.pnpm/@umijs+runtime@3.5.30_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ 'D:/.pnpm-store/v3/tmp/dlx-8088/node_modules/.pnpm/@umijs+preset-dumi@1.1.45_umi@3.5.30/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
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
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'D:/.pnpm-store/v3/tmp/dlx-8088/node_modules/.pnpm/dumi-theme-default@1.1.22_@umijs+preset-dumi@1.1.45/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'D:/ZL/unite-components/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1657804928000,
          "slugs": [
            {
              "depth": 3,
              "value": "title bs",
              "heading": "title-bs"
            }
          ],
          "title": "title bs"
        },
        "title": "title bs - @ehome/unite-components"
      },
      {
        "path": "/country-code-input",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__country-code-input__index.md' */'D:/ZL/unite-components/components/country-code-input/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "components/country-code-input/index.md",
          "updatedTime": 1657806082000,
          "slugs": [
            {
              "depth": 1,
              "value": "国际码 Input",
              "heading": "国际码-input"
            },
            {
              "depth": 2,
              "value": "组件展示",
              "heading": "组件展示"
            },
            {
              "depth": 2,
              "value": "配合表单使用",
              "heading": "配合表单使用"
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
