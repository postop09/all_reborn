import React, { useEffect, useState } from "react";
import DropDown from "../../components/DropDown";
import { PRODUCT_LIST, RECYCLE_LIST } from "../../const/const";
import styled from "styled-components";
import INoLikes from "../../assets/image/img_noLikes.png";
import * as mockData from "../../mockData";
import { onGetLikes } from "../../util/handleLikes";
import { CardProps } from "../../util/type";
import CardSimple from "../../components/CardSimple";

interface List extends Array<CardProps> {}

const Index = () => {
  const [productSelect, setProductSelect] = useState("");
  const [recycleSelect, setRecycleSelect] = useState("");
  const [list, setList] = useState<List>([]);

  useEffect(() => {
    onFilterLikes();
  }, []);

  // 전체기업 중 좋아요 기업 출력
  const onFilterLikes = () => {
    const storage = onGetLikes();
    const data = mockData.list;
    let newData: List = [];

    if (storage) {
      storage.map((likeId) => {
        const findItem = data.find((item) => item.id === likeId);
        if (findItem) {
          newData.push(findItem);
        }
      });
      setList(newData);
    }
    return;
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
        <Ul>
          {list.map((item) => {
            return <CardSimple key={item.id} id={item.id} img={item.img} name={item.title} likable={true} />;
          })}
        </Ul>
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

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  justify-content: space-between;

  &::after {
    content: "";
    display: block;
    width: 109px;
    @media screen and (max-width: 380px) {
      width: 100px;
    }
    @media screen and (min-width: 415px) {
      width: 120px;
    }
  }
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
