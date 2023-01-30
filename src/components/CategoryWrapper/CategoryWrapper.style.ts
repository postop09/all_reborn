import styled from "styled-components";

export const CateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const TxtSearchCount = styled.p`
  margin-right: auto;
  ${({ theme }) => theme.TEXT.label12};
`;