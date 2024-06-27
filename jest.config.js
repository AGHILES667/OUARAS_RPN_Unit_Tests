module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["html", "text-summary"],
  testEnvironment: "node",
  coveragePathIgnorePatterns: ["/node_modules/", "/test/"]
};
