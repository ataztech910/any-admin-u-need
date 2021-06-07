import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from "../_ui/Button";


export default {
    title: 'Example/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Regular = Template.bind({});
Regular.args = {
    value: 'Input',
    type: 'button',
};