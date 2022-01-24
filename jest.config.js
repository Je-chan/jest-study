module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$',
  },
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: [
    '**/tests/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
    '**/src/**/*.(test|spec).(js|ts)',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/build',
    '<rootDir>/dist',
  ],
  verbose: true,
};
