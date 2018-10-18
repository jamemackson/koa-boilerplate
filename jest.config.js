module.exports = {
  coverageReporters: [
    'text-summary',
    'lcov'
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.js?$': 'babel-jest'
  }
}
