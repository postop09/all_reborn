import styled from "styled-components";

export const RecycleWrapper = styled.dl`
  dt {
    flex: 1;
    margin-right: 8px;
    ${({ theme }) => theme.TEXT.body14};
  }

  dd {
    flex: 2;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const Link =styled.a`
  ${({theme}) => theme.TEXT.body14};
  color: ${({theme}) => theme.COLOR.secondOriginal};
  text-decoration: underline;
`