import { defineConfig } from 'dumi';
export default defineConfig({
  history: {
    type: 'hash',
  },
  publicPath: './',
  resolve: {
    includes: ['docs', 'components'],
  },
  extraBabelPlugins: [
    [
      'import',
      { libraryName: '@ehome/unite-components', libraryDirectory: 'lib', style: true },
      '@ehome/unite-components',
    ],
    ['import', { libraryName: 'antd', style: true }],
  ],
});
