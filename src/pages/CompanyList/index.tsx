import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DropDown from "../../components/DropDown";
import { PRODUCT_LIST, RECYCLE_LIST } from "../../const/const";
import CardList from "../../components/CardList";
import TxtNoCompList from "../../components/TxtNoCompList";

const Index = () => {
  const [productSelect, setProductSelect] = useState("");
  const [recycleSelect, setRecycleSelect] = useState("");
  const [list, setList] = useState([]);

  // 테스트용 데이터 호출
  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const res = await fetch("/list");
    const json = await res.json();
    const data = json.data;
    setList(data);
  };

  return (
    <Wrapper>
      <HiddenTitle>기업목록</HiddenTitle>
      <CateWrapper>
        <TxtSearchCount>전체 {list.length}개</TxtSearchCount>
        {list.length > 0 && (
          <>
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
          </>
        )}
      </CateWrapper>
      {list.length > 0 ? <CardList data={list} /> : <TxtNoCompList />}
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

const CateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const TxtSearchCount = styled.p`
  margin-right: auto;
  ${({ theme }) => theme.TEXT.label12};
`;
