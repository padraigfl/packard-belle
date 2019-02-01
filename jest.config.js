/* eslint-disable */
module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./src/setupTests.js'],
  collectCoverageFrom: ['src/**/*.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
};
