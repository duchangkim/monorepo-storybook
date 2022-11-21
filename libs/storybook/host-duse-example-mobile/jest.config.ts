/* eslint-disable */
export default {
  displayName: 'storybook-host-duse-example-mobile',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/storybook/host-duse-example-mobile',
};
