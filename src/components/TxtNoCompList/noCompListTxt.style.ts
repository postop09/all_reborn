import styled from "styled-components";

export const TxtWrapper = styled.p`
  ${({ theme }) => theme.TEXT.body16};
  text-align: center;
  color: ${({ theme }) => theme.COLOR.pointOriginal};

  span {
    display: block;
  }
`;