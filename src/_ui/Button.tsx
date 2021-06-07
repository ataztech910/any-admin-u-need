import React from "react";
import { theme } from "../_constants/theme";
import { AnyButton } from "./theme/any-button.style";

export interface ButtonProps {
    property?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit';
    value?: string;
    placeholder?: string;
}

export const Button: React.FC<ButtonProps> = (
    {
        property = 'large',
        type= 'button',
        value,
        ...props
    }) => {
    return (
        <AnyButton
            theme={theme}
            type={type}
            {...props}
            property={property}
        >
            {value}
        </AnyButton>
    );
};