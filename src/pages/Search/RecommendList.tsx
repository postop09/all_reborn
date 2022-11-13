import React from 'react';
import {TitleH3} from "../../style/style";
import {OneWayButton} from "../../components/Button";
import styled from "styled-components";
import {RECOMMEND_KEYWORDS} from "../../const/const";

const RecommendList = () => {
    return (
        <Wrapper>
            <TitleH3>이렇게 검색해보세요</TitleH3>
            <Ul>
                {
                    RECOMMEND_KEYWORDS.map((keyword, index) => {
                        return (
                            <li key={index}>
                                <OneWayButton text={"labelMd"} round={"md"} color={"white"} border={true}>
                                    {keyword}
                                </OneWayButton>
                            </li>
                        )
                    })
                }
            </Ul>
        </Wrapper>
    );
};

export default RecommendList;

const Wrapper = styled.section`
  margin-bottom: 20px;
`

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 8px;
  max-width: 270px;
  margin: auto;
`