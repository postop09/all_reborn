import React from "react";
import { Icon16, TitleH3 } from "../../../style/style";
import IClose from "../../../assets/icon/icon_close.png";
import { TwoWayButton } from "../../../components/Button/Button";
import * as S from "./RecentList.style";
import usePopKeyword from "../../../hooks/search/usePopKeyword";

const RecentList = () => {
  const {recentKeyword, popKeyword} = usePopKeyword();

  if (recentKeyword.length > 0) {
    const reverseList = [...recentKeyword].reverse();

    return (
      <S.Wrapper>
        <TitleH3>최근에 검색했어요</TitleH3>
        <S.Ul>
          {reverseList.map((keyword: string, index: number) => {
            return (
              <TwoWayButton color={"keyWhite"} round={"md"} text={"label12"} key={index}>
                <button type="button">{keyword}</button>
                <button type="button" onClick={() => popKeyword(keyword)}>
                  <Icon16 src={IClose} alt="최근 검색어 삭제" />
                </button>
              </TwoWayButton>
            );
          })}
        </S.Ul>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <TitleH3>최근에 검색했어요</TitleH3>
      <S.P>😳 최근 검색어가 없어요</S.P>
    </S.Wrapper>
  );
};

export default RecentList;
