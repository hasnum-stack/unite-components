import { defineConfig } from 'dumi';
export default defineConfig({
  resolve: {
    includes: ['docs', 'components'],
  },
  extraBabelPlugins: [
    [
      'import',
      { libraryName: '@ehome/unite-components', libraryDirectory: 'lib', style: true },
      '@ehome/unite-components',
    ],
  ],
});
