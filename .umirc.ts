import { defineConfig } from 'dumi';
export default defineConfig({
  resolve: {
    includes: ['docs', 'components'],
  },
  mfsu: {},
  extraBabelPlugins: [['import', { libraryName: '@ehome/unite-components', style: true }, '@ehome/unite-componentsq']],
});
