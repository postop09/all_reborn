import styled from "styled-components";

export const SlideImg = styled.img`
  min-height: 210px;
`;

export const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;