import React from "react";
import styled from "styled-components";
import { theme } from "../_constants/theme";

export interface InputProps {
    size?: 'small' | 'medium' | 'large';
    type?: 'email' | 'text' | 'password';
    value?: string;
    placeholder?: string;
}

const AnyInput = styled.input`
  display: block;
  width: ${props => props.size ? props.theme[props.size]: props.theme.large };
  box-sizing: border-box;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: ${props => props.theme.inputLineHeight};
  color: ${props => props.theme.inputColor};
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid ${props => props.theme.inputBorderColor};
  appearance: none;
  border-radius: ${props => props.theme.inputBorderRadius};
  transition: box-shadow 0.15s ease, border-color 0.15s;
  &:focus {
    color: ${props => props.theme.inputFocusColor};
    background-color: ${props => props.theme.white};
    border-color: ${props => props.theme.inputFocusBorder};
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.inputShadowColor};
  }
`;

export const Input: React.FC<InputProps> = ({
      size = 'large',
      type= 'text',
      value,
      ...props
  }) => {
    return (
        <AnyInput
            theme={theme}
            type={type}
            {...props}
            value={value}
            // @ts-ignore
            size={size}
        />
    );
};
