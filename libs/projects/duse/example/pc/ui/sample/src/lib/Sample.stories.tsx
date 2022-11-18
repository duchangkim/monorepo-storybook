import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sample } from './Sample';

const Story: ComponentMeta<typeof Sample> = {
  component: Sample,
  title: 'base/Sample',
};
export default Story;

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
