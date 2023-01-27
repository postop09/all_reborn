import React from "react";
import * as S from "./RecycleList.style";

type RecycleProps = {
  recycleList: string[];
};

const RecycleList = (props: RecycleProps) => {
  const { recycleList } = props;

  return (
    <S.Ul>
      {recycleList.map((item, index) => {
        return <S.Li key={index}>{item}</S.Li>;
      })}
    </S.Ul>
  );
};

export default RecycleList;
