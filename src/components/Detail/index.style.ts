import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  min-height: 210px;
  background-color: #dddddd;
`;

export const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;

export const Wrapper = styled.div`
  padding: 14px 16px;
`;