module.exports = {
  modules: "true",
  verbose: true,
  cacheDirectory: "./.jestCache",
  coverageReporters: ["text-summary", "lcov"],
  testEnvironment: "node",
  transform: {
    "\\.js$": "babel-jest"
  }
};
