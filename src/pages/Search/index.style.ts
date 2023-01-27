import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 20px 16px 0;
`;

export const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;

export const SubWrapper = styled.div`
  text-align: center;
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

export const TxtNoList = styled.p`
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.COLOR.pointOriginal};
  ${({ theme }) => theme.TEXT.body14};

  img {
    display: block;
    width: 34px;
    height: 34px;
    margin: 0 auto 12px;
  }

  span {
    color: ${({ theme }) => theme.COLOR.pointBlack};
  }
`;
