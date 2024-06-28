import styled from "styled-components";

export const Button = styled.button `
  &.default, &.line, &.microphone, &.options {
    padding: 5px 12px;
    height: 32px;
    border-radius: 10px;
    background-color: var(--secundary-color);
    border: 1px solid var(--secundary-color);

    font-size: 12px;
    font-weight: 500;

    cursor: pointer;
  }

  &.line {
    background-color: transparent;
    color: var(--secundary-color);
  }

  &.microphone, &.options {
    width: 70px;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border-color: transparent;
    background-color: var(--secundary-color);
  }

  &.options {
    width: 50px;
    height: 50px;

    background-color: var(--black-500);
  }
`;