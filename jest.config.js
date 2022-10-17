module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  collectCoverage: true,
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // 不算入覆盖率的文件夹
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/test/',
    '<rootDir>/src/index.ts',
    '<rootDir>/src/.umi',
  ],
  collectCoverageFrom: ['src/**/*.ts'],
};
