import type { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from './TextField';

const Story: ComponentMeta<typeof TextField> = {
  component: TextField,
  title: 'base/TextField',
};
export default Story;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
