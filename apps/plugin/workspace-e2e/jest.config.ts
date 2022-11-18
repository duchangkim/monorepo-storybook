/* eslint-disable */
export default {
  displayName: 'plugin-workspace-e2e',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/apps/plugin/workspace-e2e',
};
