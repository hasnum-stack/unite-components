import { defineConfig } from 'dumi';
export default defineConfig({
  resolve: {
    includes: ['docs', 'components'],
  },
  mfsu: {},
  extraBabelPlugins: [
    ['import', { libraryName: 'unite-components', libraryDirectory: 'es', style: true }, 'unite-components'],
  ],
});
