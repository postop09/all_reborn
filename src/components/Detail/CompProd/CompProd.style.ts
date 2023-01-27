import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  justify-content: space-between;

  &::after {
    content: "";
    display: block;
    width: 109px;
    @media screen and (max-width: 380px) {
      width: 100px;
      height: 100px;
    }
    @media screen and (min-width: 415px) {
      width: 120px;
      height: 120px;
    }
  }
`;

export const TxtGray = styled.p`
  ${({ theme }) => theme.TEXT.body16};
  text-align: center;
  color: ${({ theme }) => theme.COLOR.secondWhite};
`;
