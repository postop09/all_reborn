import React from 'react';
import {TitleH3} from "../../style/style";
import styled from "styled-components";

const RecentList = () => {
    return (
        <Wrapper>
            <TitleH3>최근에 검색했어요</TitleH3>
            <P>😳 최근 검색어가 없어요</P>
        </Wrapper>
    );
};

export default RecentList;

const Wrapper = styled.section`
  margin-bottom: 20px;
`

const P = styled.p`
  ${({theme}) => theme.TEXT.bodyLg};
  text-align: center;
`