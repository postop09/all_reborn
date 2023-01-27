import styled from "styled-components";
import { Base } from "./Button";

export const CustomButton = styled.button<Base>`
  display: flex;
  column-gap: 4px;
  align-items: center;
  width: fit-content;
  padding: 4px 12px;
  ${({ text, theme }) => theme.TEXT[text]}
  border: ${({ border }) => (border ? "2px solid #4AA96C" : "none")};
  border-radius: ${({ round, theme }) => theme.ROUND[round]};
  background-color: ${({ color, theme }) => theme.COLOR[color]};
  cursor: ${({ clickable }) => (clickable ? "default" : "pointer")};
  white-space: nowrap;
`;

export const BtnWrapper = styled.span<Base>`
  display: flex;
  column-gap: 4px;
  align-items: center;
  width: fit-content;
  padding: 4px 12px;
  ${({ text, theme }) => theme.TEXT[text]}
  border: ${({ border }) => (border ? "2px solid #4AA96C" : "none")};
  border-radius: ${({ round, theme }) => theme.ROUND[round]};
  background-color: ${({ color, theme }) => theme.COLOR[color]};
  cursor: ${({ clickable }) => (clickable ? "default" : "pointer")};
  white-space: nowrap;
`;
