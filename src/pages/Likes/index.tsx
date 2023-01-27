import React, { useEffect, useState } from "react";
import DropDown from "../../components/DropDown/DropDown";
import { PRODUCT_LIST, RECYCLE_LIST } from "../../const/keywordList";
import INoLikes from "../../assets/image/img_noLikes.png";
import * as mockData from "../../mockData";
import { onGetLikes } from "../../util/handleLikes";
import { CardProps } from "../../types/type";
import CardSimple from "../../components/CardSimple/CardSimple";
import * as S from "./index.style";

interface List extends Array<CardProps> {}

const Index = () => {
  const [productSelect, setProductSelect] = useState("");
  const [recycleSelect, setRecycleSelect] = useState("");
  const [list, setList] = useState<List>([]);

  useEffect(() => {
    onFilterLikes();
  }, []);

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
    <S.Wrapper>
      <S.HiddenTitle>기업목록</S.HiddenTitle>
      <S.CateWrapper>
        <S.TxtSearchCount>전체 {list.length}개</S.TxtSearchCount>
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
      </S.CateWrapper>
      {list.length > 0 ? (
        <S.Ul>
          {list.map((item) => {
            return <CardSimple key={item.id} id={item.id} img={item.img} name={item.title} likable={true} />;
          })}
        </S.Ul>
      ) : (
        <S.TxtWrapper>
          <img src={INoLikes} alt="" />
          <span>좋아요를 누른 기업이 없습니다.</span>
          <span>올리본에 등록되길 원하는 기업이 있으시면,</span>
          <span>팀 올리본으로 연락주세요!</span>
        </S.TxtWrapper>
      )}
    </S.Wrapper>
  );
};

export default Index;
