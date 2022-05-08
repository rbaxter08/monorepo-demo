module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
};
