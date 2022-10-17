export default {
  entry: 'src/index.ts',
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  cjs: {
    type: 'babel',
    lazy: true,
  },
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'lodash',
      libraryDirectory: '',
      camel2DashComponentName: false,
    }],
    // polyfill
    ["@babel/plugin-transform-runtime", {
      corejs: 3,
    }],
  ],
};
