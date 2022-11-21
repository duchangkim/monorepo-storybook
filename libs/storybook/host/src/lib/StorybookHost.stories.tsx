import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { StorybookHost } from './StorybookHost';

const Story: ComponentMeta<typeof StorybookHost> = {
  component: StorybookHost,
  title: 'StorybookHost',
};
export default Story;

const Template: ComponentStory<typeof StorybookHost> = (args) => <StorybookHost {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
