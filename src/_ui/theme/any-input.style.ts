import styled from "styled-components";

export const AnyInput = styled.input`
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