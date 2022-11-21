import React, { useEffect, useState } from "react";
import DropDown from "../../components/DropDown";
import { PRODUCT_LIST, RECYCLE_LIST } from "../../const/const";
import CardList from "../../components/CardList";
import styled from "styled-components";
import INoLikes from "../../assets/image/img_noLikes.png";
import * as mockData from "../../mockData";
import { onGetLikes } from "../../util/handleLikes";

const Index = () => {
  const [productSelect, setProductSelect] = useState("");
  const [recycleSelect, setRecycleSelect] = useState("");
  const [list, setList] = useState([]);
  const ARR = [1, 3, 5, 7, 1000];

  useEffect(() => {
    onShowLikeList();
  }, []);

  const onShowLikeList = () => {
    const storage = onGetLikes();
    console.log(storage);
    const data = mockData.list;
    let newData: any = [];
    ARR.map((like) => {
      const res = data.find((item) => item.id === like);
      if (res) {
        newData.push(res);
      }
    });
    console.log(newData);
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
      {list.length > 0 ? (
        <CardList data={list} />
      ) : (
        <TxtWrapper>
          <img src={INoLikes} alt="" />
          <span>좋아요를 누른 기업이 없습니다.</span>
          <span>올리본에 등록되길 원하는 기업이 있으시면,</span>
          <span>팀 올리본으로 연락주세요!</span>
        </TxtWrapper>
      )}
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

const TxtWrapper = styled.p`
  ${({ theme }) => theme.TEXT.body16};
  text-align: center;
  color: ${({ theme }) => theme.COLOR.keyOriginal};

  img {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
  }

  span {
    display: block;
  }
`;
