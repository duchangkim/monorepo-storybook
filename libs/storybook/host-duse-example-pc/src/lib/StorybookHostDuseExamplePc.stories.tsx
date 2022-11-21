import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { StorybookHostDuseExamplePc } from './StorybookHostDuseExamplePc';

const Story: ComponentMeta<typeof StorybookHostDuseExamplePc> = {
  component: StorybookHostDuseExamplePc,
  title: 'StorybookHostDuseExamplePc',
};
export default Story;

const Template: ComponentStory<typeof StorybookHostDuseExamplePc> = (args) => <StorybookHostDuseExamplePc {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
