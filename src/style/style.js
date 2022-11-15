import styled from "styled-components";

// ASSETS --------------------------------------
export const Icon16 = styled.img`
  width: 16px;
  height: 16px;
  margin-bottom: 2px;
`;

export const ImgCard = styled.img`
  display: block;
  width: 109px;
  height: 109px;
  background: #d9d9d9;
`;

export const Img40 = styled.img`
  width: 40px;
  height: 40px;
`;

export const Img24 = styled.img`
  width: 24px;
  height: 24px;
`;

// TEXT -----------------------------------------
export const TitleH3 = styled.h3`
  margin-bottom: 12px;
  ${({ theme }) => theme.TEXT.headerMd};
`;

export const DetailTitleH3 = styled.h3`
  margin-bottom: 12px;
  ${({ theme }) => theme.TEXT.bodyLg};
`;

// Detail Component ----------------------------
export const DetailWrapper = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.keyOriginal};
  margin-bottom: 16px;
  padding-bottom: 16px;
`;
