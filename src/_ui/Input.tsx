import React, {ChangeEvent, useState} from "react";
import { theme } from "../_constants/theme";
import { AnyInput } from "./theme/any-input.style";

export interface InputProps {
    size?: 'small' | 'medium' | 'large';
    type?: 'email' | 'text' | 'password';
    placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
      size = 'large',
      type= 'text',
      ...props
  }) => {
    const [state, setState] = useState({ value: '' });
    const handleChange = (event: ChangeEvent<{ value: string }>) => {
        setState({ value: event?.currentTarget?.value });
    }
    return (
        <AnyInput
            theme={theme}
            type={type}
            {...props}
            value={state?.value}
            onChange={handleChange}
            // @ts-ignore
            size={size}
        />
    );
};
