/* eslint-disable */
export default {
  displayName: 'plugin-workspace',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/plugin/workspace',
};
