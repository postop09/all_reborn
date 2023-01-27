import styled from "styled-components";

export const HiddenTxt = styled.span`
  ${({ theme }) => theme.TEXT.hide};
`;

export const Contents = styled.p`
  word-break: keep-all;
`;

export const Ul = styled.ul`
  margin-top: 12px;
  display: flex;
  column-gap: 8px;
`;