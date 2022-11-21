import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { StorybookHostDuseExampleMobile } from './StorybookHostDuseExampleMobile';

const Story: ComponentMeta<typeof StorybookHostDuseExampleMobile> = {
  component: StorybookHostDuseExampleMobile,
  title: 'StorybookHostDuseExampleMobile',
};
export default Story;

const Template: ComponentStory<typeof StorybookHostDuseExampleMobile> = (args) => (
  <StorybookHostDuseExampleMobile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
