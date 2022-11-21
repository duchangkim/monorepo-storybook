const rootMain = require('../../../../.storybook/main');

module.exports = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [...rootMain.stories, '../src/lib/**/*.stories.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, { configType }) => {
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }
    return config;
  },
  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        'duse-example-pc-stories': {
          title: 'duse-example-pc',
          url: 'http://localhost:4401',
        },
        'duse-example-mobile-stories': {
          title: 'duse-example-mobile',
          url: 'http://localhost:4402',
        },
      }
    }

    return {
      'duse-example-pc-stories': {
        title: 'duse-example-pc',
        url: 'https://637b0d7b74cc9f8fcc7d3a17-eqmhyonmqq.chromatic.com',
      },
      'duse-example-mobile-stories': {
        title: 'duse-example-mobile',
        url: 'https://637b0dd35d50eba038ca4afb-gvvcsxjfso.chromatic.com',
      },
    };
  },
};
