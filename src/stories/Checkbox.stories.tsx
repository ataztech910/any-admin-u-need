import React from 'react';
import { Story, Meta } from '@storybook/react';
import {Checkbox, CheckboxProps} from "../_ui/Checkbox";


export default {
    title: 'Example/Checkbox',
    component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Regular = Template.bind({});
Regular.args = {
    checked: true,
    label: 'my checkbox',
    id: 'default'
};