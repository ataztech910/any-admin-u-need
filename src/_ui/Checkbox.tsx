import React, {ChangeEvent, useState} from "react";
import { theme } from "../_constants/theme";
import { AnyCheckbox } from "./theme/any-checkbox.style";
import {AnyFormLayout} from "./theme/any-form.style";

export interface CheckboxProps {
    checked?: boolean;
    label?: string;
    id?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
        checked= false,
        label = '',
        id= 'defaultCheckbox',
        ...props
    }) => {
    const [state, setState] = useState({ checked: true });
    const handleChange = (event: ChangeEvent<{ checked: boolean }>) => {
        setState({ checked: event?.currentTarget?.checked });
    }
    return (
        <AnyFormLayout>
            <AnyCheckbox
                theme={theme}
                checked={state.checked}
                type='checkbox'
                id={id}
                onChange={handleChange}
                {...props}
            />
            <label htmlFor={id}>{label}</label>
        </AnyFormLayout>
    );
};
