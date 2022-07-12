import { defineConfig } from 'father';

export default defineConfig({
  esm: {
    input: 'components',
    output: 'es',
  },
  cjs: {
    input: 'components',
    output: 'lib',
  },
  umd: {
    entry: 'components',
    output: 'umd',
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
