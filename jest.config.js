module.exports = {
  verbose: true,
  setupFiles: ["./tests/setup.js"],
  moduleFileExtensions: ["js", "jsx", "json"],
  coveragePathIgnorePatterns: [
    "src/components/index.js",
    "src/components/styles",
    "src/components/version",
    "src/components/icon",
    "src/components/form",
    "src/components/wordPad",
    "src/components/dropdown",
    "src/components/styles"
  ],
  transformIgnorePatterns: ["/node_modules/", ".history/*", "lib", "dist"],
  modulePathIgnorePatterns: ["/.history/", "lib", "dist"],
  moduleDirectories: ["node_modules", ".", "src", "src/shared"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  collectCoverageFrom: [
    "src/components/**/*.{js,jsx}",
    "!src/components/**/style.{js,jsx}"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testURL: "http://localhost",
  rootDir: __dirname,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/mocks/file_mock.js",
    "\\.(css|styl)$": "<rootDir>/tests/mocks/style_mock.js"
  }
};
