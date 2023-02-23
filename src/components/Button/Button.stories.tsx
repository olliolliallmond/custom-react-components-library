import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'ReactComponentLibrary/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Big = Template.bind({});
Big.args = {
	btnClass: 'big',
	text: 'Big Btn',
};

export const Primary = Template.bind({});
Primary.args = {
	btnClass: 'primary',
	text: 'Primary Btn',
};

export const Secondary = Template.bind({});
Secondary.args = {
	btnClass: 'secondary',
	text: 'Secondary Btn',
};

export const Destructive = Template.bind({});
Destructive.args = {
	btnClass: 'destructive',
	text: 'Destructive Btn',
};

// export const HelloWorld = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// HelloWorld.args = {
// 	label: 'Hello world!',
// };

// export const ClickMe = Template.bind({});
// ClickMe.args = {
// 	label: 'Click me!',
// };
