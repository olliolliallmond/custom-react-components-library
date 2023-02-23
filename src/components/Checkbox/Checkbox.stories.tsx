import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
	title: 'ReactComponentLibrary/Checkbox',
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
);

export const Unchecked = Template.bind({});
Unchecked.args = {
	label: 'Unchecked Checkbox',
	id: 'unchecked',
};

export const Checked = Template.bind({});
Checked.args = {
	label: 'Checked Checkbox',
	id: 'checked',
	checked: true,
};
