import { defineConfig } from 'father';

const EsWithCjsConf = {
  input: 'components',
  ignores: ['components/**/demo/*'],
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
};

export default defineConfig({
  // esm: {
  //   output: 'es',
  //   ...EsWithCjsConf,
  // },
  // cjs: {
  //   output: 'lib',
  //   ...EsWithCjsConf,
  // },
  umd: {
    entry: 'components',
    output: 'umd',
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      antd: 'antd',
    },
    extraBabelPlugins: [],
    // chainWebpack: (config, { env, webpack }) => {
    // },
    // chainWebpack: (config, { env, webpack }) => {
    //   // config
    //   config.module.rule('babel').
    //   return config;
    // },
  },
  // prebundle: {},
  extraBabelPresets: [
    [
      require.resolve('@umijs/bundler-utils/compiled/babel/preset-react'),
      {
        runtime: 'classic',
        development: process.env.NODE_ENV === 'development',
      },
    ],
  ],

  platform: 'browser',
});
