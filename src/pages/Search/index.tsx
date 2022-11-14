import React, { useContext, useEffect, useState } from "react";
import CardList from "../../components/CardList";
import styled from "styled-components";
import RecentList from "./RecentList";
import RecommendList from "./RecommendList";
import NewCompList from "./NewCompList";
import { AppContext } from "../../context/AppContext";
import DropDown from "../../components/DropDown";
import { PRODUCT_LIST, RECYCLE_LIST } from "../../const/const";

const Index = () => {
  const [productSelect, setProductSelect] = useState("");
  const [recycleSelect, setRecycleSelect] = useState("");
  // TODO 검색결과를 contextAPI 에서 가져와서 페이지를 렌더링 시킨다.
  const { searchList, setSearchList } = useContext(AppContext);

  // 검색페이지에 들어올 때 State reset
  useEffect(() => {
    setSearchList([]);
  }, []);

  if (searchList.length > 0) {
    return (
      <Wrapper>
        <HiddenTitle>검색 결과</HiddenTitle>
        <CateWrapper>
          <TxtSearchCount>검색결과 1,000개</TxtSearchCount>
          <DropDown
            list={PRODUCT_LIST}
            select={productSelect}
            setSelect={setProductSelect}
            defaultValue={"제품 분야"}
          />
          <DropDown
            list={RECYCLE_LIST}
            select={recycleSelect}
            setSelect={setRecycleSelect}
            defaultValue={"재활용품 종류"}
          />
        </CateWrapper>
        <CardList data={searchList} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <HiddenTitle>검색</HiddenTitle>
      <RecentList />
      <SubWrapper>
        <RecommendList />
        <NewCompList />
      </SubWrapper>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.section`
  padding: 20px 16px 0;
`;

const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;

const SubWrapper = styled.div`
  text-align: center;
`;

const CateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const TxtSearchCount = styled.p`
  margin-right: auto;
  ${({ theme }) => theme.TEXT.labelMd};
`;
