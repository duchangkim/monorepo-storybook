import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SampleBadge } from './SampleBadge';

const Story: ComponentMeta<typeof SampleBadge> = {
  component: SampleBadge,
  title: 'shared/ui/SampleBadge',
};
export default Story;

const Template: ComponentStory<typeof SampleBadge> = (args) => <SampleBadge {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
