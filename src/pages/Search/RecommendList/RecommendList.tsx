import React from "react";
import { TitleH3 } from "../../../style/style";
import { OneWayButton } from "../../../components/Button/Button";
import { RECOMMEND_KEYWORDS } from "../../../const/keywordList";
import * as S from "./RecommendList.style";

const RecommendList = () => {
  return (
    <S.Wrapper>
      <TitleH3>이렇게 검색해보세요</TitleH3>
      <S.Ul>
        {RECOMMEND_KEYWORDS.map((keyword, index) => {
          return (
            <li key={index}>
              <OneWayButton text={"label12"} round={"md"} color={"white"} border={true}>
                {keyword}
              </OneWayButton>
            </li>
          );
        })}
      </S.Ul>
    </S.Wrapper>
  );
};

export default RecommendList;
