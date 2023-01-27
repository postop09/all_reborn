import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 20px 16px 0;
`;

export const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;

export const CateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const TxtSearchCount = styled.p`
  margin-right: auto;
  ${({ theme }) => theme.TEXT.label12};
`;
