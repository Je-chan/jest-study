# Jest 개인 공부

- jest를 사용하기 위한 기본 테스트를 공부
- React 가 아닌 Vue 와 공부

## 1. vue-cli 를 이용해 jest 테스트 도구를 사용

- vue 3 환경
- 되도록이면 ts 를 사용하고자 노력중

## 2. jest.config.js 내용

```jsx
module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$',
  },
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  // 테스트 돌릴 내용
  // 사실 두 번 째 것만 사용해도 됨
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
  // 복수의 테스트를 진행할 때에도 세부 사항을 볼 수 있도록 설정
  verbose: true,
};
```
