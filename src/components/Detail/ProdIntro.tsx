import React from "react";
import { DetailTitleH3, DetailWrapper } from "../../style/style";
import styled from "styled-components";

const CompIntro = () => {
  return (
    <DetailWrapper>
      <DetailTitleH3>
        제품명<HiddenTxt> 소개</HiddenTxt>
      </DetailTitleH3>
      <Contents>
        비밀은 셋 중 둘이 죽었을 때에만 지킬 수 있다. 성공은 열심히 노력하며 기다리는 사람에게 찾아온다. 인간의 감정은
        누군가를 만날 때와 헤어질 때 가장 순수하며 가장 빛난다.
      </Contents>
    </DetailWrapper>
  );
};

export default CompIntro;

const HiddenTxt = styled.span`
  ${({ theme }) => theme.TEXT.hide};
`;

const Contents = styled.p`
  word-break: keep-all;
`;

const Ul = styled.ul`
  margin-top: 12px;
  display: flex;
  column-gap: 8px;
`;
