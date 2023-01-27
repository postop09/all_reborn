import styled from "styled-components";

export const Wrapper = styled.section`
  text-align: center;
`;

export const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;

export const TxtWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    ${({ theme }) => theme.TEXT.body14};
    font-weight: bold;
  }
`;

export const Strong = styled.strong`
  display: inline-block;
  margin-bottom: 20px;
  ${({ theme }) => theme.TEXT.header20};
  font-weight: bold;
`;
