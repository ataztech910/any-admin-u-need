import styled from "styled-components"

export const AnyCheckbox = styled.input`
  background-image: linear-gradient(310deg, #141727 0%, #3A416F 100%);
  width: 1.23em;
  height: 1.23em;
  margin-top: 0.135em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  appearance: none;
  color-adjust: exact;
  position: relative;
  transition: background-color 0.25s ease, border-color 0.25s ease, background-position 0.15s ease-in-out, opacity 0.15s ease-out, box-shadow 0.15s ease-in-out;
  &:checked::after {
    content: "x";
  }
  &::after {
    transition: opacity 0.25s ease-in-out;
    width: 100%;
    height: 100%;
    color: #fff;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
  }
`;