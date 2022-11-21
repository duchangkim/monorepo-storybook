/* eslint-disable */
export default {
  displayName: 'storybook-host-duse-example-pc',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/storybook/host-duse-example-pc',
};
