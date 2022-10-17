module.exports = {
  extends: './node_modules/@giantaxewhy/lint/ts-eslintrc.js',
  rules: {
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-empty-interface': 0, // 不开启空interface类型检查
    '@typescript-eslint/no-this-alias': 0, // 允许赋值this给变量
    'import/no-default-export': 0,
  },
};
