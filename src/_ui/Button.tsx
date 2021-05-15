import React from "react";
import styled from "styled-components";
import { theme } from "../_constants/theme";

export interface ButtonProps {
    property?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit';
    value?: string;
    placeholder?: string;
}

const AnyButton = styled.button`
  letter-spacing: -0.025rem;
  text-transform: uppercase;
  color: #fff;
  width: ${props => props.property? props.theme[props.property]: props.theme.large};
  box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%);
  background-size: 150%;
  background-position-x: 25%;
  background-image: linear-gradient(
          310deg
          , #141727 0%, #3A416F 100%);
  display: inline-block;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.75rem 1.5rem;
  font-size: 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.15s ease-in;
  &:hover {
    background-color: #252f40;
    border-color: #252f40;
    box-shadow: 0 3px 5px -1px rgb(0 0 0 / 9%), 0 2px 3px -1px rgb(0 0 0 / 7%);
    transform: scale(1.02);
  }
  &:active {
    opacity: 0.85;
  }
`;

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