export default {
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        esModuleInterop: true,
        isolatedModules: true,
      },
    ],
  },
  testEnvironment: "jsdom", // Change the test environment to jsdom
  testMatch: ["**/__tests__/**/*.test.(ts|js|tsx)"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  preset: "ts-jest",
};
