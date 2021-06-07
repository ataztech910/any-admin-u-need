import React from 'react';
import { Story, Meta } from '@storybook/react';
import {Input, InputProps} from "../_ui/Input";


export default {
    title: 'Example/Input',
    component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Regular = Template.bind({});
Regular.args = {
    type: 'text',
    size: 'small'
};