export default {
  // ...
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.(ts|js)"],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};
