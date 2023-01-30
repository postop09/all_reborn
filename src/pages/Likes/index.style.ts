import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 20px 16px 0;
`;

export const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;

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
    }
    @media screen and (min-width: 415px) {
      width: 120px;
    }
  }
`;

export const TxtWrapper = styled.p`
  ${({ theme }) => theme.TEXT.body16};
  text-align: center;
  color: ${({ theme }) => theme.COLOR.keyOriginal};

  img {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
  }

  span {
    display: block;
  }
`;