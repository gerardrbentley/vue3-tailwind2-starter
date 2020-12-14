module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec).(ts|vue)'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|png|jpg|jpeg)$': 'jest-transform-stub',
  },
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
};
