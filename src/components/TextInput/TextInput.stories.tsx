import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';

export default {
	title: 'ReactComponentLibrary/TextInput',
	component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);

// export const Unchecked = Template.bind({});
// Unchecked.args = {
// };

// export const Checked = Template.bind({});
// Checked.args = {
// };