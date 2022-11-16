import React, { useContext, useEffect, useState } from "react";
import CardList from "../../components/CardList";
import styled from "styled-components";
import RecentList from "./RecentList";
import RecommendList from "./RecommendList";
import NewCompList from "./NewCompList";
import { AppContext } from "../../context/AppContext";
import DropDown from "../../components/DropDown";
import { PRODUCT_LIST, RECYCLE_LIST } from "../../const/const";
import INoSearch from "../../assets/image/img_noSearch.png";

const Index = () => {
  const [productSelect, setProductSelect] = useState("");
  const [recycleSelect, setRecycleSelect] = useState("");
  // TODO - 검색결과를 contextAPI 에서 가져와서 페이지를 렌더링 시킨다.
  // const { searchList, searchCase, setSearchCase} = useContext(AppContext);
  const { searchList, searchCase, setSearchCase }: any = useContext(AppContext);

  useEffect(() => {
    setSearchCase("default");
  }, []);

  // 검색 결과가 있는 화면
  if (searchCase === "hasData") {
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

  // 최초 검색 화면
  return (
    <Wrapper>
      <HiddenTitle>검색</HiddenTitle>
      <RecentList />
      {searchCase === "noData" && (
        <TxtNoList>
          <img src={INoSearch} alt="" />
          <span>[{searchList[0]}]</span> 에 대한 검색결과가 없습니다.
        </TxtNoList>
      )}
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

const TxtNoList = styled.p`
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.COLOR.pointOriginal};
  ${({ theme }) => theme.TEXT.bodyMd};

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
