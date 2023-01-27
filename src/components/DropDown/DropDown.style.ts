import styled from "styled-components";

export const DropDownBox = styled.div`
  position: relative;
  margin-left: 8px;
`;

export const Ul = styled.ul<{ showOption: boolean }>`
  display: ${({ showOption }) => (showOption ? "block" : "none")};
  position: absolute;
  border: 1px solid ${({ theme }) => theme.COLOR.keyOriginal};
  width: 100%;
  margin-top: 4px;
  padding: 4px 8px;
  text-align: center;
  background-color: #ffffff;
  border-radius: ${({ theme }) => theme.ROUND.sm};
  z-index: 10;

  button {
    border-radius: ${({ theme }) => theme.ROUND.xs};
    width: 100%;
    ${({ theme }) => theme.TEXT.label12};

    &:hover {
      background-color: ${({ theme }) => theme.COLOR.keyWhite};
    }
  }
`;